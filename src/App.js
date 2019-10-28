import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Menu from "./components/Menu";
import DataTable from "./components/DataTable";
import OrderTable from "./components/OrderTable";
import CacheManager from "./cache";
import { refreshState, addAllProducts } from "./redux/actions/actions";
import { isConnectonOnline } from "./utils/checkConnectionStatus";
import API from "./utils/API";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const fetchState = async () => {
    const cache = new CacheManager();
    const oldState = await cache.readData("products");
    dispatch(refreshState(oldState));
  };

  const fetchProducts = async () => {
    const result = await API.get("/products");
    const productList = result.data;
    dispatch(addAllProducts(productList));
  };

  useEffect(() => {
    isConnectonOnline() ? fetchProducts() : fetchState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <p style={{ textAlign: "center" }}>
        We are {isConnectonOnline() ? `online ✔️` : `offline ✖️`}
      </p>
      <Menu />
      <DataTable />
      <OrderTable />
    </div>
  );
}

export default React.memo(App);

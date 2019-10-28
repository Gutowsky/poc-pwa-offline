import React, { useEffect } from "react";
import CacheManager from "../cache";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { refreshCase } from "../redux/actions/actions";
import 'antd/dist/antd.css';
import "./OrderTable.scss";

const OrderTable = () => {
  const dispatch = useDispatch();

  const orders = useSelector(store => store.quotesStore.quotes);

  const fetchQuote = async () => {
    const cache = new CacheManager();
    const oldState = await cache.readData("quotes");
    dispatch(refreshCase(oldState));
  };

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDataAvailable = useSelector(
    store => store.productsStore.areProductsFetched
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Selling unit",
      dataIndex: "selling_unit",
      key: "selling_unit"
    },
    {
      title: "Price per item",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Floor position",
      dataIndex: "floor_position",
      key: "floor_position"
    },
    {
      title: "Unit of measure",
      dataIndex: "unit_of_measure",
      key: "unit_of_measure"
    }
  ];

  return (
    <>
      <Table
        className="order-table"
        pagination={false}
        loading={!isDataAvailable}
        bordered
        dataSource={orders}
        columns={columns}
      />
    </>
  );
};

export default React.memo(OrderTable);

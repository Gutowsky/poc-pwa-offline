import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button, InputNumber } from "antd";
import { addProduct } from '../redux/actions/actions';
import 'antd/dist/antd.css';
import "./DataTable.scss";

const DataTable = () => {
  const dispatch = useDispatch();

  const products = useSelector(store => store.productsStore.products);

  const isDataAvailable = useSelector(
    store => store.productsStore.areProductsFetched
  );

  const onQuantityChange = () => {
    console.log('change');
  }

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
    },
    {
      title: "Quantity",
      render: () => (
        <InputNumber min={1} max={10} defaultValue={3} onChange={onQuantityChange} />
      )
    },
    {
      title: "Add all selected",
      render: (text, record, index) => (
        <Button type="primary" onClick={() => dispatch(addProduct(record))}>Add</Button>
      )
    }
  ];

  return (
    <>
      <Table
        rowKey={record => record.simple_product_id}
        loading={!isDataAvailable}
        bordered
        dataSource={products}
        columns={columns}
      />
    </>
  );
};

export default React.memo(DataTable);

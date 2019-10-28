import React from "react";
import { Button, Input, Table } from "antd";
import "antd/es/table/style/css";
import "antd/es/input/style/css";
import "./Menu.scss";

const Menu = () => {
  const dataSource = [
    {
      row: "Order Value",
      Min: 10,
      Actual: 4,
      Max: 10000
    },
    {
      row: "Order Weight",
      Min: 100,
      Actual: 12,
      Max: 100000
    },
    {
      row: "Floor position",
      Min: 2,
      Actual: 0.5,
      Max: 10
    },
    {
      row: "Selling unit",
      Min: 10,
      Actual: 1,
      Max: 1000
    }
  ];

  const columns = [
    {
      title: "QOR",
      dataIndex: "row",
      key: "row"
    },
    {
      title: "Min",
      dataIndex: "Min",
      key: "Min"
    },
    {
      title: "Actual",
      dataIndex: "Actual",
      key: "Actual"
    },
    {
      title: "Max",
      dataIndex: "Max",
      key: "Max"
    }
  ];

  return (
    <div className="menu-container">
      <div className="menu-container__left-col">
        <label>Hierarchy</label>
        <Input />
        <label>Delivery point</label>
        <Input />
        <label>Product mix</label>
        <Input />
      </div>
      <div className="menu-container__right-col">
        <div className="menu-container__right-col__top-bar">
          <Button className="import-data">Import data</Button>
          <Button className="send-order">Send order</Button>
          <Button className="pick-language">EN</Button>
        </div>
        <div className="menu-container__right-col__bottom-bar">
          <label>Truck Type</label>
          <Input />
          <Table id="order-table" bordered pagination={false} dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Menu);

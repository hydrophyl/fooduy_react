import React, { useState, useEffect } from "react";
import { Table, Typography, Popconfirm, Modal } from "antd";
import { getGoods, deleteGoodById } from "../../action/dashboard/dashboard";
import { DeleteFilled } from "@ant-design/icons";
import Edit from "./Edit";
import GoodEditForm from "./GoodEditForm";

const { Title } = Typography;

function Data() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    async function fetchGoods() {
      const res = await getGoods();
      setGoods(res);
    }
    fetchGoods();
  });

  const removeGood = (id) => {
    deleteGoodById(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => <div>{name}</div>,
    },
    {
      title: "Menge",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
      render(quantity) {
        return <div className="t-center">{quantity}</div>;
      },
    },
    {
      title: "Gewicht",
      dataIndex: "weight",
      sorter: (a, b) => a.weight - b.weight,
      render(weight) {
        return <div className="t-center">{weight}</div>;
      },
    },
    {
      title: "Price in Euro",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render(price) {
        return <div className="t-center">{price}</div>;
      },
    },
    {
      title: "Market",
      dataIndex: "boughtSource",
      editable: true,
      render(boughtSource) {
        return <div>{boughtSource}</div>;
      },
    },
    {
      title: "Art der Lebensmittel",
      dataIndex: "category",
      editable: true,
      render(category) {
        return <div>{category}</div>;
      },
    },
    {
      title: "Action",
      dataIndex: "_id",
      editable: true,
      render(id) {
        return (
          <div className="row-actions t-left">
            <GoodEditForm />
            <Edit _id={id} />
            <Popconfirm
              title="Wirklich löschen?"
              onConfirm={() => removeGood(id)}
            >
              <DeleteFilled style={{ fontSize: "20px" }} className="ml-1" />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div className="ml-5 mt-1 t-center">
      <Title level={3}>Warendaten</Title>
      <Table
        pagination={{ pageSize: 6 }}
        columns={columns}
        dataSource={goods.data}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (e) => {
              const rowData = goods.data[rowIndex];
              Detail(rowData);
            },
          };
        }}
      />
    </div>
  );
}

export default Data;

function Detail(rowData) {
  Modal.info({
    title: "Details",
    content: (
      <div>
        <p>{rowData.boughtDate}</p>
        <p>{rowData.name}</p>
        <p>{rowData.price}</p>
        <p>{rowData.weight}</p>
        <p>{rowData.quantity}</p>
        <p>{rowData.boughtSource}</p>
        <p>{rowData.category}</p>
      </div>
    ),
    onOk() {
      console.log("OK");
    },
  });
}

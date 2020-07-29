import React, { useState, useEffect } from "react";
import { Table, Typography, Popconfirm } from "antd";
import { getGoods, deleteGoodById } from "../../action/dashboard/dashboard";
import { DeleteFilled , EditOutlined } from "@ant-design/icons";

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
      render(quantity) {
        return <div>{quantity}</div>;
      },
    },
    {
      title: "Gewicht",
      dataIndex: "weight",
      render(weight) {
        return <div>{weight}</div>;
      },
    },
    {
      title: "Price in Euro",
      dataIndex: "price",
      render(price) {
        return <div>{price}</div>;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
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
          <div>
            <EditOutlined 
              style={{fontSize:"18px"}}
              className="mr-1"
            />
            <Popconfirm
              title="Wirklich löschen?"
              onConfirm={() => removeGood(id)}
            >
              <DeleteFilled 
                style={{fontSize:"18px"}}
                className="ml-1"
              />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div className="ml-5 mt-1 t-center">
      <Title level={3}>Warendaten</Title>
      <Table pagination={5} columns={columns} dataSource={goods.data} />
    </div>
  );
}

export default Data;

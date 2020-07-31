import React, { useState, useEffect } from "react";
import { Table, Typography, Popconfirm } from "antd";
import { getGoods, deleteGoodById } from "../../action/dashboard/dashboard";
import { DeleteFilled } from "@ant-design/icons";
import Edit from "./Edit";

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
      sorter: (a, b) => a.weight - b.weight,
      render(quantity) {
        return <div className="t-center">{quantity}</div>;
      },
    },
    {
      title: "Gewicht",
      dataIndex: "weight",
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
    /* {
      title: "Date",
      dataIndex: "boughtDate",
      render: (boughtDate) => <Moment format="YYYY/MM/DD">{boughtDate}</Moment>,
    }, */
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
            <Edit _id={id}/>
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
      />
    </div>
  );
}

export default Data;

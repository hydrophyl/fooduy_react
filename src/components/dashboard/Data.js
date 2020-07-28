import React from "react";
import { Table, Typography } from "antd";

const { Title } = Typography;
function Data() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Menge",
      dataIndex: "menge",
    },
    {
      title: "Gewicht",
      dataIndex: "gewicht",
    },
    {
      title: "Market",
      dataIndex: "market",
    },
    {
      title: "Art der Lebensmittel",
      dataIndex: "category",
    },
    {
      title: "Action",
      dataIndex: "_id",
    },
  ];

  return (
    <div className="ml-5 mt-1 t-center">
      <Title level={3}>Warendaten</Title>
      <Table pagination={5} columns={columns} />
    </div>
  );
}

export default Data;

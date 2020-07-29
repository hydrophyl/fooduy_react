import React, { useState } from "react";
import { Typography, Input, Select, Switch, Row, Col, Button } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";
import { add } from "../../action/dashboard/dashboard";
import { toast } from "react-toastify";

const { Title } = Typography;
const { Option } = Select;
function Add() {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    quantity: 0,
    weight: 0,
    category: "",
    boughtSource: "",
  });

  const { name, price, quantity, weight, category, boughtSource } = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      name.length === null ||
      price === 0 ||
      typeof price !== "number" ||
      typeof weight !== "number" ||
      typeof quantity !== "number" ||
      boughtSource.length === null ||
      category.length === null ||
      category === ""
    ) {
      if (name.length === null || name === "")
        toast.warn("Name of good is required");
      if (price === 0 || price === "")
        toast.warn("Price of good is required or not 0");
      if (typeof price !== "number" || price instanceof String)
        toast.warn("Price of good must be number");
      if (typeof weight !== "number" || price instanceof String)
        toast.warn("Weight of good must be number");
      if (typeof quantity !== "number" || price instanceof String)
        toast.warn("Quantity of good must be number");
      if (boughtSource.length === null || boughtSource === "")
        toast.warn("Bought source of good is required");
      if (category.length === null || category === "")
        toast.warn("Category source of good is required");
    } else {
      try {
        await add(name, price, quantity, weight, boughtSource, category);
        toast.success(`${name} with ${price} € has been added in Database`, {
          position: "top-center",
        });
        setFormData({
          name: "",
          price: 0,
          quantity: 0,
          weight: 0,
          boughtSource: "",
          category: "",
        });
      } catch (e) {
        toast.warning(
          `Something is wrong! Good could not be added to the Database.`,
          {
            position: "top-center",
          }
        );
      }
    }
  };

  return (
    <div className="Add mt-1">
      <Title level={3}> Eingabe des Warenseinsatzs</Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
      >
        <FormItem
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input name!",
            },
          ]}
        >
          <Input
            placeholder="Input something here"
          />
        </FormItem>
        <FormItem
          label="Preis"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Input something here" />
        </FormItem>
        <FormItem
          label="Gewicht"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Input something here" />
        </FormItem>
        <FormItem
          label="Menge"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Input something here" />
        </FormItem>
        <FormItem
          label="Markt"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select an option">
            <Option value="item1">Item 1</Option>
            <Option value="item2">Item 2</Option>
            <Option value="item3">Item 3</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Row>
            <Col span={6} className="t-right pr-1">
              <Switch />
            </Col>
            <Col span={18}>
              <Input placeholder="Andere" />
            </Col>
          </Row>
        </FormItem>
        <FormItem
          label="Nahrung"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="meat1">Meat 1</Select.Option>
            <Select.Option value="meat2">Meat 2</Select.Option>
            <Select.Option value="meat3">Meat 3</Select.Option>
            <Select.Option value="meat4">Meat 4</Select.Option>
            <Select.Option value="meat5">Meat 5</Select.Option>
          </Select>
        </FormItem>
        <FormItem className="w-100 t-right">
          <Button
            style={{ backgroundColor: "#a0d911", color: "#fff" }}
            htmlType="submit"
            size="large"
            //onClick={(e) => onSubmit(e)}
          >
            Speichern
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default Add;

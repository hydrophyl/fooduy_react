import React from "react";
import { Typography, Input, Select, Switch, Row, Col, Button } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";

const { Title } = Typography;
const { Option } = Select;
function Add() {
  /* const [formData, setFormData] = useState(
        {
            name: "",
            price: 0,
            quantity: 0,
            weight: 0,
            category: "",
            boughtSource: "",
        }
    );

    const {
        name, price, quantity, weight, category, boughtSource
    } = formData; */

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
            },
          ]}
        >
          <Input placeholder="Input something here" />
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
      </Form>
      <div className="w-100 t-right">
        <Button style={{ backgroundColor: "#a0d911", color: "#fff" }}>
          Speichern
        </Button>
      </div>
    </div>
  );
}

export default Add;

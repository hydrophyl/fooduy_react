import React from "react";
import { Typography, Input, Select } from "antd";
import Form from "antd/lib/form/Form";
import FormItem from "antd/lib/form/FormItem";

const { Title } = Typography;
const {Option} = Select;
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
    <div className="Add">
      <Title level={3}> Eingabe des Warenseinsatzs</Title>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
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
      </Form>
    </div>
  );
}

export default Add;

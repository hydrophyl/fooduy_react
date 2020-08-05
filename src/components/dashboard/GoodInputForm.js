import React, { useState } from "react";
import { Button, Input, Form, Select } from "antd";
import { BoughtSource } from "../../entities/BoughtSource";
import { GoodCategory } from "../../entities/GoodCategory";
import * as Yup from "yup";
import { add } from "../../action/dashboard/dashboard";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  category: Yup.string().required("Category required"),
  boughtSource: Yup.string().required("boughtSource required"),
  quantity: Yup.number()
    .positive("Quantity is not positive")
    .required("Quantity required"),
  weight: Yup.number()
    .positive("Weight is not positive")
    .required("Weight required"),
  price: Yup.number()
    .positive("Price is not positive")
    .required("Price required"),
  name: Yup.string().required("Name required"),
});

function GoodInputForm() {
  const [goodData, setGoodData] = useState({
    id: null,
    name: "",
    price: 0,
    weight: 0,
    quantity: 0,
    boughtSource: "",
    category: "",
  });

  const { id, name, price, weight, quantity, boughtSource, category } = goodData;

  const checkGood = async (e) => {
    try {
      await validationSchema.validate(goodData);
      toast.success("Ngonnnnn");
    } catch (error) {
      console.log(error.errors);
      toast.warning(error.errors[0]);
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    setGoodData({ ...goodData, [target.name]: target.value });
  };

  const submitForm = async (e) => {
    //add function to POST data to server
    try {
      await checkGood(e);
      await add(name, price, quantity, weight, boughtSource, category);
    } catch (error) {
      console.log(error);
    }
    console.log(id, name, price, weight, quantity, boughtSource, category);
  };

  return (
    <div className="t-center pt-2">
      <h2 className="w-100 mb-1">Add Good to Datenbank</h2>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size="large"
        onFinish={submitForm}
        className="ml-5"
      >
        <Form.Item label="Name">
          <Input name="name" onChange={(e) => handleInputChange(e)} />
        </Form.Item>
        <Form.Item label="Price">
          <Input
            htmlType="number"
            name="price"
            className="w-100"
            defaultValue={0}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
        <Form.Item label="Weight">
          <Input
            htmlType="number"
            name="weight"
            className="w-100"
            defaultValue={0}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
        <Form.Item label="Quantity">
          <Input
            htmlType="number"
            name="quantity"
            className="w-100"
            defaultValue={0}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
        <Form.Item label="boughtSource">
          <Select
            name="boughtSource"
            showSearch
            onChange={(boughtSourceInput) =>
              setGoodData({ ...goodData, boughtSource: boughtSourceInput })
            }
          >
            {Object.values(BoughtSource).map((boughtSource) => (
              <Select.Option key={boughtSource} value={boughtSource}>
                {boughtSource}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Category">
          <Select
            name="category"
            showSearch
            onChange={(categoryInput) =>
              setGoodData({ ...goodData, category: categoryInput })
            }
          >
            {Object.values(GoodCategory).map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Add to database
        </Button>
      </Form>
    </div>
  );
}

export default GoodInputForm;

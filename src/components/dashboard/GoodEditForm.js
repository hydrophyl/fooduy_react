import React, { useState } from "react";
import { Input, Form, Select, Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { BoughtSource } from "../../entities/BoughtSource";
import { GoodCategory } from "../../entities/GoodCategory";
import { edit } from "../../action/dashboard/dashboard";
import * as Yup from "yup";
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

function GoodEditForm() {
  const [goodData, setGoodData] = useState({
    id: null,
    name: "",
    price: 0,
    weight: 0,
    quantity: 0,
    boughtSource: "",
    category: "",
  });

  const {
    id,
    name,
    price,
    weight,
    quantity,
    boughtSource,
    category,
  } = goodData;

  const handleOK = async (e) => {
    try {
      await validationSchema.validate(goodData);
      toast.success("Ngonnnnn");
      console.log(id, name, price, weight, quantity, boughtSource, category);
      setState({ confirmLoading: true });
    } catch (error) {
      console.log(error.errors);
      toast.warning(error.errors[0]);
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    setGoodData({ ...goodData, [target.name]: target.value });
  };

  const [state, setState] = useState({
    ModalText: "Edit Waren",
    visible: false,
    confirmLoading: false,
  });

  const { visible, confirmLoading } = state;

  const showModal = () => setState({ visible: true });

  const handleCancel = () => {
    setState({ visible: false });
  };
  return (
    <div>
      <EditOutlined
        style={{ fontSize: "20px" }}
        className="mr-1"
        onClick={showModal}
      />
      <Modal
        title="Edit"
        visible={visible}
        onOk={handleOK}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={handleOK}
          >
            OK?
          </Button>,
        ]}
      >
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          size="large"
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
        </Form>
      </Modal>
    </div>
  );
}

export default GoodEditForm;

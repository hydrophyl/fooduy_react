import React, { useState } from "react";
import { Input, Form, Select, Modal, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { BoughtSource } from "../../entities/BoughtSource";
import { GoodCategory } from "../../entities/GoodCategory";
import { edit, getGoodById } from "../../action/dashboard/dashboard";
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

function GoodEditForm(_id) {
  const [goodData, setGoodData] = useState({
    id: _id._id,
    name: "",
    price: 0,
    weight: 0,
    quantity: 0,
    boughtSource: "",
    category: "",
  });

  const handleOK = async (e) => {
    try {
      await validationSchema.validate(goodData);
      toast.success("Ngonnnnn");
      edit(_id, goodData);
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

  const handleReset = async () => {
    try {
      const response = await getGoodById(_id._id);
      setGoodData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          <Button key="reset" onClick={handleReset}>
            Reset
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
            <Input
              name="name"
              value={goodData.name}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input
              htmlType="number"
              name="price"
              className="w-100"
              value={goodData.price}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Item>
          <Form.Item label="Weight">
            <Input
              htmlType="number"
              name="weight"
              className="w-100"
              value={goodData.weight}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Item>
          <Form.Item label="Quantity">
            <Input
              htmlType="number"
              name="quantity"
              className="w-100"
              value={goodData.quantity}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Item>
          <Form.Item label="boughtSource">
            <Select
              name="boughtSource"
              showSearch
              value={goodData.boughtSource}
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
              value={goodData.category}
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

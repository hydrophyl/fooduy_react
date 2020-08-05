import React, { useState } from "react";
import {
  Modal,
  Input,
  InputNumber,
  Form,
  Select,
  Row,
  Col,
  Switch,
} from "antd";
import { edit } from "../../action/dashboard/dashboard";
import { toast } from "react-toastify";
import { EditOutlined } from "@ant-design/icons";

const { Option } = Select;

function Edit(_id) {
  const [disable, setDisable] = useState("true");
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    quantity: 0,
    weight: 0,
    boughtSource: "",
    category: "",
  });

  const { name, price, quantity, weight, boughtSource, category } = formData;

  const [state, setState] = useState({
    ModalText: "Edit Waren",
    visible: false,
    confirmLoading: false,
  });

  const { visible, confirmLoading, ModalText } = state;

  const showModal = () => setState({ visible: true });

  const changeGood = async (e) => {
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
        await edit(_id, formData);
        toast.success(`${name} with ${price} € has been changed in Database`, {
          position: "top-center",
        });
      } catch (error) {
        console.log(error);
        toast.warning(
          `Something is wrong! Good could not be added to the Database.`,
          {
            position: "top-center",
          }
        );
      }
    }
  };

  const handleOK = (element) => {
    setState({ confirmLoading: true });
    changeGood(element);
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
      >
        <p>{ModalText}</p>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout="horizontal"
          labelAlign="left"
        >
          <Form.Item label="Name">
            <Input
              name="name"
              placeholder="Name des Lebensmittels"
              defaultValue="thit meo"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value }) 
              }
            />
          </Form.Item>
          <Form.Item label="Preis">
            <InputNumber
              name="price"
              className="w-100"
              placeholder="Preis in Euro"
              onChange={(priceInput) =>
                setFormData({ ...formData, price: priceInput })
              }
            />
          </Form.Item>
          <Form.Item label="Gewicht">
            <InputNumber
              name="weight"
              placeholder="Gewicht des Lebensmittels in kg"
              onChange={(weightInput) =>
                setFormData({ ...formData, weight: weightInput })
              }
            />
          </Form.Item>
          <Form.Item label="Menge">
            <InputNumber
              className="w-100"
              name="quantity"
              placeholder="Menge des Lebensmittels"
              onChange={(quantityInput) =>
                setFormData({ ...formData, quantity: quantityInput })
              }
            />
          </Form.Item>
          <Form.Item label="Markt">
            <Select
              name="boughtSource"
              showSearch
              placeholder="Ort des Kaufs"
              onChange={(boughtSourceInput) =>
                setFormData({ ...formData, boughtSource: boughtSourceInput })
              }
            >
              <Option value="rewe">Rewe</Option>
              <Option value="aldi">Aldi</Option>
              <Option value="lidl">Lidl</Option>
              <Option value="kaufland">Kaufland</Option>
              <Option value="netto">Netto</Option>
              <Option value="edeka">EDEKA</Option>
              <Option value="asia">Asia Markt</Option>
              <Option value="sontiges">Sonstiges</Option>
            </Select>
            <Row className="mt-1">
              <Col span={4} className="pr-1">
                <Switch onChange={() => setDisable(!disable)} />
              </Col>
              <Col span={20}>
                <Input
                  name="boughtSource"
                  placeholder="Andere"
                  disabled={disable}
                  onChange={(boughtSourceInput) =>
                    setFormData({
                      ...formData,
                      boughtSource: boughtSourceInput.target.value,
                    })
                  }
                />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Nahrung">
            <Select
              name="category"
              showSearch
              placeholder="Art der Nahrung"
              onChange={(categoryInput) =>
                setFormData({ ...formData, category: categoryInput })
              }
            >
              <Select.Option value="meat">Fleisch</Select.Option>
              <Select.Option value="fish">Fisch</Select.Option>
              <Select.Option value="vegetable">Gemüse</Select.Option>
              <Select.Option value="additive">Zusatz</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Edit;

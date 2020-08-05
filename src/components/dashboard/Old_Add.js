import React, { useState } from "react";
import {
  Form,
  InputNumber,
  Typography,
  Input,
  Select,
  Switch,
  Row,
  Col,
  Button,
} from "antd";
import { add } from "../../action/dashboard/dashboard";
import { toast } from "react-toastify";

const { Title } = Typography;
const { Option } = Select;

function Add() {
  const [disable, setDisable] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    quantity: 0,
    weight: 0,
    category: "",
    boughtSource: "",
  });

  const { name, price, quantity, weight, category, boughtSource } = formData;

  const addGood = (element) => {
    onSubmit(element);
  };

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
          category: "",
          boughtSource: "",
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
    <div className="t-center mt-1">
      <Title level={3}> Eingabe des Warenseinsatzs</Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
      >
        <Form.Item label="Name">
          <Input
            name="name"
            placeholder="Name des Lebensmittels"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Preis">
          <InputNumber
            className="w-100"
            name="price"
            placeholder="Preis des Lebensmittels in €"
            onChange={(priceInput) =>
              setFormData({ ...formData, price: priceInput })
            }
          />
        </Form.Item>
        <Form.Item label="Gewicht">
          <InputNumber
            className="w-100"
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
            <Col span={2} className="t-right pr-1">
              <Switch onChange={() => setDisable(!disable)} />
            </Col>
            <Col span={22}>
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
        <div className="w-100 t-right">
          <Button
            style={{ backgroundColor: "#a0d911", color: "#fff" }}
            htmlType="submit"
            size="large"
            onClick={(e) => addGood(e)}
          >
            Speichern
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Add;

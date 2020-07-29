import React from "react";
import { Typography, Form, Input, Checkbox, Button, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import "../../styles/Login.css";

const { Title } = Typography;
function Login() {
  return (
    <div className="t-center w-100 bg-dark vh-100 pt-5">
      <div className="login-window m-auto pd-2">
        <Title level={2} className="cl-white">
          Sign in
        </Title>
        <Form className="login-form mt-2" layout="horizontal">
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your username"
              prefix={<UserOutlined />}
              suffix={
                <Tooltip title="Username or email like email@domain.com">
                  <InfoCircleOutlined />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Form.Item name="remember">
            <Checkbox className="cl-white">Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              type="ghost"
              htmlType="submit"
              className="btn-login cl-white"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;

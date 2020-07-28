import React from "react";
import { Typography, Form, Input, Checkbox, Button } from "antd";
import "../../styles/Login.css";
import { Link } from "react-router-dom";

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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember">
            <Checkbox className="cl-white">Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Link exact to={`/home`}>
              <Button
                size="large"
                type="ghost"
                htmlType="submit"
                className="btn-login cl-white"
              >
                Login
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;

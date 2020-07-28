import React from "react";
import foodylogo from "../../images/logo-lang.png";
import { Row, Col, Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <Row className="navbar">
        <Col span={10}></Col>
        <Col span={13} className="logo">
          <Link exact to={`/`}>
            <img alt="logo" src={foodylogo} />
          </Link>
        </Col>
        <Col span={1} className="navItems">
          <Avatar
            className="userIcon"
            size="large"
            shape="square"
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Header;

import React from "react";
import foodylogo from "../images/logo-lang.png";
import { Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <Row className="navbar">
        <Col span={20} className="logo">
          <img alt="logo" src={foodylogo} />
        </Col>
        <Col span={4} className="navItems">
          <Avatar 
            className="userIcon" 
            size="large"
            shape="square" 
            style={{backgroundColor:"#87d068"}}
            icon={<UserOutlined />} />
        </Col>
      </Row>
    </div>
  );
}

export default Header;

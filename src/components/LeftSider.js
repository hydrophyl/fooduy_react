import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { PlusCircleOutlined, BarChartOutlined } from "@ant-design/icons";
const { Sider } = Layout;

function LeftSider() {
  const [collapse, setCollapse] = useState(false);
  return (
    <Layout>
      <Sider
        className="leftsider"
        width={200}
        style={{ backgroundColor: "#262626" }}
        collapsible
        collapsed={collapse}
        onCollapse={() => setCollapse(!collapse)}
      >
        <Menu
          breakpoint="sm"
          style={{ backgroundColor: "#262626" }}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1" icon={<PlusCircleOutlined />}>
            Add
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            Data
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default LeftSider;

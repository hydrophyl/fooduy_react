import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { PlusCircleOutlined, BarChartOutlined } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
const { Sider } = Layout;

function LeftSider() {
  const [collapse, setCollapse] = useState(false);
  return (
    <Layout>
      <Sider
        className="leftsider"
        style={{ backgroundColor: "#262626" }}
        collapsible
        collapsed={collapse}
        onCollapse={() => setCollapse(!collapse)}
      >
        <Menu
          style={{ backgroundColor: "#262626" }}
          mode="inline"
          theme="dark"
        >
          <SubMenu key="1" icon={<PlusCircleOutlined />} title="Zutaten">
            <Menu.Item key="11" icon={<PlusCircleOutlined />}>
              Einkaufen
            </Menu.Item>
            <Menu.Item key="12" icon={<PlusCircleOutlined />}>
              Lieferando
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            Lager
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default LeftSider;

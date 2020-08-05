import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
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
        <Menu style={{ backgroundColor: "#262626" }} mode="inline" theme="dark">
          <SubMenu key="1" icon={<PlusCircleOutlined />} title="Zutaten">
            <Menu.Item key="10" icon={<PlusCircleOutlined />}>
              <Link exact to={`/add/einkauf`}>
                yup-validated Einkaufen
              </Link>
            </Menu.Item>
            <Menu.Item key="11" icon={<PlusCircleOutlined />}>
              Lieferando
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            <Link exact to={`/data`}>
              Lager
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
}

export default LeftSider;

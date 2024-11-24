import React from "react";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const AdminLayout: React.FC = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Sider>
      <Menu theme="dark" mode="inline">
        <Menu.Item className="text-red-500" key="1">
          Dashboard
        </Menu.Item>
        <Menu.Item className="text-red-500 text-xl" key="2">
          Users
        </Menu.Item>
      </Menu>
    </Sider>

    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo text-white">LOGO</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      <Content style={{ margin: "16px" }}>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
);

export default AdminLayout;

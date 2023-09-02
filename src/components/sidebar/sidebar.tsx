import { Layout, Menu, theme } from 'antd';
import { sidebarItems } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

const Sidebar = (props: any) => {

  const {collapsed, selectedKeys } = props
  const { token: { colorBgContainer }} = theme.useToken();
  const navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{ overflow: "auto", height: "100vh", background: colorBgContainer }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        onClick={(item) => navigate(item.key)}
        defaultOpenKeys={["/"]}
        mode="inline"
        inlineCollapsed={collapsed}
        selectedKeys={[selectedKeys]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;

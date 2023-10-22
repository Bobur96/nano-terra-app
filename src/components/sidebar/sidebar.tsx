import { Layout, Menu, theme } from "antd";
import { sidebarItems } from "../../config/constants";
import { useNavigate } from "react-router-dom";
import logo2 from "../../icons/logo_2.png";
import "./sidebar.css";

const { Sider } = Layout;

const Sidebar = (props: any) => {
  const { collapsed, selectedKeys } = props;
  const { token: { colorBgContainer } } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Sider
      id="sidebar"
      trigger={null}
      collapsible width={280}
      collapsed={collapsed}
      style={{ background: colorBgContainer }}
    >
      <div className="content">
        <div className="side_top">
          <img src={logo2} alt="logo" />
          { !collapsed && <span>Dashbord</span> }
        </div>
        <div className="content_bottom">
          { !collapsed && <p>Main menu</p> }
          <Menu
            onClick={(item) => navigate(item.key)}
            defaultOpenKeys={["/"]}
            mode="inline"
            inlineCollapsed={collapsed}
            selectedKeys={[selectedKeys]}
            items={sidebarItems[0]}
          />
        </div>
      </div>

      <div className="side_bottom" style={collapsed ? {width: "60%"} : {width: "88.4%"}}>
        <div className="content_bottom">
          { !collapsed && <p>Performances</p> }
          <Menu
            className="preference"
            onClick={(item) => navigate(item.key)}
            defaultOpenKeys={["/"]}
            mode="inline"
            inlineCollapsed={collapsed}
            selectedKeys={[selectedKeys]}
            items={sidebarItems[1]}
          />
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;

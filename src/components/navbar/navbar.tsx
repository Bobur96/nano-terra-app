import home from "../../icons/home.svg";
import search from "../../icons/search.svg";
import chevronRight from "../../icons/chevronRight.svg";
import notification from "../../icons/notification.svg";
import profile from "../../icons/profile.png";
import { Layout, Typography, theme } from "antd";
import './navbar.css';

const { Text } = Typography;
const { Header } = Layout;

const Navbar = (props: any) => {
  const { collapsed, setCollapsed } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        margin: "16px 20px 0 20px",
        background: colorBgContainer,
      }}
      className="navbar"
    >
      <div className="top_left">
        <img src={home} alt="home" onClick={() => setCollapsed(!collapsed)} style={{ fontSize: "20px", cursor: 'pointer' }}/>
        <img src={chevronRight} alt="right" />
        <Text className="nav_title">Document</Text>
      </div>

      <div className="top_right">
        <div className="input">
          <input type="text" placeholder="John Doe" />
          <img src={search} alt="search" />
        </div>
        <img src={notification} alt="notification" />
        <div className="top_middle">
          <Text>Kruluz Utsman</Text>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </Header>
  );
};

export default Navbar;

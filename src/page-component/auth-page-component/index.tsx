import { CloseOutlined } from "@ant-design/icons";
import logo from "../../icons/logo_1.png";
import { Row } from "antd";
import "./auth.css";
import { useState } from "react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

const Index = () => {

  const [login, setLogin] = useState(false)

  return (
    <Row className="sign_in">
      <div className="layout left">
        <img src={logo} alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie
          lacus. Faucibus arcu aliquam nullam nunc dictumst.
        </p>
      </div>
      <div className="layout right">
        <h3>Tizimga kirish</h3>
        {
          login ? <SignIn/> : <SignUp/>
        }
      </div>
    </Row>
  );
};

export default Index;

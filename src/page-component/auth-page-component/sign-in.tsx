import { CloseOutlined } from "@ant-design/icons";
import logo from "../../icons/logo_1.png";
import { Row } from "antd";
import "./auth.css";

const SignIn = () => {
  return (
    <form>
      <div className="form_item">
        <label htmlFor="">Login</label>
        <div style={{ position: "relative", height: "55px" }}>
          <input type="text" />
          <CloseOutlined />
        </div>
      </div>

      <div className="form_item">
        <label htmlFor="">Parol</label>
        <div style={{ position: "relative", height: "55px" }}>
          <input type="text" />
          <CloseOutlined />
        </div>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default SignIn;

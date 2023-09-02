import { CloseOutlined } from "@ant-design/icons";
import "./auth.css";

const SignUp = () => {
  return (
    <form>
      <div className="form_item">
        <label htmlFor="">IVV</label>
        <div>
          <input type="text" />
        </div>
      </div>

      <div className="form_item">
        <label htmlFor="">VIBB Boshqarmasi</label>
        <div>
          <input type="text" />
        </div>
      </div>

      <div className="form_item">
        <label htmlFor="">Tuman II Bo'limi</label>
        <div>
          <input type="text" />
        </div>
      </div>

      <div className="form_item">
        <label htmlFor="">Login</label>
        <div>
          <input type="text" />
        </div>
      </div>

      <div className="form_item">
        <label htmlFor="">Password</label>
        <div>
          <input type="password" />
        </div>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default SignUp;

import { useState, useContext } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { Rigister } from "../../../contex/Contex";

const Finsh = () => {
  const [token, setToken] = useContext(Rigister);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const updatePost = async () => {
    if (phone && password) {
      const response = await fetch(
        `http://azizbek.samandardev.uz/v1/user/login/${phone}/${password}`
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setToken(JSON.stringify(data));
      }

      navigate("/");
    }
  };

  return (
    <>
      <SigininCon>
        <HomePage />
        <Link to="/">
          <div className="filter-blur"></div>
        </Link>
        <div className="register">
          <p className="register-title">Create your permanent password</p>

          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>

            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
            />
          </label>
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>

            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="  repeat your password"
            />
          </label>

          <Link to="/register/forgotpass">Forgot Password</Link>
          <button onClick={updatePost} type="button" className="reg-btn">
            Register
          </button>
        </div>
      </SigininCon>
    </>
  );
};

export default Finsh;

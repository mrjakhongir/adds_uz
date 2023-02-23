import { useState, useContext } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { Rigister } from "../../../contex/Contex";
import { request } from "../../../request/Axios";

const Finsh = () => {
  const faceProfilImg = `{"photo_url":"","media_type":"image"}`;
  const [token, setToken] = useContext(Rigister);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (phone && password) {
      request({ url: `/user/login/${phone}/${password}`, method: "get" }).then(
        (res) => {
          if (res.status === 200) {
            setToken(JSON.stringify(res.data));
          }
          localStorage.setItem("profil_img", faceProfilImg);
          navigate("/");
        }
      );
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
          <form onSubmit={handleFormSubmit} action="#" >
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
            <button type="submit" className="reg-btn">
              Register
            </button>
          </form>
        </div>
      </SigininCon>
    </>
  );
};

export default Finsh;

import { useState, useContext } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { Rigister } from "../../../contex/Contex";

const Finsh = () => {
  const [token, setToken] = useContext(Rigister);
  const [ful_name, setFulname] = useState("");
  const [password, setPassword] = useState("");
  const faceToken = localStorage.getItem("faceToken");

  const navigate = useNavigate();

  const updatePost = async () => {
    if (ful_name && password) {
      const requestOptions = {
        method: "PUT",
        headers: {
          Authorization: faceToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: ful_name,
          password: password,
        }),
      };
      const response = await fetch(
        "http://azizbek.samandardev.uz/v1/user/register/finish",
        requestOptions
      );
      const data = await response.json();
      console.log(
        `{full_name:${data.full_name},access_token:${data.access_token}}`
      );
      setToken(
        `{"full_name":"${data.full_name}","access_token":"${data.access_token}","phone_number":"${data.phone_number}"}`
      );

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
                value={ful_name}
                onChange={(e) => setFulname(e.target.value)}
                placeholder="Full name"
              />
            </label>
            <label className="input-name">
              <div className="input-name-icon">
                <img src={tel} alt="" />
              </div>

              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="  repeat your password"
              />
            </label>

            <button onClick={updatePost} className="reg-btn">
              Register
            </button>
         
        </div>
      </SigininCon>
    </>
  );
};

export default Finsh;

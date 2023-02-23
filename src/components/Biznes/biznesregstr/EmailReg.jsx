import React from "react";
import { useState,useContext } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { request } from "../../../request/Axios";
import { Rigister } from "../../../contex/Contex";

const EmailReg = () => {
    const [token, setToken] = useContext(Rigister);
    const res = JSON.parse(token);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  localStorage.setItem("email", email);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email) {
        console.log(email);
      request({
        url: "/business/register",
        method: "post",
        data: { email: email },
        headers:{
            "Content-Type": "application/json",
            Authorization: res.access_token,
        }
      }).then((json) => {
        console.log(json.data);
        navigate("/biznes/biznesregister/activecodeEmail");
      });
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
          <p className="register-title">Type your email</p>
          <form onSubmit={handleFormSubmit}>
            <label className="input-name">
              <div className="input-name-icon">
                <img src={tel} alt="" />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="adds@gmail.com"
              />
            </label>

            {/* <Link to="/register/login" className="loginIn">
              Login in
            </Link> */}
            <button type="submit" className="reg-btn">
              Confirm
            </button>
          </form>
        </div>
      </SigininCon>
    </>
  );
};

export default EmailReg;

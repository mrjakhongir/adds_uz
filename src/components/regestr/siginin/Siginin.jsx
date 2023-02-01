import React from "react";
import { useState } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";



const Siginin = () => {
  const [telnumber, setnumber] = useState("");

  const navigate = useNavigate();
  localStorage.setItem("telnumber", telnumber);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (telnumber) {
      fetch("http://azizbek.samandardev.uz/v1/user/register", {
        method: "POST",
        body: JSON.stringify({
          phone_number: `${telnumber}`,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          navigate("/register/activcode");
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
          <p className="register-title">Log in/registering</p>
        <form  onSubmit={ handleFormSubmit} >
        <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
           
              <input
                type="text"
                value={telnumber}
                onChange={(e) => setnumber(e.target.value)}
                placeholder="+998 (90) ___ __ __"
              />
           
          </label>
       
          <Link to="/register/login" className="loginIn">
            Login in
          </Link>
          <button type="submit"  className="reg-btn">
            Confirm
          </button>
          </form>
        </div>
      </SigininCon>
    </>
  );
};

export default Siginin;

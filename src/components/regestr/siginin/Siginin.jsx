import React from "react";
import { useState } from "react";
import { SigininCon } from "./style";
import { Link,useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg"
import HomePage from "../../HomePage/HomePage";
import ActiveCode from "./ActiveCode";


const Siginin = () => {

  const[telnumber,setnumber] = useState("")

  const navigate = useNavigate();
  localStorage.setItem("telnumber", telnumber)
  const handleFormSubmit = () => {
    if (telnumber) {
        fetch('http://azizbek.samandardev.uz/v1/user/register', {
            method: 'POST',
            body: JSON.stringify({
                phone_number: `${telnumber}`
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"}
            
        })
        .then(response => response.json())
        .then(json =>{
           console.log(json);
            navigate("/activcode")
        })
            
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
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
            <form  action="#" >
              <input
                type="text"
                onChange={(e)=>setnumber(e.target.value)}
                
                placeholder="+998 (90) ___ __ __"
              />
            </form>
          </label>
          <button  onClick={handleFormSubmit} className="reg-btn">Confirm</button>
        </div>
        
      </SigininCon>
    </>
  );
};

export default Siginin;

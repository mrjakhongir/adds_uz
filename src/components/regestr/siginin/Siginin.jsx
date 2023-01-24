import React from "react";
import { useRef,useState,useEffect } from "react";
import { SigininCon } from "./style";
import { Link,useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg"
import HomePage from "../../HomePage/HomePage";
import ActiveCode from "./ActiveCode";


const Siginin = () => {
  const telRef = useRef();
  const[telnumber,setnumber] = useState("")
   console.log(telnumber);
  const navigate = useNavigate();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const telValue = telRef.current.value;
    setnumber(telValue)

    if (telValue) {

        fetch('http://azizbek.samandardev.uz/v1/user/register4', {
            method: 'POST',
            body: JSON.stringify({
                phone_number: `${telValue}`
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"}
            
        })
        .then(response => response.json())
        .then(json =>{
            console.log(json)
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
            <form onSubmit={handleFormSubmit} action="#" >
              <input
                type="text"
            
                ref={telRef}
                
                placeholder="+998 (90) ___ __ __"
              />
            </form>
          </label>
          <button className="reg-btn">Confirm</button>
        </div>
          <div className="display">
          <ActiveCode telnumber={telnumber}   />
          </div>
      </SigininCon>
    </>
  );
};

export default Siginin;

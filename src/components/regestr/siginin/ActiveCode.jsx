
import React from "react";
import { useRef } from "react";
import { SigininCon } from "./style";
import { Link,useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg"
import HomePage from "../../HomePage/HomePage";


const ActiveCode = ({telnumber}) => {

// console.log(telnumber);
const navigate = useNavigate();

  const codeRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const codeValue = codeRef.current.value;

    if (codeValue) {
        fetch(`http://azizbek.samandardev.uz/v1/user/verify/${telnumber}/${codeValue}d`)
        .then(response => response.json())
        .then(json =>{
            console.log(json)
        })
        .catch(err => console.log(err))
            
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
          <p className="register-title">Log in/registering{telnumber}</p>
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
            <form  action="#" >
              <input
                type="text"
                placeholder="+998 (90) ___ __ __"
                value={telnumber}
              />
            </form>
          </label>
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
            <form onSubmit={handleFormSubmit} action="#" >
              <input
                type="text"
                placeholder="code"
                ref={codeRef}
              />
            </form>
          </label>
          <button className="reg-btn">Confirm</button>
        </div>
      </SigininCon>
    </>
  );
};

export default ActiveCode;

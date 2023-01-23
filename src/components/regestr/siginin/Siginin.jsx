import React from "react";
import { useRef } from "react";
import { SigininCon } from "./style";
import { Link } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg"
import HomePage from "../../HomePage/HomePage";


const Siginin = () => {
  const telRef = useRef();


  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const telValue = telRef.current.value;
    if (telValue) {
        fetch('http://azizbek.samandardev.uz/v1/user/registernone', {
            method: 'POST',
            body: JSON.stringify({
                phone_number: `${telValue}`
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"}
            
        })
        .then(response => response.json())
        .then(json => console.log(json))
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
      </SigininCon>
    </>
  );
};

export default Siginin;

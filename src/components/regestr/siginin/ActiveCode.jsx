import { useState } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";

const ActiveCode = () => {
  const telnumber = localStorage.getItem("telnumber");

  const navigate = useNavigate();

  const [codeValue, setCodeValue] = useState("");

  // const removeLocalTel = () => {
  //   setTimeout(() => {
  //     localStorage.removeItem("telnumber");
  //   }, 9000);
  // };

  const handleFormSubmit = async () => {

      const response = await fetch( `http://azizbek.samandardev.uz/v1/user/verify/${telnumber}/${codeValue}`);
      const data = await response.json();
      console.log(data);
      localStorage.setItem("faceToken", data.access_token);
      navigate("/register/finsh");
   
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

              <input
                type="text"
                placeholder="+998 (90) ___ __ __"
                value={telnumber}
              />
            </label>
      

            <label className="input-name">
              <div className="input-name-icon">
                <img src={tel} alt="" />
              </div>

              <input
                type="text"
                placeholder="code"
                value={codeValue} 
                onChange={(e) => setCodeValue(e.target.value)}

              />
            </label>
            <button onClick={handleFormSubmit} type="submit" className="reg-btn">
              confrim
            </button>
         
     
        </div>
      </SigininCon>
    </>
  );
};

export default ActiveCode;

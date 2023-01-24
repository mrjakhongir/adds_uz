import React from "react";
import { SigininCon } from "./style";
import { Link,} from "react-router-dom";
import tel from "../../../assets/icon/tel.svg"
import HomePage from "../../HomePage/HomePage";



const Finsh = () => {
 
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
            <form  action="#" >
              <input
                type="text"
    
                placeholder="create your password"
              />
            </form>
          </label>
          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>
            <form  action="#" >
              <input
                type="text"
    
                placeholder="  repeat your password"
              />
            </form>
          </label>
          <button className="reg-btn">Register  </button>
        </div>
    
      </SigininCon>
    </>
  );
};

export default Finsh;

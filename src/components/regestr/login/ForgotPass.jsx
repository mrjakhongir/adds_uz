import { useState, } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";


const ForgotPass = () => {

  const [phone, setPhone] = useState("");
  localStorage.setItem("telnumber", phone)

  const navigate = useNavigate();

  const updatePost = async () => {
    if (phone){
      const response = await fetch(`http://azizbek.samandardev.uz/v1/user/password/forget`);
      const data = await response.json();
      console.log(data);
      
      navigate("/register/login/newpass");
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
          <p className="register-title"> Phone number</p>

          <label className="input-name">
            <div className="input-name-icon">
              <img src={tel} alt="" />
            </div>

            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
          </label>

          <button onClick={updatePost} type="button" className="reg-btn">
            Register
          </button>
       
        </div>
      </SigininCon>
    </>
  );
};

export default ForgotPass;

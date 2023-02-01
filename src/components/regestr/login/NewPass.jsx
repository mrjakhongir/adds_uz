import { useState } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";



const NewPass = () => {
 
  const [newpass, setNewpass] = useState("");
  const [code, setCode] = useState("");
  const tel = localStorage.getItem("telnumber")
  // const navigate = useNavigate();

  const updatePost = async () => {
     console.log(newpass,code,tel)  ;
    if (newpass && code && tel) {
      const response = await fetch("http://azizbek.samandardev.uz/v1/user/password/set",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          new_password:newpass,
          phone_number: tel
        }),
      });
      const data = await response.json();
      console.log(data);

      // navigate("/register/login");
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
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="code"
              />
            </label>
            <label className="input-name">
              <div className="input-name-icon">
                <img src={tel} alt="" />
              </div>

              <input
                type="text"
                value={newpass}
                onChange={(e) => setNewpass(e.target.value)}
                placeholder="New password"
              />
            </label>

            <button onClick={updatePost}  className="reg-btn">
              Register
            </button>
        
        </div>
      </SigininCon>
    </>
  );
};

export default NewPass;

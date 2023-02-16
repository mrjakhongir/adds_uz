import { useState } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { request } from "../../../request/Axios";

const NewPass = () => {
  const [newpass, setNewpass] = useState("");
  const [code, setCode] = useState("");
  const tel = localStorage.getItem("telnumber");
  // const navigate = useNavigate();

  const handleFormSubmit =  (event) => {
    event.preventDefault();
 
    if (newpass && code && tel) {
      request({
        url: "/user/password/set",
        method: "put",
        data: { code: code, new_password: newpass, phone_number: tel },
      }).then((res) => {
        console.log(res.data);
      });
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

          <form onSubmit={handleFormSubmit} action="#">
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

            <button  type="submit" className="reg-btn">
              Register
            </button>
          </form>
        </div>
      </SigininCon>
    </>
  );
};

export default NewPass;

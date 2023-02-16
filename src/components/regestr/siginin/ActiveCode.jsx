import { useState } from "react";
import { SigininCon } from "./style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { request } from "../../../request/Axios";

const ActiveCode = () => {
  const telnumber = localStorage.getItem("telnumber");

  const navigate = useNavigate();

  const [codeValue, setCodeValue] = useState("");

  const removeLocalTel = () => {
    setTimeout(() => {
      localStorage.removeItem("telnumber");
    }, 9000);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (telnumber && codeValue) {
      request({
        url: `/user/verify/${telnumber}/${codeValue}`,
        method: "get",
        data: "",
      }).then((res) => {
        console.log(res.data.access_token);
        localStorage.setItem("faceToken", res.data.access_token);
        removeLocalTel()
        navigate("/register/finsh");
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

          <form onSubmit={handleFormSubmit} action="#">
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
            <button type="submit" className="reg-btn">
              confrim
            </button>
          </form>
        </div>
      </SigininCon>
    </>
  );
};

export default ActiveCode;

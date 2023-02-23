import { useState,useContext } from "react";
import { SigininCon } from "../../Biznes/biznesregstr/style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { request } from "../../../request/Axios";
import { Rigister } from "../../../contex/Contex";

const ActivCodeEmail = () => {
  const email = localStorage.getItem("email");

  const navigate = useNavigate();
  const [token, setToken] = useContext(Rigister);
  const res = JSON.parse(token);
  const [codeValue, setCodeValue] = useState("");

//   const removeLocalTel = () => {
//     setTimeout(() => {
//       localStorage.removeItem("telnumber");
//     }, 9000);
//   };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (email && codeValue) {
      request({
        url: `/business/verify/${email}/${codeValue}`,
        method: "get",
        headers:{
            "Content-Type": "application/json",
            Authorization: res.access_token,
        }
      }).then((res) => {
        console.log(res.data.access_token);
        localStorage.setItem("faceMailToken", res.data.access_token);
        // removeLocalTel();
        navigate("/biznes/biznesregister/finshbiznesreg");
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
                placeholder="adds@gmaiil.com"
                value={email}
              />
            </label>

            <label className="input-name">
              <div className="input-name-icon">
                <img src={tel} alt="" />
              </div>

              <input
                type="text"
                placeholder="Active code"
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

export default ActivCodeEmail;

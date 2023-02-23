import { useState, useContext } from "react";
import { SigininCon } from "../../Biznes/biznesregstr/style";
import { Link, useNavigate } from "react-router-dom";
import tel from "../../../assets/icon/tel.svg";
import HomePage from "../../HomePage/HomePage";
import { Rigister } from "../../../contex/Contex";
import { request } from "../../../request/Axios";

const Finsh = () => {
  const faceProfilImg = `{"photo_url":"","media_type":"image"}`;
  const [token, setToken] = useContext(Rigister);
  const [ful_name, setFulname] = useState("");
  const [password, setPassword] = useState("");
  const faceToken = localStorage.getItem("faceToken");

  const navigate = useNavigate();

  const removeLocalTel = () => {
    setTimeout(() => {
      localStorage.removeItem("faceToken");
    }, 9000);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (ful_name && password) {
      request({
        url: "/user/register/finish",
        method: "put",
        data: { full_name: ful_name, password: password },
        headers: {
          Authorization: faceToken,
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        setToken(JSON.stringify(res.data));
        localStorage.setItem("profil_img", faceProfilImg);
        removeLocalTel();
        navigate("/");
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
          <p className="register-title">Create your permanent password</p>

          <form action="#" onSubmit={handleFormSubmit}>
            <label className="input-name">
              <div className="input-name-icon">
                <img src={tel} alt="" />
              </div>

              <input
                type="text"
                value={ful_name}
                onChange={(e) => setFulname(e.target.value)}
                placeholder="Full name"
              />
            </label>
            <label className="input-name">
              <div className="input-name-icon">
                <img src={tel} alt="" />
              </div>

              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="  repeat your password"
              />
            </label>

            <button type="submit" className="reg-btn">
              Register
            </button>
          </form>
        </div>
      </SigininCon>
    </>
  );
};

export default Finsh;

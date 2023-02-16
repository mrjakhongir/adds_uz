import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Settings } from "./style";
import { Rigister } from "../../contex/Contex";
import person from "../../assets/icon/person.svg";
import ImgUpload from "./ImgUpload";

const Setting = () => {
  const [token, setToken] = useContext(Rigister);
  const res = JSON.parse(token);
  const [fullName2, setFulname] = useState("");
  const [userName, setUserName] = useState("");
  const imgData = JSON.parse(localStorage.getItem("profil_img"));
  const defaulImg = "https://adds-media-bucket.s3.ap-southeast-1.amazonaws.com/8849ee9d-7e63-4001-9e4d-25320b309681.png"
  const imgDataValue = !imgData.photo_url ? defaulImg : imgData.photo_url;
  const defaultFullName = !fullName2 ? res.full_name : fullName2;
  const defaultUserName = !userName ? res.user_name :  userName



  const navigate = useNavigate();

  const handle = () => {
    if (token) {
      setToken(localStorage.setItem("token", ""));
      navigate("/");
    }
  };
 
  const handleSubmit2 = () => {
    if (defaultFullName && defaultUserName) {
      const data = {
        full_name: defaultFullName,
        profile_photo: imgDataValue,
        username: defaultUserName,
      };

      fetch("http://azizbek.samandardev.uz/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: res.access_token,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigate("/register/login");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <Settings>
      <div className="setting-con">
        <ImgUpload />
        <hr />
        <div className="setting-edit">
          <p className="personal-data">Peronal data:</p>
          <div className="input-page">
            <label className="input-name">
              <div className="input-name-icon">
                <img src={person} alt="" />
              </div>
              <input
                type="text"
                onChange={(e) => setFulname(e.target.value)}
                placeholder={res.full_name}
              />
            </label>
            <label className="input-name">
              <div className="input-name-icon">
                <img src={person} alt="" />
              </div>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder={ res.user_name}
              />
            </label>
            <br />
          </div>
          <button onClick={handleSubmit2}>Save</button>
        </div>
        <div className="interfice-setting">
          <p className="interfice-setting-title">Interface settings:</p>
          <div className="setting-page">
            <p className="setting-language set">English &nbsp;</p>
            <p className="setting-notification set">Notification &nbsp;</p>
            <p className="setting-theme set">Dark theme &nbsp;</p>
            <p className="settingt-logaut set" onClick={() => handle()}>
              Logaut
            </p>
          </div>
        </div>
      </div>
    </Settings>
  );
};

export default Setting;

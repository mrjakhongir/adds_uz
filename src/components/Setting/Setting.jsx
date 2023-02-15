import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Settings } from "./style";
// import axios from "axios";

import { Rigister } from "../../contex/Contex";
import person from "../../assets/icon/person.svg";

import ImgUpload from "./ImgUpload";

const Setting = () => {
  const imgData = JSON.parse(localStorage.getItem("profil_img"));
  const imgDataValue = imgData.photo_url;
  const [fullName2, setFulname] = useState("");
  const [userName, setUserName] = useState("");
  const [token, setToken] = useContext(Rigister);

  const navigate = useNavigate();

  const handle = () => {
    if (token) {
      setToken(localStorage.setItem("token", ""));
      navigate("/");
    }
  };
  const res = JSON.parse(token);
  const handleSubmit2 = () => {
    if (fullName2 && userName) {
      const data = {
        full_name: fullName2,
        profile_photo: imgDataValue,
        username: userName,
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
                placeholder={"@" + res.user_name}
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

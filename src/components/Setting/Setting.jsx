import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import {Settings} from "./style"
import axios from "axios";

import { Rigister } from "../../contex/Contex";
import person from "../../assets/icon/person.svg"

import ImgUpload from "./ImgUpload";


const Setting = () => {
 const imgData =  JSON.parse(localStorage.getItem("profil_img"))
 
 const [fullName2,setFulname] = useState("")
 const [userName,setUserName] = useState("")
  const [token,setToken] = useContext(Rigister)
 


    const navigate = useNavigate();

  const handle = () =>{
        if(token){
          setToken( localStorage.setItem("token",""))
          navigate("/")
        }
  }

  const handleSubmit2 = () =>{
    const res = JSON.parse(token)
  
 
    if(fullName2 && userName){
        axios.put("http://azizbek.samandardev.uz/v1/user/profile", {
          "full_name":`${fullName2}`,
          "profile_photo":`${imgData.photo_url}`,
          "username":`${userName}`

        }, {
            headers: {
                  'Authorization': `${res.access_token}` ,
                  'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              console.log(`upload process: ${percentCompleted}%`);}
          })
            .then(res => {
              console.log(res.data)
              
            })
    }
  }

 
   
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
              <input type="text" onChange={(e) => setFulname(e.target.value)}  />
            </label>
            <label className="input-name">
              <div className="input-name-icon">
              <img src={person} alt="" />
              </div>
              <input type="text"  onChange={(e) => setUserName(e.target.value)} />
            </label>
            <br />
           
          </div>
          <button onClick={handleSubmit2}>
           Save
          </button>
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

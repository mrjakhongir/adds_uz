import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HeaderC, Search } from "./style";
import "./main.css";
import logo from "../../assets/jpg/logo.jpg";
import user from "../../assets/icon/person.svg";
import save from "../../assets/icon/save.svg";
import log from "../../assets/icon/logout.svg";

const Header = () => {
  const [val, setVal] = useState("");
  const [open, setOpen] = useState(false);
  const menuref = useRef();

  //solution

  // window.addEventListener("click", (e) => {
  //   if (e.target !== menuref.current) {
  //     setOpen(false);
  //   }
  // });

  return (
    <HeaderC>
      <Link to="/" className="href">
        <div className="logo">
          <img src={logo} alt="" />
          <p>Adds</p>
        </div>
      </Link>
      <div className="search">
        <input
          onChange={(e) => {
            setVal(e.target.value);
          }}
          type="search"
          placeholder="search"
        />
        {val.length === 0 ? <Search /> : ""}
      </div>
      <div className="mark-personal">
        <div className="user save">
          <div className="user-con">
            <img src={save} alt="" />
          </div>
        </div>

        <div className="user"  onClick={() => setOpen(!open)}>
          <div className="user-con">
            <img src={user} alt="" />
          </div>
        </div>

        {open && <div className="rodalPage" > 
           <ul>
            <li > <img className="logImg" src={log} alt="" />  Log out</li>
            <hr className="border" />
            <li>
            
              <Link className="biznesLink" to="/biznes/biznesregister/emailreg" >
              <img className="logImg" src={user} alt="" /> Biznes profil
            </Link></li>
           </ul>
        </div>}
      </div>
    </HeaderC>
  );
};

export default Header;

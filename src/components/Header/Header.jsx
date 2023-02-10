import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Action } from "../Buttons/style";
import { HeaderC, Search } from "./style";
import logo from "../../assets/jpg/logo.jpg"

const Header = () => {

  const [val, setVal] = useState('')

  return (
    <HeaderC>
      <Link to="/" className="href">
         <div className="logo">
           <img src={logo} alt="" />
            <p>Adds</p>
         </div>
     
      </Link>
      <div className="search">
        <input onChange={e => {setVal(e.target.value)}} type="search" placeholder="search" />
        {
          val.length === 0 ?
          <Search/> 
          : ''
        }
      </div>
      <div className="mark-personal">
        <Action  mr16>
          <Action.Bookmark/>
          <Action.NoLive />
        </Action>
        <Action>
          <Action.Person />
          <Action.NoLive />
        </Action>
      </div>
    </HeaderC>
  );
};

export default Header;

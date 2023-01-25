import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddBtn from "../Buttons/AddBtn";
import { Action } from "../Buttons/style";
import { HeaderC, Search } from "./style";
import logo from "../../assets/logo.jpg"

const Header = () => {

  const [val, setVal] = useState('')

  return (
    <HeaderC>
      <Link to="/">
      <Link to="/">
         <div className="logo">
           <img src={logo} alt="" />
            <h1>dds</h1>
         </div>
      </Link>
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

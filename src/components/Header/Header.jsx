import React, { useState } from "react";
import AddBtn from "../Buttons/AddBtn";
import { Action } from "../Buttons/style";
import { HeaderC, Search } from "./style";

const Header = () => {

  const [val, setVal] = useState('')

  return (
    <HeaderC>
      <AddBtn />
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

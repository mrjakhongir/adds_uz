import React, { useState } from "react";
import AddBtn from "../Buttons/AddBtn";
import { HeaderC, MarkPersonal, Search } from "./style";

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
        <MarkPersonal>
          <MarkPersonal.Bookmark />
          <MarkPersonal.NoLive />
        </MarkPersonal>
        <MarkPersonal>
          <MarkPersonal.Person />
          <MarkPersonal.NoLive />
        </MarkPersonal>
      </div>
    </HeaderC>
  );
};

export default Header;

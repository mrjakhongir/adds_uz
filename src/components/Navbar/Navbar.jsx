import React from "react";
import { NavbarC, NavItem } from "./style";

const Navbar = () => {
  const navData = [
    { id: 1, text:"About marketplace", link:"about-marketplace" },
    { id: 2, text:"Privacy policy", link:"privacy-policy" },
    { id: 3, text:"Terms of use", link:"terms-of-use" },
    { id: 4, text:"Public offering", link:"public-offering" },
  ];
  return (
    <NavbarC>
      <div>
        <p>Ташкент</p>
        <NavbarC.NavItems>
          {
          navData.map((data) => {
            return <NavItem  to={data.link} key={data.id}>{data.text}</NavItem>;
          })
          }
        </NavbarC.NavItems>
      </div>
      <div>
        <a className="extra_link">Interface language</a>
        <a className="extra_link">Have a question?</a>
      </div>
    </NavbarC>
  );
};

export default Navbar;

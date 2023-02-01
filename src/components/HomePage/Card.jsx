import React from "react";
import { ClockIcon, EyeIcon, HomeC } from "./style";
import {Rigister} from "../../contex/Contex"
import { useContext } from "react";

import { Action } from "../Buttons/style";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [token,setToken] = useContext(Rigister)
  const { companyLogo, companyName, image, product, oldPrice, price, view } =
    props;

  return (
    <HomeC>
      <HomeC.Header>
        <div>
          <img className="sale-logo" src={companyLogo} alt="" />
          <p>{companyName}</p>
        </div>
         {token ? <button>Follow me</button>: <Link to={"register/siginin"}> <button> Follow me</button></Link> }
      </HomeC.Header>
      <HomeC.ImageContainer>
        <img className="sale-img" src={image} alt="" />
        <span>
          <ClockIcon />
        </span>
      </HomeC.ImageContainer>
      <HomeC.Info>
        <p className="product-name">{product}</p>
        <p className="brand-name">{companyName}</p>
      
        <div className="price-view">
          <p className="price">{price}</p>
          <span className="view">
            <EyeIcon />
            {view}
          </span>
        </div>
      </HomeC.Info>
      <HomeC.Actions>
        <div>
          <Action mr8>
            <Action.Bookmark />
          </Action>
          <Action>
            <Action.Chat />
          </Action>
        </div>
        <Action>
          <Action.Share />
        </Action>
      </HomeC.Actions>
    </HomeC>
  );
};

export default Card;

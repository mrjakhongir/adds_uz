import React from "react";
import { ClockIcon, EyeIcon, SaleC } from "./style";

import { Action } from "../Buttons/style";

const Sale = (props) => {

  const {brandLogo, brandName, image, product, oldPrice, price, view} = props

  return (
    <SaleC>
      <SaleC.Header>
        <div>
          <img className="sale-logo" src={brandLogo} alt="" />
          <p>Texnomart</p>
        </div>
        <button>Follow me</button>
      </SaleC.Header>
      <SaleC.ImageContainer>
        <img className="sale-img" src={image} alt="" />
        <span>
          <ClockIcon />
        </span>
      </SaleC.ImageContainer>
      <SaleC.Info>
        <p className="product-name">{product}</p>
        <p className="brand-name">{brandName}</p>
        <p className="old-price">{oldPrice}</p>
        <div className="price-view">
          <p className="price">{price}</p>
          <span className="view"><EyeIcon/>{view}</span>
        </div>
      </SaleC.Info>
      <SaleC.Actions>
        <div>
          <Action mr8>
            <Action.Bookmark/>
          </Action>
          <Action>
          <Action.Chat/>
          </Action>
        </div>
        <Action>
          <Action.Share/>
        </Action>
      </SaleC.Actions>
    </SaleC>
  );
};

export default Sale;

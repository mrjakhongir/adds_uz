import React from "react";
import Adverspage from "../Advers/Adverspage";
import { BrandsData } from "./BrandsData";
import { BrandsListC, BrandCardItem, BrandContainer} from "./style";
 

const BrandsList = () => {
  return (
    <BrandContainer>
      <BrandsListC>
        {BrandsData.map((item) => {
          return (
            <BrandCardItem key={item.id}>
              <img src={item.image} alt=""/>
              <div>{item.text}</div>
            </BrandCardItem>
          );
        })}
      </BrandsListC>   
      <Adverspage /> 
    </BrandContainer>
  );
};

export default BrandsList;


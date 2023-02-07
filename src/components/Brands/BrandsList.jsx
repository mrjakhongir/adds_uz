import React from "react";
import { BrandsData } from "./BrandsData";
import { BrandsListC, BrandCardItem} from "./style";
 

const BrandsList = () => {
  return (
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
  );
};

export default BrandsList;


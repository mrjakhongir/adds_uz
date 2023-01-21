import React from "react";
import { BrandsData } from "./BrandsData";
import { BrandsListC, BrandCardItem,BrandCon} from "./style";
 

const BrandsList = () => {
  return (
    <BrandCon>
         <BrandsListC>
      {BrandsData.map((item) => {
        return (
          <BrandCardItem large key={item.id}>
            {<img src={item.image} />}
            {item.text}
          </BrandCardItem>
        );
      })}
    
    </BrandsListC>

    </BrandCon>
  );
};

export default BrandsList;


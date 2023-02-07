import React from "react";
import { BrandsData } from "./BrandsData";
import { BrandsC, BrandSidebar, NavItem } from "./style";

const Brands = () => {
  return (
    <BrandsC>
      <BrandsC.Header>
        <h3>Brands</h3>
        <NavItem to="/brands"> See all</NavItem>
      </BrandsC.Header>
      <main>
        {BrandsData.slice(0, 9).map((item) => {
          return (
            <BrandSidebar key={item.id}>
              <img src={item.image} alt="brand logo"/>
              <div className="brand__text">{item.text}</div>
            </BrandSidebar>
          );
        })}
      </main>
     
    </BrandsC>
  );
};

export default Brands;

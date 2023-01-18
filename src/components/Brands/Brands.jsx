import React from 'react'
import { BrandsData } from './BrandsData'
import { BrandsC, BrandCardItem, NavItem } from './style'

const Brands = () => {

  return (
    <BrandsC>
         <BrandsC.Header>
          <h3>Brands</h3>
          <NavItem to="/brands"> See all</NavItem>
         </BrandsC.Header>
         <main>
          {
            BrandsData.slice(0, 9).map(item => {
              return(
                <BrandCardItem key={item.id}>
                  {<img src={item.image} />}
                  {item.text}
                </BrandCardItem>
              )
            })
          }
         </main>
    </BrandsC>
  )
}

export default Brands
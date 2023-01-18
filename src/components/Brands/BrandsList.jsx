import React from 'react'
import { BrandsData } from './BrandsData'
import { BrandsListC, BrandCardItem } from './style'

const BrandsList = () => {
  return (
    <BrandsListC>
       {
            BrandsData.map(item => {
              return(
                <BrandCardItem large key={item.id}>
                  {<img src={item.image} />}
                  {item.text}
                </BrandCardItem>
              )
            })
       }
    </BrandsListC>
  )
}

export default BrandsList
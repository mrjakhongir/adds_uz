import React from 'react'
import Sale from './Sale'
import { SaleListC,SaleCon } from './style'
import logo from "../../assets/png/brands/2.png";
import laptop from "../../assets/png/coder.png";
import Adverspage from '../Advers/Adverspage';

const SaleList = () => {

  const salesData = [
    {id:1, companyLogo:logo, companyName:"Texnomart", image:laptop, product:"Neo QLED 4K Smart TV QN90A", oldPrice:'1200$', price:"1000$", view:"335k" },
    {id:2, companyLogo:logo, companyName:"Apple", image:laptop, product:"Neo QLED 4K Smart TV QN90A", oldPrice:'1200$', price:"1000$", view:"335k" },
    {id:3, companyLogo:logo, companyName:"Tesla", image:laptop, product:"Neo QLED 4K Smart TV QN90A", oldPrice:'1200$', price:"1000$", view:"335k" },
  ]

  return (
   <SaleCon>
       <SaleListC>
      {
        salesData.map(sale => {
          return(
            <Sale key={sale.id} {...sale} />
          )
        })
      }
    </SaleListC>
      <Adverspage />
   </SaleCon>
  )
}

export default SaleList
// <-------Brands------->
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const BrandsC = styled.div`
  background: #fff;
  border-radius: 6px;
  margin-top: 14px;
  padding: 16px;
  box-sizing: border-box;

  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    margin-top: 14px;
  }
`
BrandsC.Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h3{
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #14191F;    
}

`

export const BrandSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;

  :hover{
    cursor: pointer;
  }
  font-weight: 400;
  color: #14191F;
  img {
    width: 75%;
  } 
  .brand__text {
    text-align: center;
  }
`

export const NavItem = styled(NavLink)`
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #1754F2;
`

// <--------BrandsList--------->

export const BrandsListC = styled.div`
  background-color: #fff;
  padding: 25px 0;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(5 , 1fr);
  row-gap: 20px;
`
export const BrandCardItem = styled.div`
  :hover{
    cursor: pointer;
  }

  margin: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 100%;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: #14191F;

  img {
    width: 65%;
  }
`
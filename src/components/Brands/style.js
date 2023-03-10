// <-------Brands------->
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`

export const BrandsC = styled.div`
  background: #fff;
  border-radius: 6px;
  margin-top: 14px;
  padding: 16px;
  box-sizing: border-box;

  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    margin-top: 14px;
  }
`
BrandsC.Header = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
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
  font-weight: 400;
  color: #14191F;
  padding: 8px;
  height: 80px;
  transition: all 120ms ease-in;

  :hover{
    cursor: pointer;
    background-color: #eee;
    border-radius: 8px;
  }

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
  padding-right: 8px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(5 , 1fr);
  row-gap: 20px;
  width: 100%;
`
export const BrandCardItem = styled.div`
  padding: 8px 0;
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
  transition: all 70ms linear;

  :hover{
    cursor: pointer;
    background-color: #eee;
    border-radius: 8px;
  }

  img {
    width: 65%;
  }
`
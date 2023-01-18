// <-------Brands------->
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const BrandsC = styled.div`
width: 265px;
height: 315px;
background: #fff;
border-radius: 6px;
margin-top: 14px;
padding: 16px;
box-sizing: border-box;
main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
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
export const BrandCardItem = styled.div`
:hover{
    cursor: pointer;
}
 ${props => css`
    width: ${props.large ? "120px" : "65px"};
    height: ${props.large ? "120px" : "65px"};
  `}
${props => css`
    background-color: ${props.large ? "#fff" : "#F9F9F9"};
  `}
border-radius: 8px;
margin: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    ${props => css`
    width: ${props.large ? "80px" : "25px"};
    height: ${props.large ? "auto" : "25px"};
  `}
    display: block;
}
font-weight: 400;
${props => css`
    font-size: ${props.large ? "16px" : "12px"};
  `}
line-height: 150%;
color: #14191F;
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
width: 100%;
height: auto;
margin-top: 22px;
box-sizing: border-box;
background-color: #fff;
border-radius: 8px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
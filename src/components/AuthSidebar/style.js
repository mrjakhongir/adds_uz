// <------Sidebar----->
import styled from 'styled-components'
import {ReactComponent as live} from '../../assets/icon/live.svg'
export const SidebarC = styled.div`


height:auto;
background: #FFFFFF;
border-radius: 6px;
padding: 16px;
box-sizing: border-box;
`
export const Button = styled.button` 
 width:100%;
 padding: 8px 14px;
 border-radius:8px;
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 154.5%;
 background: #1754F2;
 color:white;
 border:none;
 cursor:pointer
`
SidebarC.Menu = styled.div`
margin-top: 15px;
`
export const NavItem = styled.a`
display: flex;
align-items: center;
padding: 10px 10px;
box-sizing: border-box;
border-radius: 8px;
font-weight: 400;
font-size: 16px;
line-height: 154.5%;
color: #14191F;
text-transform: capitalize;
:hover{
    cursor: pointer;
    background-color: #CCD8F5;
}
`
NavItem.Icon = styled.div`
margin-right: 9px;
display: flex;
align-items: center;
`
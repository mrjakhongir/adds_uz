// <------Sidebar----->
import styled from 'styled-components'
import {ReactComponent as live} from '../../assets/icon/live.svg'
export const SidebarC = styled.div`
width: 265px;
height: 350px;
background: #FFFFFF;
border-radius: 6px;
padding: 16px;
box-sizing: border-box;
`
export const Personal = styled.div`
    display: flex;
    align-items: center;
`
Personal.Name = styled.div`
margin-left: 5px;
color: #14191F;
h3{
    font-weight:bold;
    font-size: 16px; 
}
p{
    font-weight: 400;
    opacity: 0.4;
}
`
Personal.Photo  = styled.div`
position: relative;
`
Personal.Photo.Live = styled(live)`
position: absolute;
bottom:  -5px;
right: -4px;
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
// <------Sidebar----->
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {ReactComponent as live} from '../../assets/icon/live.svg'
export const SidebarC = styled.div`
    height:auto;
    background: #FFFFFF;
    border-radius: 6px;
    padding: 16px;
    box-sizing: border-box;

    .subscribe {
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
        }  
    }

    .searchBar{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }
    .searchBar > input {
        width: 100%;
        font-size: 20px;
        line-height: 25px;
        padding: 5px 0;
        border: none;
        border-bottom: 1px solid rgba(0,0,0, 0.06);
        outline: none;
    }
    .searchBar > img {
        position: absolute;
        right: 0;
    }
    .rodal{
        // height: 100vh;
    }
    .rodalTitle {
        font-weight: bold;
        margin-bottom: 8px;
        font-size: 16px;
    }
    .rodalMain {
        height: 75%;
        overflow: auto;
        padding: 0 5px;
        margin-bottom: 8px;
    }
    .btnGroup {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;        
    }
    .btnGroup > button {
        font-size: 13px;
        line-height: 19.5px;
        padding: 7px 20px;
        border-radius: 60px;
        border: none;
        cursor: pointer;
    }
    .btnGroup > button:hover {
        opacity: .8;
    }
    .cancelBtn {
        background-color: #1754F2;
        color: #fff;
    }
    .saveBtn {
        background-color: #F9F9F9;
        color: #14191F;
    }
`
export const Personal = styled.div`
    display: flex;
    align-items: center;
`
export const Company = styled.div`
    display: flex;
    align-items: center;
    justify-content : space-between;
    padding: 10px 10px 10px 16px;
    background-color: #f5f5f5;
    border-radius: 8px;
    margin-bottom: 8px;

    button {
        font-size: 13px;
        line-height: 19.5px;
        font-weight: 400;
        padding: 7px 15px;
        background-color: #fff;
        border: none;
        border-radius: 60px;
        cursor: pointer;
    }

    button:hover {
        background-color: #eee;
    }
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
img{
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 5px;
}
`
Personal.Photo.Live = styled(live)`
position: absolute;
bottom:  -4px;
left: 27px;
`
SidebarC.Menu = styled.div`
margin-top: 15px;
}
`
export const NavItem = styled(NavLink)`
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
}


`
NavItem.Icon = styled.div`
    margin-right: 9px;
    display: flex;
    align-items: center;
`
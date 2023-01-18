// <-------Footer------>
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterC = styled.div`
width: 100%;
padding: 30px 100px;
box-sizing: border-box;
margin-top: 65px;
background-color: #fff;
main{
    border-bottom: 1px solid rgba(0,0,0, 0.15);
    padding-bottom: 25px;
    box-sizing: border-box;
    div{
        p{
            margin-top: 24px;
        }
    }
}
footer{
    margin-top: 20px;
    display: flex;
    align-items: center;
    p{
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #E1DFDF;
        
    }
    div{
        display: flex;
        margin-left: 30%;
        a{ 
            margin-left: 12px;
        }
    }
}

`
export const NavItem = styled(NavLink)`
font-weight: 400;
font-size: 13px;
line-height: 150%;
color: #14191F;
opacity: 0.8;
margin-top: 4px;

`
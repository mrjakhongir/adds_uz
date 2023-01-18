// <--------Navabr----->
import styled from 'styled-components'

export const NavbarC = styled.div`
width: 100%;
margin: 12px 0px;
display: flex;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
div{
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    p{
        color: #14191F;
    }
    .extra_link{
        color: #1754F2;
        margin-left: 15px;
    }
}
`
NavbarC.NavItems = styled.div``
export const NavItem  = styled.a`
margin-left: 15px;
color: #8B8B8B;
`
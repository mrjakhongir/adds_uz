// <---------Category--------->
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CategoryC = styled.div`
width: 100%;
height: 120px;
background: #FFFFFF;
border-radius: 8px;
padding: 8px;
box-sizing: border-box;
.active{
    /* background: rgba(80, 140, 255, 0.1); */
}
main{
    width: 100%;
    height: calc(100% - 25px);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`
CategoryC.Header = styled.div`
border-bottom: 1px solid rgba(20, 25, 31, 0.06);
display: flex;
justify-content: space-between;
align-items:center;
padding-bottom: 10px;
box-sizing: border-box;
label, p{
    margin-left: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #14191F;
}    
select{
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #1754F2;
    option{
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #1754F2;
    }
}  
div{
    display: flex;
    justify-content: space-between;
    align-items:center;
}
`
export const  CategoryCard = styled(NavLink)`
width: 65px;
height: 74px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 12px;
line-height: 150%;
text-align: center;
color: #14191F;
border-radius: 8px;
:hover{
    cursor: pointer;
    background: rgba(80, 140, 255, 0.1);
}
img{
    width: 40px;
    height: 40px;
    text-align: center;
}
`
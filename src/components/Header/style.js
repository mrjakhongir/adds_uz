// <-------Header----->
import styled from 'styled-components'
import {ReactComponent as search} from '../../assets/icon/search.svg'

export const HeaderC = styled.div`
width: 100%;
height: 70px;
padding: 12px 24px;
margin-bottom: 23px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
background: #FFFFFF;
border-radius: 8px;
.mark-personal{
    display: flex;
    :hover{
        cursor: pointer;
    }
}
.search{
    width: 48%;
    height: 100%;
    position: relative;
}
input{
    width: 100%;
    height: 100%;
    padding: 10px 24px;
    background: #F9F9F9;
    border-radius: 8px;
    outline: none;
    border: none;
}
.mark-personal{
display: flex;
align-items: center;
.siginin{
    background: #fff;
    color:blue;
    text-decoration: underline;
    
    
}
}
 a{
    text-decaration:none;
    color:#fff;
    background: #1754F2;
    padding:1px;
    border-radius:8px;

    
    
    .logo{
        display:flex;
        align-items: center;
         img{
            width:30px;
            heght:30px;
            border-radius:50%;
         }
         h1{
            font-weight: 900;
         }
    }
 }
`

export const Search = styled(search)`
position: absolute;
top: 16px;
right: 16px;
`
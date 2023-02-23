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

}
 .href{
    text-decaration:none;
    color:black;
    // background: #1754F2;
    
    padding:1px;
    border-radius:8px;

    
    
    .logo{
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
        display:flex;
        justify-content:center;
        align-items: center;
         img{
            width:47px;
            heght:47px;
            border-radius:50%;
         }
         p{
            font-family: 'Roboto Condensed', sans-serif;
            font-weight:700;
            font-size:35px;
         }
    }
 }
`

export const Search = styled(search)`
position: absolute;
top: 16px;
right: 16px;
`
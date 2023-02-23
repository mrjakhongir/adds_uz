import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;

  
  .finshBiznes_con{
    width:100%;
    background: #FFFFFF;
    padding-top:30px;
    padding-bottom:30px;
    margin-bottom:20px;
    
    h3{
        font-weight: 400;
        font-size: 24px;
        line-height: 154.5%;
        text-align: center;
        color: #1754F2;
       

    }
     .biznes_profile_post{
        width: 90%;
        display:flex;
        margin 0 auto;
      
        
       
        .input-page {
            width: 100%;
            margin-top: 12px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            //  background: red;
            
    
            .input-name {
               width: 45%;
              padding: 5px;
              background-color: #F5F5F5;
              border:1px solid  #F5F5F5;
              position: relative;
              display: flex;
               margin:20px;
               margin-bottom:14px;
              border-radius: 8px;
              .input-name-icon {
                padding: 18px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgb(255, 255, 255);
                border-radius: 8px;
              }
              input {
                width: 100%;
                border: none;
                outline: none;
                background-color: #F5F5F5;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 154.5%;
                padding-left: 10px;
              }
            
            }
            .input-name:hover{
                border:1px solid #1754F2;
            }
          }
     }
     .social-con{
      width: 100%;
      display:flex;
      margin 0 auto;
      .social-label{
              width: 45%;
              padding-left:4px;
              position: relative;
              display: flex;
              justify-content: center;
            
              margin:22px;
              border-bottom: 2px solid #ADADAD;
              &:hover{
              border-bottom: 2px solid blue;

              }
              input{
                width:100%;
                padding-left: 10px;
                padding-bottom: 13px;
                outline: none;
                border:none;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 154.5%;

              }
      }

  
     }

     .about-con{
        width: 90%;
        display:flex;
        margin 0 auto;
        textarea{
          margin 20px;
          width: 100%;
          padding:20px;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;

        }

     }
  
}

`;

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
`;

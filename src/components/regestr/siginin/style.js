import styled from "styled-components";

export const SigininCon = styled.div`

    position: relative;
    width: 100%;
  
    height: auto;
    .filter-blur {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1212121;
      background-color: rgba(0, 0, 0, 0.499);
     
    }
    .register {
      width: 314px;
      height: auto;
      padding: 30px;
      top: 80px;
      right: 140px;
      border-radius: 8px;
      background-color:#F5F5F5;
      position: fixed;
      z-index: 2342342342434;
     
      .register-title {
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 130%;
        color: #000000;
      }
      .input-name {
        // width: 50%;
        padding: 5px;
        background-color: white;
        position: relative;
        display: flex;
        aligin-items:center;
        margin-top: 12px;
        margin-right: 12px;
        margin-bottom: 12px;
        border-radius: 8px;
        .input-name-icon {
          padding: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #F5F5F5;
          border-radius: 8px;
        }
         form{
            display: flex;
            justify-content: center;
            align-items: center;
         
            input {
                width: 100%;
                border: none;
                outline: none;
                background-color: white;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 154.5%;
                padding-left: 10px;
              }
         }
      }
      .reg-btn {
        width: 100%;
        margin-top: 20px;
        padding: 10px;
        border-radius: 60px;
        border: none;
        background-color: #1754F2;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #ffffff;
        outline:none;
        cursor: pointer;
      }
    }
    .display{
        display:none;
    }
    ` 
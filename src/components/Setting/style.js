import styled from "styled-components";
export const Settings = styled.div `
  .setting-con {
    padding: 36px;
    background-color: white;
    border-radius:8px;
    .seting-profil-con {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 36px;

      .setting-profil {
        display: flex;
        align-items: center;

        .img-page {
          position: relative;
          img {
            width: 84px;
            height: 84px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 10px;
          }
          .chose-file{
            width: 23px;
            height: 23px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 6px 15px #adacac;
            position: absolute;
            border: 3px solid rgb(223, 223, 223);
            background-color: white;
            top: 60px;
            right:9px;
          }
        }

        .profil-text {
            line-height: 1;
          p {
            font-style: normal;
            font-weight: 600;
            font-size: 30px;
            
            color: #000000;
          }
          span {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            color: #000000;
          }
        }
      }
    }
    hr {
      background-color: black;
      opacity: 0.6;
    }
    .setting-edit {
      margin-top: 16px;
      .personal-data {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        color: #000000;
      }
      .input-page {
        width: 70%;
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;

        .input-name {
          // width: 50%;
          padding: 5px;
          background-color: #F5F5F5;
          position: relative;
          display: flex;
          margin-right: 12px;
          margin-bottom: 12px;
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
      }
    }
    .interfice-setting {
      margin-top: 24px;
      .interfice-setting-title {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        color: #000000;
      }
      .setting-page {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 12px;
        .set {
          padding: 16px 46px;
          display: flex;
          border-radius: 8px;
          align-items: center;
          background-color: #F5F5F5;
          margin-right: 16px;
          margin-bottom: 16px;
        }
      }
    }
  }


`
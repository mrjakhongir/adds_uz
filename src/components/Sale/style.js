// <---------Sale--------
import styled from "styled-components";

import { ReactComponent as clock } from "../../assets/icon/clock.svg";
import { ReactComponent as eye } from "../../assets/icon/eye.svg";
import {ReactComponent as live} from '../../assets/icon/live.svg';

export const SaleCon = styled.div`
  display: flex;
  gap: 15px;
`;
export const SaleC = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 24px 20px;
  box-sizing: border-box;
  color: #14191f;

  .searchBar{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .searchBar > input {
    width: 100%;
    font-size: 16px;
    line-height: 24.72px;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid rgba(0,0,0, 0.06);
    outline: none;
    color: darkgrey;
  }
  .searchBar > img {
    position: absolute;
    right: 0;
  }
  .rodalTitle {
    font-weight: bold;
    margin-bottom: 3px;
    font-size: 16px;
  }
  .rodalMain {
    height: 75%;
    overflow: auto;
    margin-bottom: 8px;
  }

  .rodalFooter{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .select-all{
      display: flex;
      align-items: center;
      gap: 6px;
    }

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
`;

SaleC.Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding: 0px 4px;
  box-sizing: border-box;
  div {
    display: flex;
    align-items: center;
    .sale-logo {
      width: 40px;
      height: 40px;
      margin-right: 8px;
      p {
        font-weight: 400;
        font-size: 16px;
      }
  }
  }
  button {
    width: 85px;
    height: 35px;
    background: #dfe5f5;
    border-radius: 60px;
    border: none;
    color: #1754f2;
    font-size: 13px;
    :hover {
      cursor: pointer;
    }
  }
`;
SaleC.ImageContainer = styled.div`

  .sale-img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;
SaleC.Info = styled.div`
  margin-top: 8px;
  .product-name {
    font-weight: 400;
  }
  .brand-name {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #1754f2;
  }
  .old-price {
    font-weight: 400;
    text-decoration-line: line-through;
    color: #e1dfdf;
  }
  .price-view {
    display: flex;
    align-items: center;
    .price {
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 134%;
      color: red;
    }
    .view {
      margin-left: 9px;
      font-size: 12px;
      font-weight: 400;
      color: #e1dfdf;
    }
  }
  .view {
    display: flex;
    align-items: center;
  }
`;
SaleC.Actions = styled.div`
  width: 100%;
  padding: 0px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  div {
    display: flex;
  }
`;

// <------------SaleList--------
export const SaleListC = styled.div`
  margin-bottom: 10px;
`;

export const ClockIcon = styled(clock)``;
export const EyeIcon = styled(eye)`
  margin-right: 2px;
`;

export const Personal = styled.div`
  display: flex;
  align-items: center;
`

export const Company = styled.div`
  display: flex;
  align-items: center;
  // justify-content : space-between;
  gap: 10px;
  padding: 10px 10px 10px 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 8px;
  height: 60px;

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
  }`

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
}`

Personal.Photo  = styled.div`
position: relative;
img{
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
}`

Personal.Photo.Live = styled(live)`
position: absolute;
bottom:  -4px;
left: 27px;
`
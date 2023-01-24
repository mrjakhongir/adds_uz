// <---------Sale--------
import styled from "styled-components";

import { ReactComponent as clock } from "../../assets/icon/clock.svg";
import { ReactComponent as eye } from "../../assets/icon/eye.svg";

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
  // margin-left: 15px;
`;
export const ClockIcon = styled(clock)``;
export const EyeIcon = styled(eye)`
  margin-right: 2px;
`;

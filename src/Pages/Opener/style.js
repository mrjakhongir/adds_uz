// <--------Opener------>
import styled from "styled-components";

export const OpenerC = styled.div`
  width: 100%;
  margin: 0 auto !important ;
  box-sizing: border-box;
  main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .main_photo {
    display: flex;
    flex-direction: column;
    img:nth-child(2) {
      margin-top: 12px;
    }
  }
  .col-2 {
    width: 75%;
  }
  .left__col {
    width: 25%;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;
`;

import styled from "styled-components";

export const ErrorDiv = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 904px;
    margin: 0 auto;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;

    h1 {
        font-size: 48px;
        line-hight: 58.51px;
        color: #000;
        font-weight: 700;
        font-family: Montserrat;
        z-index: 10;
    }
    p {
        font-size: 16px;
        line-height: 25px;
        font-family: Source Sans Pro;
        color: #8B8B8B;
        margin-bottom: 12px;
        max-width: 307px;
        z-index: 10;
    }
    button {
        font-size: 13px;
        line-height: 19.5px;
        color: #fff;
        font-weight: 400;
        font-family: Source Sans Pro;
        
        padding: 7px 20px;
        border: none;
        border-radius: 60px;
        background-color: #1754F2;
        cursor: pointer;

        transition: all 150ms linear;
        z-index: 10;
    }

    button:hover {
        opacity: .8;
    }

    div {
        position: absolute;
        font-size: 400px;
        color: #E1DFDF;
        opacity: .2;
        z-index: 1;
    }
`
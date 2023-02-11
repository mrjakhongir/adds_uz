import Styled from 'styled-components'


export const NewsC = Styled.div`      
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;

    .news__grid {
        display: grid;        
        // grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 12px;
        grid-auto-flow: dense;
        // overflow: scroll;
        // height: 100vh;
    }

    .news,
    .news__half {
        width: 100%;
        padding: 16px 24px 22px 20px;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        cursor: pointer;
        gap: 15px;
        transition: all 150ms cubic-bezier(.5, 0, .5, 1),
                    
}
    }
    .news {
        grid-column: span 2;
    }
    .news:hover,
    .news__half:hover {
        background-color: rgb(252,252,252);
    }
    .left__col,
    .right__col {
        width: 100%;
    }
    .left__col {
        display: flex;
        flex-direction: column;
    }
    .right__col > img {
        width: 100%;
        border-radius: 8px;
    }
    .news-date {
        font-size: 12px;
        line-height: 18px;
        color: #E1DFDF;
    }
    .news-title {
        font-size: 22px;
        line-height: 28.6px;
        color: #14191F;
        margin-bottom: 50.8px;
    }
    .icons {
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;
        margin-top: auto;
    }
`
NewsC.filter = Styled.div`
    display: flex;
    gap: 4px;
    background-color: #fff;
    padding: 5px 9px;
    border-radius: 5px;

    .all,
    .subscribed {
        font-size: 12px;
        line-height: 18px;
        border: none;
        border-radius: 5px;
        background-color: #F9F9F9;
        cursor: pointer;
    }
    .all {padding: 5px 28.5px}    
    .subscribed {padding: 5px 16px}
    .active {
        background-color: #1754F2;
        color: #fff;
    }
`

NewsC.Large = Styled.div `
    padding: 36px 56px 24px 36px;
    background-color: #fff;
    border-radius: 8px;

    h1 {
        font-size: 28px;
        line-height: 37.52px;  
        font-weight: bold;
        margin-bottom: 16px; 
    }
    p {
        font-size: 16px;
        line-height: 24.72px;
        font-weight: 400;
        margin-bottom: 16px;
    }
    p:nth-child(even) {
        margin-bottom: 42px;
    }
    .imgContainer {
        margin: 0 auto;
        width: 55%;
        margin-bottom: 58px;
        position: relative;
        border-radius: 8px;
    }
    .newsImage {
        width: 100%;
        border-radius: 8px;
    }
    .imgContainer::before,
    .imgContainer::after {
        position: absolute;
        width: 40px;
        height: 40px;
        background-color:  rgba(23, 84, 242, 0.1);;
        border-radius: 50%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        transition: all 150ms linear;
        z-index: 10;
    }
    .imgContainer::before {
        content: '<';
        top: 45%;
        left: -52px;
    }
    .imgContainer::after {
        content: '>';
        top: 45%;
        right: -52px;
    }
    .icons {
        display: flex;
    }
    .icons > div {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F9F9F9;
        border-radius: 50%;
    }
`
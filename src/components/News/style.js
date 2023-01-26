import Styled, {css} from 'styled-components'


export const NewsC = Styled.div`      
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;

    .news__grid {
        display: grid;        
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 12px;
        grid-auto-flow: dense;
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
    }
    .news {
        grid-column: span 2;
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
        width: 16px;
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
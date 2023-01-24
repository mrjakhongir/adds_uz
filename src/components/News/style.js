import Styled from 'styled-components'


export const NewsC = Styled.div`      
    display: flex;
    // flex-direction:
    align-items: center;
    justify-content: space-between;
    // width: 841px;
    .news{
        width: 100%;
        padding: 16px 24px 22px 20px;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        justify-content: space-between
        align-items: flex-start;
        flex-wrap: wrap;
    }
    .left__col,
    .right__col {
        width: 50%;
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
    }
`

export const NewsListC = Styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;

    .news__grid {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        // grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
`
NewsListC.filter = Styled.div`
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
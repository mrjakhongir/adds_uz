import React from 'react'
import { NewsC } from './style'
import messageIcon from "../../assets/icon/message.svg"
import shareIcon from "../../assets/icon/share.svg"


export default function News(props) {
const {newsDate, newsTitle, img} = props
  return (
    <NewsC>
        <div className='news'>
          <div className='left__col'>
            <div className='news-date'>{newsDate}</div>
            <div className='news-title'>{newsTitle}</div>
            <div className='icons'>
                <img src={messageIcon} />    
                <img src={shareIcon} />    
            </div>                  
          </div>
          {img && <div className='right__col'><img src={img}/></div>}          
        </div>
    </NewsC>
  )
}

import React, { useState } from 'react'
import { newsData } from './NewsData'
import { NewsC } from './style'
import messageIcon from "../../assets/icon/message.svg"
import shareIcon from "../../assets/icon/share.svg"

function New() {

const [userId, setUserId] = useState(localStorage.getItem("userId"))

function drawSelectedUser(id){
const {newsDate, newsTitle, newsBody, img} = newsData[id] 

return <div>
  <div className='news-date'>{newsDate}</div>
  <h1>{newsTitle}</h1>
  <p>{newsBody}</p>
  <p>{newsBody}</p>
  {img && <div className='imgContainer'><img className='newsImage' src={img} alt=""/></div>}
  <div className='icons'>
    <div><img src={messageIcon} alt=""/></div>   
    <div><img src={shareIcon} alt=""/></div>
  </div>   
</div>
}

return(
  <NewsC.Large>
    {drawSelectedUser(userId)}
  </NewsC.Large>
)
}

export default New
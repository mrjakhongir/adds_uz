import React, { useState } from 'react'
import { newsData } from './NewsData'
import { useNavigate } from 'react-router-dom'
import messageIcon from "../../assets/icon/message.svg"
import shareIcon from "../../assets/icon/share.svg"

export default function NewsList() {
const navigate = useNavigate()

function openNews(index){
  localStorage.setItem('userId', index)
  navigate('/new')
}

function drawNews(){
  return  newsData.map((item, index)=> (
      <div onClick={()=> openNews(index)} key={item.id} className={item.img ? 'news' : 'news__half'}>
        <div className='left__col'>
          <div className='news-date'>{item.newsDate}</div>
          <div className='news-title'>{item.newsTitle}</div>
          <div className='icons'>
              <img src={messageIcon} alt=""/>    
              <img src={shareIcon} alt=""/>    
          </div>                  
        </div>
        {item.img ? <div className='right__col'><img src={item.img} alt=""/></div> : ""}
      </div>
    ))
  }

return (
  <div className='news__grid'>{drawNews()}</div> 
)
}
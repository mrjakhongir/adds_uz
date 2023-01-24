import React from 'react'
import News from './News'
import {NewsListC} from './style' 
import newsImg from "../../assets/png/tesla.jpg"
const  NewsList = ()=> {

const newsData = [
  {id:1, newsDate:'21.12.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini ", img:newsImg},
  {id:2, newsDate:'22.01.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini ", img:""},
  {id:3, newsDate:'23.02.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini ", img:""},
  {id:3, newsDate:'23.02.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini ", img:""},
  {id:3, newsDate:'23.02.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini ", img:newsImg}
]

  return (
    <NewsListC>

      <NewsListC.filter className='news-filter'>
        <div className='all active'>All</div>
        <div className='subscribed'>Subscribed</div>
      </NewsListC.filter>

      <div className='news__grid'>
        {newsData.reverse().map(news => <News key={news.id} newsDate={news.newsDate} newsTitle={news.newsTitle} img={news.img ? news.img : ""}/>) }
      </div>
      
    </NewsListC>
  )
}

export default NewsList;
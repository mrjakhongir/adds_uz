import React from 'react'
import { NewsC} from './style'
import messageIcon from "../../assets/icon/message.svg"
import shareIcon from "../../assets/icon/share.svg"
import newsImg from "../../assets/png/tesla.jpg"


export default function News() {

const newsData = [
  {id:1, newsDate:'21.12.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini", img:newsImg},
  {id:2, newsDate:'22.01.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini", img:""},
  {id:3, newsDate:'23.02.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini", img:""},
  {id:4, newsDate:'23.02.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini", img:""},
  {id:5, newsDate:'23.02.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini", img:newsImg},
  {id:6, newsDate:'23.02.2022', newsTitle:"Internet-banking shaxsiy kabinetida to‘lovlarni tasdiqlash va tranzaksiyalar tarixini", img:""}
]

  return (
    <NewsC>

      <NewsC.filter className='news-filter'>
        <div className='all active'>All</div>
        <div className='subscribed'>Subscribed</div>
      </NewsC.filter>

      <div className='news__grid'>
        {
          newsData.map(item => (

            <div key={item.id} className={item.img ? 'news' : 'news__half'}>
                      <div className='left__col'>
                        <div className='news-date'>{item.newsDate}</div>
                        <div className='news-title'>{item.newsTitle}</div>
                        <div className='icons'>
                            <img src={messageIcon} />    
                            <img src={shareIcon} />    
                        </div>                  
                      </div>
            {item.img ? <div className='right__col'><img src={item.img}/></div> : ""}
            </div>
          ))
        }
      </div>      

    </NewsC>
  )
}

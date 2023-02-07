import React, {useState} from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { SidebarC, Personal, NavItem, Company } from './style'
import PersonalPhoto from '../../assets/png/Subtract.png'
import subscribe from '../../assets/icon/subscribe.svg'
import chat from '../../assets/icon/chat.svg'
import news from '../../assets/icon/news.svg'
import sale from '../../assets/icon/sale.svg'
import settings from '../../assets/icon/settings.svg'
import search from '../../assets/icon/search.svg'
import {Rigister} from "../../contex/Contex"
import { useContext } from 'react'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [token,setToken]  = useContext(Rigister)
  const res = JSON.parse(token)
  console.log(res);


function openRodal(){
  setIsOpen(!isOpen)
}

  return (
    
    <SidebarC>

        <Personal>
          <Personal.Photo>
             <img src={PersonalPhoto} alt="" />
             <Personal.Photo.Live />
          </Personal.Photo>
          <Personal.Name>
            <h3>{res.full_name}</h3>
            <p>@username</p>
          </Personal.Name>
        </Personal>
.
      
      <Rodal className='rodal' visible={isOpen} onClose={openRodal} height={480}>

        <h1 className='rodalTitle'>Subscribed</h1>
        <div className='searchBar'>
          <input type='text' placeholder='Search'/>
          <img src={search}/>
        </div>

        <div className='rodalMain'>
          <Company>
            <Personal>
              <Personal.Photo>
                <img src={PersonalPhoto} alt="" />
                <Personal.Photo.Live />
              </Personal.Photo>
              <Personal.Name>
                <h3>Apple Computers</h3>
                <p>@username</p>
              </Personal.Name>
            </Personal>
            <button>Follow</button>
          </Company>

          <Company>
            <Personal>
              <Personal.Photo>
                <img src={PersonalPhoto} alt="" />
                <Personal.Photo.Live />
              </Personal.Photo>
              <Personal.Name>
                <h3>Apple Computers</h3>
                <p>@username</p>
              </Personal.Name>
            </Personal>
            <button>Follow</button>
          </Company>

          <Company>
            <Personal>
              <Personal.Photo>
                <img src={PersonalPhoto} alt="" />
                <Personal.Photo.Live />
              </Personal.Photo>
              <Personal.Name>
                <h3>Apple Computers</h3>
                <p>@username</p>
              </Personal.Name>
            </Personal>
            <button>Follow</button>
          </Company>

          <Company>
            <Personal>
              <Personal.Photo>
                <img src={PersonalPhoto} alt="" />
                <Personal.Photo.Live />
              </Personal.Photo>
              <Personal.Name>
                <h3>Apple Computers</h3>
                <p>@username</p>
              </Personal.Name>
            </Personal>
            <button>Follow</button>
          </Company>

          <Company>
            <Personal>
              <Personal.Photo>
                <img src={PersonalPhoto} alt="" />
                <Personal.Photo.Live />
              </Personal.Photo>
              <Personal.Name>
                <h3>Apple Computers</h3>
                <p>@username</p>
              </Personal.Name>
            </Personal>
            <button>Follow</button>
          </Company>

          <Company>
            <Personal>
              <Personal.Photo>
                <img src={PersonalPhoto} alt="" />
                <Personal.Photo.Live />
              </Personal.Photo>
              <Personal.Name>
                <h3>Apple Computers</h3>
                <p>@username</p>
              </Personal.Name>
            </Personal>
            <button>Follow</button>
          </Company>

          <Company>
            <Personal>
              <Personal.Photo>
                <img src={PersonalPhoto} alt="" />
                <Personal.Photo.Live />
              </Personal.Photo>
              <Personal.Name>
                <h3>Apple Computers</h3>
                <p>@username</p>
              </Personal.Name>
            </Personal>
            <button>Follow</button>
          </Company>
        </div>

        
        <div className='btnGroup'>
          <button onClick={openRodal} className='cancelBtn'>Cancel</button>
          <button onClick={openRodal} className='saveBtn'>Save</button>
        </div>

      </Rodal>

      <SidebarC.Menu>
        <div className='subscribe' onClick={openRodal}>
          <NavItem.Icon><img src={subscribe} /></NavItem.Icon>
          Subscribe
        </div>

        <NavItem to='/chat'>
          <NavItem.Icon><img src={chat} /></NavItem.Icon>
          Chat  
        </NavItem>

        <NavItem to='/news'>
          <NavItem.Icon><img src={news} /></NavItem.Icon>
          News  
        </NavItem>
        <NavItem to='/sale'>
          <NavItem.Icon><img src={sale} /></NavItem.Icon>
          Sale  
        </NavItem>
        <NavItem to='/setting'>
          <NavItem.Icon><img src={settings} /></NavItem.Icon>
          Settings  
        </NavItem>
      </SidebarC.Menu>

    </SidebarC>
  )
}

export default Sidebar
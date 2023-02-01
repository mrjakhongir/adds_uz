import React from 'react'
import { SidebarC, Personal, NavItem } from './style'
import PersonalPhoto from '../../assets/png/Subtract.png'
import { Navbar } from './NavDatas'
import {Rigister} from "../../contex/Contex"
import { useContext } from 'react'

const Sidebar = () => {
  const [token,setToken]  = useContext(Rigister)
  const res = JSON.parse(token)
  console.log(res);
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
        
        <SidebarC.Menu>
          {
            Navbar.map(item => {
              return(
                <NavItem key={item.id} to={item.link}>
                  <NavItem.Icon>{<item.icon/>}</NavItem.Icon>
                  {item.name}
                </NavItem>
              )
            })
          }
        </SidebarC.Menu>
    </SidebarC>
  )
}

export default Sidebar
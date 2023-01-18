import React from 'react'
import { SidebarC, Personal, NavItem } from './style'
import PersonalPhoto from '../../assets/png/Subtract.png'
import { Navbar } from './NavDatas'

const Sidebar = () => {
  return (
    <SidebarC>
        <Personal>
          <Personal.Photo>
             <img src={PersonalPhoto} alt="" />
             <Personal.Photo.Live />
          </Personal.Photo>
          <Personal.Name>
            <h3>Dilfuza Qodirova</h3>
            <p>@username</p>
          </Personal.Name>
        </Personal>
        <SidebarC.Menu>
          {
            Navbar.map(item => {
              return(
                <NavItem key={item.id}>
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
import React from 'react'
import { SidebarC, Button,  NavItem } from './style'

import { Navbar } from './NavDatas'
import { Link } from 'react-router-dom'

const AuthSidebar = () => {
    return (
        <SidebarC>
         <Button>
           <Link to="siginin" >
             siginin
           </Link>
         </Button>
      
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

export default AuthSidebar
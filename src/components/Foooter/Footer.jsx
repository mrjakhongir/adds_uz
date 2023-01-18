import React from 'react'
import { FooterC, NavItem } from './style'
import AddBtn from '../Buttons/AddBtn'

const Footer = () => {

    const infoData = ["About Us", "More  Search", "Testimionals", "News"];
    const helpLinksData = ["News", "Support", "Terms & Condition", "Privacy Policy"];
    const partnerships = ["Get help", "FAQ’s", "Contact us"];
    const contacts = ["Contact us", "Info-adds@gmail.com"];
    const helpMenu = ["FAQ", "Privacy", "Terms of Condition"]
  return (
    <FooterC>
      <main>
        <div>
            <AddBtn/>
            <p>Putin studied law at Leningrad<br/> State University.</p>
        </div>
        <div>
            <h3>Information</h3>
            {
                infoData.map(item => {return(<NavItem>{item}</NavItem>)})
            }
        </div>
        <div>
            <h3>Helpful Links</h3>
            {
                helpLinksData.map(item => {return(<NavItem>{item}</NavItem>)})
            }
        </div>
        <div>
            <h3>For Partnerships</h3>
            {
                partnerships.map(item => {return(<NavItem>{item}</NavItem>)})
            }
        </div>
        <div>
            <h3>Contact Us</h3>
            {
                contacts.map(item => {return(<NavItem>{item}</NavItem>)})
            }
        </div>
      </main>
      <footer>
        <p>©  Copyright: Adds.com</p>
        <div>
        {
                helpMenu.map(item => {return(<NavItem>{item}</NavItem>)})
        }
        </div>
        
      </footer>
    </FooterC>
  )
}

export default Footer
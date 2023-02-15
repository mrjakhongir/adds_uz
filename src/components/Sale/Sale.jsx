import React, {useState} from "react";
import { ClockIcon, EyeIcon, SaleC, Company, Personal } from "./style";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import search from '../../assets/icon/search.svg';
import PersonalPhoto from '../../assets/png/Subtract.png';
import { Action } from "../Buttons/style";

const Sale = (props) => {

  const {id, companyLogo, companyName, image, product, oldPrice, price, view} = props
  const [isOpen, setIsOpen] = useState(false)
  function shareProduct(id){
    console.log(id)
    toggleRodal()
  }

  function toggleRodal(){
    setIsOpen(!isOpen)
  }

  return (
    <SaleC>
      <SaleC.Header>
        <div>
          <img className="sale-logo" src={companyLogo} alt="" />
          <p>{companyName}</p>
        </div>
        <button>Follow me</button>
      </SaleC.Header>
      <SaleC.ImageContainer>
        <img className="sale-img" src={image} alt="" />
        <span>
          <ClockIcon />
        </span>
      </SaleC.ImageContainer>
      <SaleC.Info>
        <p className="product-name">{product}</p>
        <p className="brand-name">{companyName}</p>
        <p className="old-price">{oldPrice}</p>
        <div className="price-view">
          <p className="price">{price}</p>
          <span className="view"><EyeIcon/>{view}</span>
        </div>
      </SaleC.Info>
      <SaleC.Actions>
        <div>
          <Action mr8>
            <Action.Bookmark/>
          </Action>
          <Action>
          <Action.Chat/>
          </Action>
        </div>
        <Action>
          <Action.Share onClick={()=>shareProduct(id)}/>
        </Action>
      </SaleC.Actions>
      <Rodal className="rodal" onClose={toggleRodal} visible={isOpen} height={480} >
        {/* <div className="rodal-container" height={450}> */}
          <div className="rodalHeader">
            <h1 className='rodalTitle'>Send</h1>
            <div className='searchBar'>
              <input type='text' placeholder='Search...'/>
              <img src={search} alt="search icon"/>
            </div>
          </div>
          <div className="rodalMain">
          <Company>
            <input type="checkbox"/>
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
          </Company>
          <Company>
            <input type="checkbox"/>
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
          </Company>
          <Company>
            <input type="checkbox"/>
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
          </Company>
          <Company>
            <input type="checkbox"/>
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
          </Company>
          <Company>
            <input type="checkbox"/>
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
          </Company>
          </div>
          <div className="rodalFooter">
            <div className="select-all">
              <input id="check-all" type="checkbox"/>
              <label htmlFor="check-all">Select all</label>
            </div>
            <div className='btnGroup'>
              <button onClick={toggleRodal} className='cancelBtn'>Cancel</button>
              <button onClick={toggleRodal} className='saveBtn'>Send</button>
            </div>
          </div>
        {/* </div> */}
      </Rodal>
    </SaleC>
  );
};

export default Sale;

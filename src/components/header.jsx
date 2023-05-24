import React from "react";
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import onin_logo from "../pictures/onin_logo.png"
import Vector_basket from '../pictures/Vector_basket.png'


function Header(){
  const {basketItems} = useSelector(state => state.shopingCard)
  const toggleMobileMenu=() => {
    document.querySelector('#menu').classList.toggle('active');
    };
    
    return(
        <nav>      
          <ul id="menu" >
            <li id="null-li" />
            <li id="nav-li"><Link to='/main'>Главная</Link></li>
            <li id="nav-li"><Link to='/catalog'>Каталог</Link></li>
            <li id="nav-li" style={{width: '150px'}}><Link to='/catalog'>
                <img src={onin_logo} alt="Garden_Area" style={{width: '90px', height: '90px'}} /> </Link></li>
            <li id="nav-li"><Link to='/contacts'>Контакты</Link></li>
           <li id="nav-li"> <Link to='/about_us'>О нас</Link></li>
            <li id="nav-li"><Link to='/shopping_card'><img src={Vector_basket} style={{width: '30px', height: '30px'}} alt='корзина'/>
            <span className='span-basket'>{basketItems.length}</span></Link></li>
          </ul>
          <div className="mobile-bar" onClick={toggleMobileMenu}>
            <span />
            <span />
            <span />
          </div>
        </nav>
    );
}

export default Header;
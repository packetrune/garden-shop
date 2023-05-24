import React from 'react';
import {Link} from 'react-router-dom'
import {Header,Footer} from '../components/index'
import roseIMG from '../pictures/rose_img.png'



function Main() {

  const screenWidth = window.screen.width;
  

  return (
    <div>
    <Header />
    <section className="section-hero">
       
    <div className="container-hero">
      <div className="h1-hero"  id='h1-hero'>
        <h1 className="h1-hero-text">Олинкин сад</h1>
      </div>
      <div className="div-arount-main-text">
        <p className="p-hero-1">Расцветайте с нами</p>
        <p className="p-hero-2">Вырастим красивый сад вместе!</p>
      
      <div><Link to='/catalog'><input className="hero-button" type="button" defaultValue="К каталогу" /></Link></div>
      </div>
    </div>
     {screenWidth > 1400 ? <div className="rose_img"><img className="rose_img" src={roseIMG} /></div> : ""}
  </section>
  <Footer />
  </div>
  );

}

export default Main;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {chooseAllCardFromBasket, removeCardFromBasket, clearCardFromBasket} from '../redux/Slice/ShopingCardSlice'
import {BaketEmpty} from './index'

import {Header,Footer,ShopingCard} from '../components/index';




function ShoppingCard() {
 const dispatch =useDispatch();
 const basketItems = useSelector((state) => state.shopingCard.basketItems);
 const totalPrice = useSelector((state) => state.shopingCard.totalPrice);

 const [VisibleNOcard,setVisibleNOcard] = React.useState(true)

 React.useEffect(() => {
 // const noll =[];
   if ((basketItems.length)===0)
 {
  setVisibleNOcard(true);
 }
 else{
  setVisibleNOcard(false);
 }
  

 }, [basketItems]);



  const removeCard = ()=>{
  dispatch(removeCardFromBasket());
  };

  const removeAllCard = ()=>{
    dispatch(clearCardFromBasket());
    };


  const chooseAll = ()=>{
    dispatch(chooseAllCardFromBasket());
    };

 
   

  return (
<>
    <Header />
        <section className="section-basket">
      
          <div className="container-basket" id='container-basket'>
            <h1 className="h1-basket-text">Корзина</h1> 
            <div className="basket-top">
             
              <div><input onClick={chooseAll} className="basket-button" style={{marginLeft:'50px',color: '#0a87da', width: '120px'}} type="button" defaultValue="Выбрать все" /></div>
              <div><input onClick={removeCard} className="basket-button" style={{color: '#ad0f0f', width: '170px'}} type="button" defaultValue="Удалить выбранное" /></div>
              <div><input onClick={removeAllCard} className="basket-button" style={{color: 'black', width: '170px'}} type="button" defaultValue="Очистить корзину" /></div>
            </div>
    
              
            <div className="hr" />
            {VisibleNOcard && <BaketEmpty/> }
{ basketItems.map((basketItems)=>(<ShopingCard key={basketItems.id} {...basketItems}/>))}

<div className="hr" />
<h2>Общая стоимость: {totalPrice} <span>руб</span> </h2>

          </div>
         
        </section>
        <Footer />
        </>
   
              );
            }
      
      export default ShoppingCard;
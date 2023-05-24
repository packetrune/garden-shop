import React from "react";
import {addCardToBasket} from '../redux/Slice/ShopingCardSlice'
import { useDispatch, useSelector } from 'react-redux'


import minus from "../pictures/minus.png"
import plus from '../pictures/plus.png'
import Vector_basket from '../pictures/Vector_basket.png'



function Card(obj){
  const cardItem = useSelector((state)=>state.shopingCard.basketItems.find(OBJ=> OBJ.id === obj.id ))
  const addedCount = cardItem ? cardItem.count : 0;

const [count,setCount] = React.useState(1);
  const dispatch =useDispatch();

  const shoose = false;
  const objectCard = {count,shoose,...obj}
  const onClickAdd = () => {

    dispatch(addCardToBasket(objectCard));
    
  };

  const IncCount = () =>{
    setCount(count => ++count) ;
  }


  const DecCount = () =>{
    if (count>1)
    setCount(count => --count) ;
    
  }
 

    return(
      
        <div className="card" id="card">
        <img src={obj.imgURL} className="card-img-top mt-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{obj.title}</h5>
          <p className="card-text">{obj.description}</p>
          <div className="card-footer">
            <img src={minus} onClick={DecCount} alt="-" />
            <span id="number">{count}</span>
            <img src={plus} onClick={IncCount} alt="+" />
            <div className="space" />
            <span id="coast">{obj.price*count}</span>
            <div className="space" />
            <span id="money">руб.</span> 
            <div className="space" />
            <img onClick={onClickAdd} id="basket" src={Vector_basket} alt="купить" />
            <span className='span-basket-card'>{addedCount}</span>
          </div>
        </div>
      </div>
      
    );
}

export default Card;
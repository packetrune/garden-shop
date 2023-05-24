import React from "react";
import {removeCardFromBasketID,chooseCardFromBasket,DecCountCard,IncCountCard,removeCardFromBasket} from '../redux/Slice/ShopingCardSlice'
import { useSelector, useDispatch } from 'react-redux'


import trash from '../pictures/delete.png'
import addLeft from '../pictures/addLeft.png'
import addRight from '../pictures/addRight.png'
import PicturesOK from '../pictures/ok.png'
import PicturesOK_Click from '../pictures/ok_click.png'


function ShopingCard({id,count,imgURL,title,price,description}){
   const dispatch = useDispatch();
   
   const basketItems = useSelector((state)=> state.shopingCard.basketItems.find(OBJ=> OBJ.id === id ))
 //  const [choose, setChoose] = React.useState(false)
  // const choose = basketItems.choose ? {PicturesOK_Click} : {PicturesOK}
  // console.log('choose',basketItems.choose,'id',id);
  // // const onClickAdd = (obj) => {
  // //   dispatch(addCardToBasket(obj));
  // //   console.log('obj',obj);
    
  // // };
  //const [CountItems,setCountItems] = React.useState(count);
  const removeCard=()=>{
    dispatch(removeCardFromBasketID(id));
  }
  
  const chooseItem = ()=>{
    dispatch(chooseCardFromBasket(id));
  };

  const IncItems = () =>{
    dispatch(IncCountCard(id))
  }


  const DecItems = () =>{
    if (count>1)
    dispatch(DecCountCard(id))
    
  }

    return(
      
        <div className="basket-body">
        <div className="check-body-basket">
        <div><img src={basketItems.choose ? PicturesOK_Click : PicturesOK} onClick={chooseItem} alt="" /></div>
        </div>
        <div className="img-body-basket">
          <img src={imgURL} alt="" />
        </div>
        <div className="main-body-basket">
        <p className="main-basket-p">{title}</p>
          <p className="second-basket-p">{description}</p>
        </div>
        <div className="price-body-basket">
          <span id="coast-basket">{price*count}</span>
          <div className="space" />
          <span id="money-basket">руб.</span> 
        </div>
        <div className="amount-body-basket">
          <div className="amount-window">
          <img onClick={DecItems} src={addLeft} alt="" />
            <span className="amount-numder">{count}</span>
            <img onClick={IncItems} src={addRight} alt="" />
          </div>
          <span>{price}/шт.</span>
          
        </div>
        <div className="delete-body-basket">
        <img onClick={removeCard} src={trash} alt="" />
        </div>
      </div>
      
    );
}

export default ShopingCard;
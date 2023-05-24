import React from "react";
import Empty from '../pictures/BasketEmpty.jpg'

const BaketEmpty = () => {


    return (
<div className="empty-body">
<h2>Ваша корзина пуста...</h2>
<img className="empty-img" src={Empty} alt="" />
</div>
    );
}

export default BaketEmpty;
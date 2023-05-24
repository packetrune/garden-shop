import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    totalPrice:0,
    basketItems:[],
};

const shopingCard = createSlice({
    name: 'shopingCard',
    initialState,
    reducers:{
        addCardToBasket(state, action) {
            const findItem =state.basketItems.find((obj)=> obj.id === action.payload.id)
        
            if (findItem){
                findItem.count += action.payload.count;
            }
            else {
                state.basketItems.push({...action.payload})
            }

            state.totalPrice = state.basketItems.reduce((sum, obj) =>  +obj.price*obj.count + +sum,0);

           
        },

        chooseCardFromBasket(state,action) {
            state.basketItems=state.basketItems.map((obj)=>{
                if(obj.id === action.payload)
            {obj.choose=!obj.choose;} 
            return obj;
            });
            
        },

        chooseAllCardFromBasket(state) {
            state.basketItems=state.basketItems.map((obj)=>{
            obj.choose=true;
            return obj;
            });
        },


        removeCardFromBasket(state) {
            state.basketItems=state.basketItems.filter((obj)=> obj.choose !== true);
            state.totalPrice = state.basketItems.reduce((sum, obj) =>  +obj.price*obj.count + +sum,0);
        },

        removeCardFromBasketID(state,action) {
            state.basketItems=state.basketItems.filter((obj)=> obj.id !== action.payload);
            state.totalPrice = state.basketItems.reduce((sum, obj) =>  +obj.price*obj.count + +sum,0);
        },

        clearCardFromBasket(state) {
            state.basketItems=[];
            state.totalPrice = 0;
        },

        IncCountCard(state,action) {
            state.basketItems=state.basketItems.map((obj)=>{
                if(obj.id === action.payload)
            {obj.count=++obj.count;} 
            return obj;
            });

            state.totalPrice = state.basketItems.reduce((sum, obj) =>  +obj.price*obj.count + +sum,0);

            
        },

        DecCountCard(state,action) {
            state.basketItems=state.basketItems.map((obj)=>{
                if(obj.id === action.payload)
            {obj.count=--obj.count; }
            return obj;
            });

            state.totalPrice = state.basketItems.reduce((sum, obj) =>  +obj.price*obj.count + +sum,0);

        },

    },
});

export const {removeCardFromBasketID,chooseCardFromBasket,chooseAllCardFromBasket,addCardToBasket, removeCardFromBasket, clearCardFromBasket, IncCountCard,DecCountCard} = shopingCard.actions

export default shopingCard.reducer
import { configureStore } from '@reduxjs/toolkit'
import filters from './Slice/FilterSlice'
import shopingCard from './Slice/ShopingCardSlice'


export const store = configureStore({
    reducer: {
        filters,
        shopingCard,
    },
});
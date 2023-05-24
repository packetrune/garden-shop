import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categoryId: 0,
    sortId: {
        name: 'по популярности',
        sortProperty: 'rating',
    },
    search: '',
    pageNumber: 1,
    ItemsLength:0,
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        setCategoryId(state, action) {
            state.categoryId = action.payload;
           
        },

        setSortId(state, action) {
            state.sortId = action.payload;
        
        },

        setSearch(state, action) {
            state.search = action.payload;
         //   console.log('setSearch   '+state.search);
        },

        setPagination(state, action) {
            state.pageNumber = action.payload;
         //   console.log('setSearch   '+state.search);
        },

        setItemsLength(state, action) {
            state.ItemsLength = action.payload;
           
        },
    },
});

export const {setCategoryId, setSortId, setSearch, setPagination,setItemsLength} = filterSlice.actions

export default filterSlice.reducer
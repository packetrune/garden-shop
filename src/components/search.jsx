import React from "react";
import SearchPNG from "../pictures/SEARCH.png";
import ClosePNG from "../pictures/close.png";
import {setSearch,setPagination} from "../redux/Slice/FilterSlice";
import { useSelector, useDispatch } from 'react-redux'

function Search() {
    const dispatch = useDispatch();

        const search = useSelector((state)=>state.filters.search);



    const changeSearch = (search) =>{
        dispatch(setSearch(search));
        dispatch(setPagination(1));
      };

 
      
    return (
   <> 
        
        <input value={search} placeholder="Поиск..." className='imput-search' onChange={(event) => changeSearch(event.target.value)}/> 
        <img  src={ClosePNG} alt="СТЕРЕТЬ" className="img-close" id="img-close" onClick={()=>changeSearch('')}/>
    </>
        );
};

export default Search;
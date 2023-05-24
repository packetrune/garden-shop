import React from "react"

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId,setPagination } from '../redux/Slice/FilterSlice'

function Category({name_categories,items}){
    const dispatch = useDispatch();

    const categoryId = useSelector(state => state.filters.categoryId);


    const onClickSubCategory = (index) =>{
      dispatch(setCategoryId(index));
      dispatch(setPagination(1));
    };
  




    const [VisibleCategories, setVisibleCategories] = React.useState(true);

    const activeLabel = name_categories[0];

    const toggleCategories =() =>{
        setVisibleCategories(!VisibleCategories)
    };

    return(
<> 
<li className="mb-1">
<button className="open_collapse" onClick={toggleCategories}>{activeLabel}</button>
<div className="collapse-Home">
  <div>

  {VisibleCategories && (<ul className="categories-ul">
                    {items &&
                        items.map((name,index) => (
                        <li className="categories-li"
                        key={index}
                        onClick={()=> onClickSubCategory(index)}>
                        {name}
                        </li>))
                    }
                
                  </ul> )}
  </div>
</div>
</li>
</>
    );
}

export default Category;


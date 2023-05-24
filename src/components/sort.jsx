import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setSortId } from '../redux/Slice/FilterSlice'
import { Search } from './index'

const List = [
  {name:'По популярности', sortProperty:'rating'},
  {name:'По алфавиту', sortProperty:'title'},
  {name:'По цене', sortProperty:'price'}
];

function Sort(){
  const dispatch = useDispatch();

  

const sortId = useSelector(state => state.filters.sortId.sortProperty);

const [VisibleSort, setVisibleSort] = React.useState(false);
const [activeItems, setActiveItems] = React.useState(0);

const onSelectItems = (obj,index) =>{
    setActiveItems(index);
    setVisibleSort(false);
    
    dispatch(setSortId(obj));

   
};

const activeLabel = List[activeItems].name;

const sortRef = React.useRef();


const clickOutSide = (e) => {
  if((e.target.className) !== (sortRef.current.className))
  setVisibleSort(false);
  
   };
   
   
   React.useEffect(() => {
   document.body.addEventListener('click', clickOutSide);
   },[]);
   
const toggleVisibleSORT = () => {
    setVisibleSort(!VisibleSort);
};


    return(
        <div className='div-dropdown'>
          
                <div  className="sort" >
                    <button ref={sortRef} className="dropdownMenu" type="button" id="dropdownMenu" onClick={toggleVisibleSORT} >
                      <span className="dropdownMenu">{activeLabel}</span>
                    </button>
                 
                  {VisibleSort && (<ul  className="dropdown-menu">
                    {List &&
                        List.map((obj,index) => (
                        <li className={sortId === obj.sortProperty ? 'active-li' : ''}
                        onClick={()=> onSelectItems(obj,index)}
                        key={index}>
                        {obj.name}
                        </li>))
                    
                    
                    }
                
                  </ul> )}
                  </div>
                  <Search/>
      </div>
    );
}

export default Sort;

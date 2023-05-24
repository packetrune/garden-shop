import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setPagination } from '../redux/Slice/FilterSlice'


 
                  
function Pagination () {

  function Page() {
    this.number = 0;
    this.index = 0;
  }
  const arr = [];
  function MyFun(CountPage) {
    
    for (var i = 1; i < CountPage; i++) {
      var c = new Page(); //обнуляю после каждой итерации
      for (var j = 1; j < CountPage; j++) { //заменил название i на j так как первая уже используется в цикле выше
        c.number=i;
        c.index=i;
      }
      arr.push(c);
    }
  }




  const [PageArr, setPageArr] = React.useState();
  
  const length =  useSelector(state => state.filters.ItemsLength);
    

    

    const dispatch= useDispatch();
    const activePage = useSelector((state)=>state.filters.pageNumber);

    const onSelectPage= (n)=>{
        dispatch(setPagination(n));
    };

   
    var pogreshnost=0;
 React.useEffect(()=>{
   if(length%4!==0){
    pogreshnost=1;
  }
  const CountPage = Math.floor((length/4)+1+pogreshnost);
  const page =  MyFun(CountPage);
  setPageArr(arr);
  
 },[length]);

    return (
<>
<div className="div-pagination">
    {PageArr &&
    PageArr.map((obj) => (
    <button className={obj.number === activePage ? 'active-page' : 'button-pagination'}
    onClick={()=> onSelectPage(obj.number)}
     key={obj.index}>{obj.number}</button>))}

</div>
</>
    );
};

export default Pagination
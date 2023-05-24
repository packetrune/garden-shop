import React from 'react';
import {Header,Card,Sort,Categories,Footer,Skeleton, Pagination} from '../components/index'
import { useSelector, useDispatch } from 'react-redux'
import { setItemsLength } from '../redux/Slice/FilterSlice'



function Catalog({jsonItems,processLoading}) {
    
 const dispatch =useDispatch();
  const [VisibleNOsearch,setVisibleNOsearch] = React.useState(false)
  const [VisiblePagination,setVisiblePagination] = React.useState(true)
 const pageNumber = useSelector((state)=>state.filters.pageNumber);

  const length = jsonItems.length;
  const [VisibleCatalog, setVisibleCatalog] = React.useState(false);
  const catalogRef = React.useRef();

 
  React.useEffect((jsonItems)=>{
    dispatch(setItemsLength(length));
    const noll = 0;

    if ((alert.length)===noll)
    {
      setVisibleNOsearch(true);
    }
    else{
      setVisibleNOsearch(false);
    }

    if (length<=4)
    {
      setVisiblePagination(false);
    }
    else{
      setVisiblePagination(true);

    }
  },[jsonItems])

  const toggleCategoriesMenu = () => {
    setVisibleCatalog(!VisibleCatalog);
      document.querySelector('.div-dropdown').classList.toggle('activeCategories');
      document.querySelector('.main-container-card').classList.toggle('activeCategories');
  };
  

const count=0;
  function JNA() {
    this.arr = [];
  }

  const jsonNEWarr=[];
  function MyFun(jsonItems,count,length) {
    const CountPage = Math.floor((length/4)+1);
    for (var i = 1; i <= (CountPage); i++) {
      var c = new JNA; 
      for (var j = 0; j < 4; j++) { 
        if (jsonItems[count]===undefined)
        {
         break;
         }
      c.arr[j]=jsonItems[count];
      count++;

      }
      jsonNEWarr.push(c);
    }
  }
  
  const page =  MyFun(jsonItems,count,length);

 
  

  const pageN=pageNumber-1;

       const arrp = jsonNEWarr[pageN];
       const alert = arrp.arr;

  return (
          <>
           <Header />
            <section className="section-catalog" id="to_catalog">
              <div className="categories-catalog">
              {VisibleCatalog && (<div className="container-categories" id='container-categories' ref={catalogRef}>
                  <h3 className='h3-catalog'>Категории товаров</h3>
                  <Categories items={['Все подкатегории','Крупнолистные','Древовидная','Пильчатая гортензия','Метельчатые']} name_categories={['Декоративные Гортензии']}/>

                </div>)}
                <main className="main-container-card">
                  <div className="toggleCategoriesMenu">
                    <button className="toggleCategoriesMenu-btn" onClick={toggleCategoriesMenu} id='toggleCategoriesMenu-btn' type="button"><span /><span /><span /></button>
                  </div>
                  <Sort/>
   <> {processLoading
      ? [...new Array(4)].map((_, index)=> <Skeleton key={index}/>)
      : alert.map((obj) => (<Card key={obj.id} {...obj}/>))
    }</>

{VisibleNOsearch &&
     <h1 className='noSearch'>По вашему запросу ничего не найдено...</h1>
    }
    {VisiblePagination&&<Pagination/>}
    
                </main>
              </div>
            </section>
                <Footer />
                </> 
  
       
        );
      }

export default Catalog;
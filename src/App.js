import React from 'react';
import { useSelector } from 'react-redux'
import {Contacts, Catalog, AboutUs, Main, ShoppingCard} from './pages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import './main_style.css';
import './script.js';


function App() {
  const[Items,setItems]=React.useState([]);
  const[isLoading, setIsLoading]=React.useState(true);

  const categoryId = useSelector((state)=>state.filters.categoryId);
  const sortP = useSelector((state)=>state.filters.sortId.sortProperty);
  const search = useSelector((state)=>state.filters.search);
  

  const category = categoryId > 0 ? `?SubCategoryId=${categoryId}` : '';
  const sort = `&sortBy=${sortP}` ;
  const searchF = `?search=${search}` ;
  const str ='';


  React.useEffect(() => {
    setIsLoading(true);
    if(search > str)
    {
    fetch(`https://63da28ee19fffcd620c2258d.mockapi.io/garden${searchF}${sort}`).then((Response) => Response.json()).then((arr) => {setItems(arr); });
    }
    else if (category == 0)
    {
      fetch(`https://63da28ee19fffcd620c2258d.mockapi.io/garden?sortBy=${sortP}`).then((Response) => Response.json()).then((arr) => {setItems(arr); });
      
    }
    else fetch(`https://63da28ee19fffcd620c2258d.mockapi.io/garden${category}${sort}`).then((Response) => Response.json()).then((arr) => {setItems(arr); } );
      

      setIsLoading(false);
    
  },[categoryId, sortP,search]);


  return (
        <Router>
          <Routes>
          <Route path="/catalog" element={<Catalog processLoading={isLoading} jsonItems={Items}/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/about_us" element={<AboutUs/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/shopping_card" element={<ShoppingCard/>} />
          </Routes>
        </Router>
        );
      }

export default App;

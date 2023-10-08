import './App.css';
import AddProduct from './components/Product/AddProduct';
import React, {useState} from 'react';
import ProductList from './components/Product/ProductList'

function App() {
  const [productList, setProductList] = useState([]);
  // const allLocalStoredItems = {...localStorage};
  // const localItemArray=[];
 // console.log(allLocalStoredItems)
  const addProductHandler = (pId,pPrice,pDesc,pCategory) => {
    setProductList((prevProductList) => {
      return [
        ...prevProductList,
        {id: pId, price: pPrice, desc: pDesc, category: pCategory}
      ]
    })
  }
  //console.log(productList);
  return(
    <div>
      <AddProduct onAddProduct={addProductHandler}/>
      <ProductList products = {productList}/>
    </div>
  );
}

export default App;

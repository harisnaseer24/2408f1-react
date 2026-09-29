import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import axios from 'axios';

const Products = () => {
//api call
//fake api
const [products, setProducts]= useState([]); 

//function
const getProducts = async ()=>{


let response = await axios.get('https://6895fd7e039a1a2b289119bf.mockapi.io/api/v1/products');
let data = await response.data;
setProducts([...data]);
console.log(response.data)
}

useEffect(()=>{

    getProducts();
},[])

  return (
    <div>
      <h1>Showing Products</h1>
        { products.length > 0 ? <Cards data={products} /> : <img className='' src="loader.gif" height="65" /> }

    </div>
  )
}

export default Products

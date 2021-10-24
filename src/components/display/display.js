import React from 'react';
import "./display.css";
import Product from '../product/product';
import Banner1 from '../banner1';
//import Footer from '../footer/footer';
import Page from '../pagination/page';
//import{Link} from "react-router-dom"
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getProducts as listProducts} from "../../Redux/actions/productActions"

/**
* @author
* @function Display
**/

const Display = (props) => {
  const dispatch = useDispatch();

  const getProducts = useSelector( state => state.getProducts);
  const{products,loading,error} = getProducts;
  
  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch]);

  


  return(
    <div className="contain">
    <div className="display">
    <Banner1/>
    <div className="displaypage">
     <div className="displayproducts">
     {loading ? (<h2>loading...</h2>)
  :error ?(<h2>{error}</h2>):
  
  (products.map((product)=>
  <Product key={product._id}
  productId={product._id}
  name={product.name}
  price={product.price}
  imgUrl={product.imgUrl}/>
  ))}
 </div>
  </div>
  <Page/>
  <br/>
  <br/>
  
  </div>
  
    
    </div>
  )
  
    
   

 }

export default Display
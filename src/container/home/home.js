import React from 'react'
import "./home.css";
import Banner from "../../components/banner/banner"
import Product from "../../components/product/product"
import Loadmore from '../../components/loadmore/loadmore';
import Service from '../../components/service/service';
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getProducts as listProducts} from "../../Redux/actions/productActions"
/**
* @author
* @function Home
**/

const Home = () => {
const dispatch = useDispatch();

const getProducts = useSelector( state => state.getProducts);
const{products,loading,error} = getProducts;

useEffect(()=>{
  dispatch(listProducts());
},[dispatch]);



  return(
      <div className="container">
<Banner/>
<div className ="homePage">
    <h2 className="homescreen">BEST SELLER</h2>
    <div className="homeProducts">
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
    <h2 className ="title">Load More</h2>
  
    <Loadmore/>
    <Service/>
    <h2 className="feature">Feartured Product</h2>
    <Carousel/>
    <hr/>
    <Footer/>

   
    </div>
   )

 }

export default Home
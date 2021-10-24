import React from 'react'
import "./product.css";
import{Link} from "react-router-dom"
//import { addToCart } from '../../Redux/actions/cartActions';
//import { from } from 'webpack-sources/lib/CompatSource';

/**
* @author
* @function Product
**/

const Product = ({imgUrl,name,price,productId}) => {
  
  
  return(
    <div className ="product">
    <img className="product__img" src={imgUrl} alt="{name}"/>
    <div className="product__info">
    <p className="info__name">{name}</p>
    <p className="info__price">${price}</p>
    <Link to = {`/product/${productId}`} className="info__button">view</Link>

    </div>

    </div>
   )

 }

export default Product
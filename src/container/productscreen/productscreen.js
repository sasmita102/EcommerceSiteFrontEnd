import React from 'react';
import "./productscreen.css";
import {useEffect,useState} from "react";
import {useParams ,useHistory} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import{getProductDetails } from "../../Redux/actions/productActions"
import {addToCart} from "../../Redux/actions/cartActions";

/**
* @author
* @function ProductScreen
**/const ProductScreen = () => {
const [qty, setQty] = useState(1);

const dispatch = useDispatch();
const productDetails = useSelector(state => state.getProductDetails);

const {loading, error, product} = productDetails;
 const {id} = useParams();
 console.log(id);
useEffect (()=>{
    //if(product && match.params.id !== product._id){
dispatch(getProductDetails(id))
    //};
},[dispatch,id]);
//console.log(match)
const history = useHistory();
const addToCartHandler=()=>{
    dispatch(addToCart(product._id, qty));
    history.push("/Cart")
    
}

return(
    <div className="productscreen">
    {loading ? (<h2>Loading...</h2>):error ?(<h2>{error}</h2>):
    (<>
    <div className="productscreen__left">
    <div>
    <img className="left__image" src={product.imgUrl} alt={product.name}/>
</div>
<div className="left__info">
<p className="left__name">{product.name}</p>
<p> price:${product.price}</p>
</div>
</div>
<div className="productscreen__right">
<div className="right__info">
<p>
price:<span>${product.price}</span></p>
<p>
Qty
<select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">4</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
</p>
<p>
    <button type="button" onClick={addToCartHandler}>ADD CART</button>
</p>
</div>
</div>
    

    </>
    )}
    
    
        
    
</div>
   )

 }

export default ProductScreen
import React from 'react'
import "./cart.css"
import CartItem from '../../components/cartitem/cartitem';
import Footer from '../../components/footer/footer';
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart ,removeFromCart} from "../../Redux/actions/cartActions"

/**
* @author
* @function Cart
**/

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state=> state.cart);
  const {cartItems} = cart;
const qtyChangeHandler = (id, qty)=>{
  dispatch(addToCart(id , qty));
};

const removeHandler = (id)=>{
  dispatch(removeFromCart(id));
}
const getCartCount=()=>{
  return cartItems.reduce((qty,item) => item.qty + qty , 0)
};
const getCartSubTotal=()=>{
  return cartItems.reduce((price,item)=>(item.price* item.qty) +price ,0);
}

  return(
      <div className="container">
    <div className="cartscreen">
    <div className="cartscreen__left">
    <h2>Shopping cart</h2>
    {cartItems.length === 0 ?(
    <div>
      Your cart is empty <Link to="/">GO BACK</Link>
    </div>
      ):
        (cartItems.map((item)=> (
        <CartItem item={item} qtyChangeHandler={qtyChangeHandler}
        removeHandler={removeHandler}
        />))
      
        )}
</div>
<div className="cartscreen__right">
<div className="cartscreen__info">
<p>
    Subtotal ({getCartCount()}) items
</p>
<p>${getCartSubTotal().toFixed(2)}</p>
</div>
<div>
<button>Proceed to Pay</button>
</div>
</div>

</div>
<Footer/>
</div>
    
   )

 }

export default Cart
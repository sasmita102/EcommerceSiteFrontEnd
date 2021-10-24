import React from 'react'
import "./cartitem.css";
import { Link } from 'react-router-dom';

/**
* @author
* @function CartItem
**/

const CartItem = ({item, qtyChangeHandler,removeHandler}) => {
  return(
    <div className="cartitem">
    <div>
    <img className="cartitem__image"  src={item.imgUrl} alt={item.name}/>
</div>
<Link to={`/product/${item.product}`} className="cartitem__name">
<p>{item.name}</p>
</Link>
<p className="cartitem__price">${item.price}</p>

<select className="cartitem__select" >
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>

</select>
<button className="cartitem__deleteBtn"
onClick={()=>removeHandler(item.product)}
>
    <i className="fas fa-trash"></i>
</button>

    </div>
   )

 }

export default CartItem
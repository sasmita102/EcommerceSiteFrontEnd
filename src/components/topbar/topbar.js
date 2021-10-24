import React from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';

/**
* @author
* @function Topbar
**/

const Topbar = (props) => {
  return(
    <div className="top">
    <div className="topleft">
    <h4 className="icon">En</h4>
    
    <span><i className=" icon fas fa-dollar-sign"></i></span>
    </div>
    <div className="topright">
    <i className =" topicon fas fa-user-alt">my profile</i>
    <Link to="/Cart">
    <i className =" topicon fas fa-shopping-cart">items</i>
    </Link>
    <input type = "text" placeholder = "Search" id ="searchmenu" />
    <span><i className="fas fa-search"></i></span>
    </div>
    <div></div> 

    </div>
   )

 }

export default Topbar
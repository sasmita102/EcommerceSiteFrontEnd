import React,{useState} from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
//import HeaderMenu from './Header/index';
//import {FaBars,FaTimes} from "react-icons/fa";





function Navbar(){
  const[isMobile , setIsMobile] = useState(false);
  
return(
  <>
  <div className = "Navbar">
    <div className="logo">
  
  </div>
    <ul className ={isMobile ? "nav-links-mobile":"nav-links"}
    onClick= {()=>setIsMobile(false)}>
     <Link to="/" className="home">
     <li>HOME</li>
     </Link>
     
     <Link to="/STORE" className="technology">
     <li>STORE</li>
     </Link>
     <Link to="/Bollywood" className="technology">
     <li>PHONE</li>
     </Link>
     

     <Link to="/" className="food">
     <li>MACBOOK</li>
     </Link>
     <Link to="/" className="fittness">
     <li>IPAD</li>
     </Link>
    </ul> 
    <button className="mobile-menu-icon"
    onClick={()=>setIsMobile(!isMobile)}>
    {isMobile ?(<i className="fas fa-times"></i>):
  (<i className="fas fa-bars"></i>

  )}

    </button>
    </div>
    
    
    </>
   )

 }

export default  Navbar;
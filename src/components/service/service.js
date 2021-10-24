import React from 'react'
import "./service.css";

/**
* @author
* @function Service
**/

const Service = (props) => {
  return(
    <div className = "facility">
    <div className ="faleft">
    <i className="fas fa-truck fa-3x" style={{color:"red"}}></i>
    <div className="faInfo">
    <h3>FREE SHIPPING</h3>
    <p className="fadesc">Lorem ipsum dolor sit amet,consectrtur adipsiling elit,sed do eiusmod tempor incident ut labore et dolore magna aliqua enim adipsiling
        veniam,quis nostrud exercitation .</p>
    </div>
    </div>
    <div className ="facenter">
    <i className="fas fa-hand-holding-usd fa-3x"style={{color:"red"}}></i>
    <div className="faInfo1">
    <h3>100% REFUND</h3>
    <p className="fadesc1">Lorem ipsum dolor sit amet,consectrtur adipsiling elit,sed do eiusmod tempor incident ut labore et dolore magna aliqua enim adipsiling
        veniam,quis nostrud exercitation .</p>
        </div>
    </div>
    <div className ="faright">
    <i className="fas fa-user-tie fa-3x"style={{color:"red"}}></i>
    <div className="faInfo2">
    <h3>SUPPORT 24/7</h3>
    <p className="fadesc2">Lorem ipsum dolor sit amet,consectrtur adipsiling elit,sed do eiusmod tempor incident ut labore et dolore magna aliqua enim adipsiling
        veniam,quis nostrud exercitation .</p>
        </div>
    </div>
    </div>
   )

 }

export default Service
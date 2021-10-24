import React from 'react';
import "./filter.css";

import Pricerange from '../price range';
import Colorfilter from '../radiocolor';

/**
* @author
* @function Filter
**/

const Filter = (props) => {
  return(
    <div className="filter">
     <div className="accesories">
     <br/>
     <h2>ACCESORIES</h2>
     <br/>
     <h4>Apple Care</h4>
     <br/>
     <h4>Cables & Docks</h4>
     <br/>
     <h4>Cases & Films</h4>
     <br/>
     <h4>Charging Devices</h4>
     <br/>
     <h4>Headphones</h4>
     <br/>
     <h4>Connected Homes</h4>
     <br/>

     </div>
     

     <div className="price">
     <h2>PRICES</h2>
     <Pricerange/>
         
     </div>
     <div className="color">
     <h2>COLOR</h2>
     <Colorfilter/>
      </div>
      <div className="brand">
      <h2>Brand</h2>
      <br/>
      <h4>APPLE</h4>
      <br/>
      <h4>LG</h4>
      <br/>
      <h4>SAMSUNG</h4>
      <br/>
      <h4>MICROMAX</h4>
      </div>
      <div className="more">
      <h2>MORE</h2>
      </div>
    </div>
   )

 }

export default Filter
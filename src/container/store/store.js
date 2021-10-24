import React from 'react'
import "./store.css";
import Filter from '../../components/filter/filter';
import Display from '../../components/display/display';
import Footer from '../../components/footer/footer';


/**
* @author
* @function Store
**/

const Store = (props) => {
  return(
      <div className="container1">
    <div className="store">
        <Filter/>
        <Display/>


    </div>
    <Footer/>
    </div>
   )

 }

export default Store
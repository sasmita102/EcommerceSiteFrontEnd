import React from 'react';
import "./page.css"
import { Link } from 'react-router-dom';

/**
* @author
* @function Page
**/

const Page = (props) => {
  return(
    <div className="first">
    <Link to="" className="page__info">previous</Link>
    <Link to="" className="page__info">1</Link>
    <Link to="" className="page__info">2</Link>
    <Link to="" className="page__info">3</Link>
    <Link to="" className="page__info">4</Link>
    <Link to="" className="page__info">5</Link>
    <Link to="" className="page__info">6</Link>
    <Link to="" className="page__info">Next</Link>
    </div>
   )

 }

export default Page
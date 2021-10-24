import React from "react"; 
import './App.css';
import Topbar from "./components/topbar/topbar";
import TopHeader from "./components/topheader/topheader";
import Navbar from "./components/navbar";
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./container/home/home";
import Store from "./container/store/store";
import Cart from "./container/Cart/cart";
import ProductScreen from "./container/productscreen/productscreen";


function App() {
  return (
     <Router>
    <div className="app">
  <Switch>
    <Route exact path="/">
      <Topbar/>
      <hr/>
      <TopHeader/>
     
      <Navbar/>
      <Home/>
      </Route>
      <Route exact path="/product/:id">
      <ProductScreen/>
      </Route>
      <Route exact path="/STORE">
      <Topbar/>
      <hr/>
      <TopHeader/>
      <Navbar/>
      <hr/>
      <Store/>
      </Route>
      <Route exact path="/Cart">
      <Topbar/>
      <hr/>
      <TopHeader/>
      <Navbar/>
      <hr/>
      <Cart/>
        </Route>
      </Switch>
      </div>
     
      </Router>
  
    
  );
}

export default App;

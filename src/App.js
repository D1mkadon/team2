import { Routes, Route, Link, } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AboutUs from "./Components/About_us/AboutUs";
import ThirdPage from "./Components/Pages/thirdPage";
import NotFoundPage from "./Components/Pages/notFoundPage";
import FourthPage from "./Components/Pages/fourthPage";
import React from "react";

import MyOffice from './Components/MyOffice/MyOffice';
import Main from './Components/Main/Main';
import SingleProductPage from "./Components/Main/SingleProductPage/SingleProductPage";
import Cart from './Components/Cart/Cart'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Link className="Link" to="/">Main</Link>
        <Link className="Link" to="/MyOffice">MyOffice</Link>
        <Link className="Link" to="/Cart">Cart</Link>
        <Link className="Link" to="/fourthPage">4</Link>
      </header>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/MyOffice" element={<MyOffice />}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/fourthPage" element={<FourthPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>



      
    </div >
  );
}

export default App;

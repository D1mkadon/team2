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
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Link className="Link" to="/">Main</Link>
        <Link className="Link" to="/MyOffice">MyOffice</Link>
        <Link className="Link" to="/thirdPage">3</Link>
        <Link className="Link" to="/AboutUs">AboutUs</Link>
      </header>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/MyOffice" element={<MyOffice />}></Route>
        <Route path="/ThirdPage" element={<ThirdPage />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>




    </div >
  );
}

export default App;

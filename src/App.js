import { Routes, Route, Link, } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AboutUs from "./Components/About_us/AboutUs";
import SecondPage from "./Components/Pages/secondPage";
import ThirdPage from "./Components/Pages/thirdPage";
import NotFoundPage from "./Components/Pages/notFoundPage";
import FourthPage from "./Components/Pages/fourthPage";
import React from "react";

import MyOffice from './Components/MyOffice/MyOffice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.products.count)
  return (
    <div className="App">
      <header className="App-header">

        <Link className="Link" to="/MyOffice">MyOffice</Link>
        <Link className="Link" to="/secondPage">2</Link>
        <Link className="Link" to="/thirdPage">3</Link>
        <Link className="Link" to="/fourthPage">4</Link>
      </header>

      <Routes>
        <Route path="/" >home</Route>
        <Route path="/MyOffice" element={<MyOffice />}></Route>
        <Route path="/SecondPage" element={<SecondPage />}></Route>
        <Route path="/ThirdPage" element={<ThirdPage />}></Route>
        <Route path="/fourthPage" element={<FourthPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>



      <footer><AboutUs /></footer>
    </div >
  );
}

export default App;

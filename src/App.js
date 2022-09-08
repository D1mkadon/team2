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
function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.products.count)
  return (
    <div className="App">
      <header className="App-header">

        <Link className="Link" to="/Main">Main</Link>
        <Link className="Link" to="/MyOffice">MyOffice</Link>
        <Link className="Link" to="/thirdPage">3</Link>
        <Link className="Link" to="/AboutUs">AboutUs</Link>
      </header>

      <Routes>
        <Route path="/" >home</Route>
        <Route path="/Main" element={<Main />}></Route>
        <Route path="/MyOffice" element={<MyOffice />}></Route>
        <Route path="/ThirdPage" element={<ThirdPage />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>




    </div >
  );
}

export default App;

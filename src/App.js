import { Routes, Route, Link, } from "react-router-dom";

import './App.css';
import AboutUs from "./Components/About_us/AboutUs";
import NotFoundPage from "./Components/Pages/notFoundPage";
import React from "react";

import MyOffice from './Components/MyOffice/MyOffice';
import Main from './Components/Main/Main';
import SingleProductPage from "./Components/Main/SingleProductPage/SingleProductPage";
import AboutUsSocial from "./Components/About_us/aboutUsSocial/AboutUsSocial";
import FooterDescription from "./Components/FooterDescription/FooterDescription";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <header className="App-header">
       <div className={"homePage"}> <Link className="Link" to="/">Main</Link></div>
        <nav><Link className="Link" to="/MyOffice">MyOffice</Link>

        <Link className="Link" to="/AboutUs">AboutUs</Link></nav>
      </header>
    <main><div className="Container">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/MyOffice" element={<MyOffice />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
    </main>
            <footer>
        <FooterDescription/>
        <AboutUsSocial/>
            </footer>
        </div>

    </div >
  );
}

export default App;

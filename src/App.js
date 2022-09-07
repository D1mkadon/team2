import { Routes, Route, Link,} from "react-router-dom";
import './App.css';
import AboutUs from "./Components/About_us/AboutUs";
import FirstPage from "./Components/Pages/firstPage";
import SecondPage  from "./Components/Pages/secondPage";
import ThirdPage  from "./Components/Pages/thirdPage";
import  NotFoundPage from "./Components/Pages/notFoundPage";
import FourthPage from "./Components/Pages/fourthPage";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Link className="Link" to="/firstPage">1</Link>
          <Link className="Link" to="/secondPage">2</Link>
          <Link className="Link" to="/thirdPage">3</Link>
          <Link className="Link" to="/fourthPage">4</Link>
      </header>
          <Routes>
              <Route path="/" >home</Route>
              <Route path="/FirstPage" element={<FirstPage/>}></Route>
              <Route path="/SecondPage" element={<SecondPage/>}></Route>
              <Route path="/ThirdPage" element={<ThirdPage/>}></Route>
              <Route path="/fourthPage" element={<FourthPage/>}></Route>
              <Route path="*" element={<NotFoundPage/>}></Route>
          </Routes>



        <footer><AboutUs/></footer>
    </div>
  );
}

export default App;

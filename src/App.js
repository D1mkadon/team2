import { Routes, Route, Link, } from "react-router-dom";
import './App.css';
import AboutUs from "./Components/About_us/AboutUs";
import NotFoundPage from "./Components/Pages/notFoundPage";
import React, { useEffect } from "react";

import MyOffice from './Components/MyOffice/MyOffice';
import Main from './Components/Main/Main';
import SingleProductPage from "./Components/Main/SingleProductPage/SingleProductPage";
import ListPage from "./Components/Main/ListPage/ListPage";
import Cart from './Components/Cart/Cart'
import { useDispatch } from "react-redux";
import { setProducts } from "./Components/reducers/productsReducer";
import { products } from "./Components/Data/Data";
import { OrderPage } from "./Components/OrderPage/OrderPage";
import OrderFinalyPage from "./Components/OrderPage/OrderItem/OrderForm/OrderFinalyPage/OrderFinalyPage";
// import FooterDescription from "./Components/FooterDescription/FooterDescription";
// import AboutUsSocial from "./Components/About_us/aboutUsSocial/AboutUsSocial";
function App() {
  const dispatch = useDispatch()

    useEffect (()=>{
        // getProducts()
        // .then(json=>{
        //     dispatch(setProducts(json))
        // })
        dispatch(setProducts(products))
    },[])
  return (
    <div className="App">
        <div className="wrapper">

      <header className="App-header">

        <Link className="Link" to="/">Main</Link>
        <Link className="Link" to="/MyOffice">MyOffice</Link>
        <Link className="Link" to="/Cart">Cart</Link>
        <Link className="Link" to="/AboutUs">AboutUs</Link>
      </header>

            <main><div className="Container">
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/:category/:id" element={<SingleProductPage />}></Route>
                    <Route path="/:category" element={<ListPage />}></Route>
                    <Route path="/MyOffice" element={<MyOffice />}></Route>
                    <Route path="/Cart" element={<Cart/>}></Route>
                    <Route path="/AboutUs" element={<AboutUs />}></Route>
                    <Route path="/Order" element={<OrderPage/>}></Route>
                    <Route path="/Order/sending" element={<OrderFinalyPage/>}></Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </div>
            </main>
            {/* <footer>
                <FooterDescription/>
                <AboutUsSocial/>
            </footer> */}
        </div>

    </div >
  );
}

export default App;

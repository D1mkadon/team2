import './App.css';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <SideBar className="SideBar" />
      <div className='main-contex'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/categorie/:id1' element={<Products />} />
          <Route path='/categorie/:id1/:id' element={<Product />} />
        </Routes>
      </div>
    </div >
  );
}

export default App;

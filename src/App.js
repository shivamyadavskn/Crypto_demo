import React from 'react';
import './App.css';
import Header from './Component/Common/Header';
import {Routes,Route} from 'react-router-dom';
import DashBoard from './Component/pages/DashBoard';
import Compare from './Component/pages/Compare';
import Home from './Component/pages/Home';
import Wishlist from './Component/pages/Wishlist';
import CoinPage from './Component/pages/Coin';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Footer from './Component/Common/Footer';

function App() {
  document.title='Crypto Tracker';
  return (
    <div className="App scroll-smooth ">
      <Header/>
      {/* <LandingPage/> */}
      <ToastContainer/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/compare' element={<Compare/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/coin/:id' element={<CoinPage/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;

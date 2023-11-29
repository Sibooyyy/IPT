import React, { useState, useRef } from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Footer/Footer'
import men_banner from '../src/Assets/banner_mens.png'
import women_banner from '../src/Assets/banner_women.png'
import kid_banner from '../src/Assets/banner_kids.png'
import About from './Pages/About'
import Login from './Pages/Login'
import CheckOut from './CheckOut/CheckOut'
import ScrollToTop from './Components/ScrollToTop'
import ScrollTop from './Components/ScrollTop'







function App() {
  return (
  <div>
    <BrowserRouter> 
    <Navbar/>
    <ScrollTop/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={men_banner} category="Men"/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category="Women"/>}/>
      <Route path='/preloved' element={<ShopCategory banner={kid_banner} category="Preloved"/>}/>
      <Route path='/about' element={<About category="about"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/signup' element={<LoginSignup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
    <Footer/>
    <ScrollToTop/>
    </BrowserRouter>
  </div>
  )
}
export default App
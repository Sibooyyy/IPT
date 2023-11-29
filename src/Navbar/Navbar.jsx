import React, { useContext } from 'react'
import Logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../ShopContext/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
        <div className="nav-logo">
          <Link style={{ textDecoration: 'none'}}to='/'><img src={Logo} alt="" /></Link>
          <p>ShopWise</p>
        </div> 
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none'}}to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none'}}to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("preloved")}}><Link style={{ textDecoration: 'none'}}to='/preloved'>Pre-loved</Link>{menu==="preloved"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none'}}to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/signup'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
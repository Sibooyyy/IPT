import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import fb_icon from '../Assets/fb_icon.png'
import github_icon from '../Assets/github_icon.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>    
        <div className="footer-logo">
          <Link to='/'><img src={footer_logo} alt="" /></Link>  
            <p>ShopWise</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About Us</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={fb_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={github_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All</p>
        </div>
    </div>
  )
}

export default Footer
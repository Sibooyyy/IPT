import React from 'react'
import './CSS/About.css'
import main from '../Assets/main1.png'

const About = () => {
  return (
    <div className="about-header">
      <div className="about-left">
        <img src={main}alt="" />
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <div className="about-field">
       <div className="body">
       <span> Welcome to Shopwise, where style meets affordability! At Shopwise, we believe that fashion is an expression of individuality, and we're here to help you discover and celebrate your unique style. <br/> <br/>
        Established with a passion for providing trendsetting fashion at accessible prices, Shopwise is your go-to destination for all things chic and stylish. We understand that clothing is more than just fabric; it's a form of self-expression. That's why our curated collection is designed to cater to diverse tastes and preferences, ensuring that everyone can find something that resonates with their personal style. <br/> <br/>
        But Shopwise is more than just a clothing store; it's a community. We value our customers and strive to create a space where fashion enthusiasts can connect, share ideas, and find inspiration. Whether you're a trendsetter or a classic style lover, we invite you to join the Shopwise community and embark on a fashion journey that is uniquely yours. <br/><br/>
        Thank you for choosing Shopwise – where fashion meets affordability, and style is limitless.</span>
       </div>
        </div>
      </div>
    </div>
  )
}

export default About
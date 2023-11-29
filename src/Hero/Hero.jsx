import React from 'react'
import './Hero.css'
import main from '../Assets/Background/woman.png'






const Hero = () => { 
  return (  
   <div className="hero-container">
    <div className="hero-left">
      <h3>Find The Best</h3>
      <h1>Fashion Style For You</h1>
    </div>
    <div className="hero-right">
      <img src={main} alt="" />
    </div>
   </div>
  )
}

export default Hero

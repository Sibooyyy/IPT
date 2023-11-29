import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../ShopContext/ShopContext'



const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-right-price-new">₱{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aut optio quam minima corrupti amet quod nobis facere, nisi officia odit excepturi dolore ut deleniti. Praesentium autem odio nobis placeat!
            </div>
            <div className="productdisplay-right-size">
              
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className='productdisplay-right-category'><span>Category:</span> {product.category}</p>
        </div>
    </div>
  )
}

export default ProductDisplay
 import React from 'react'
 import cartIcon from './shopping-cart.svg'
 import { Link } from 'react-router-dom'
 import "./FloatingCart.css"
 import { useSelector } from 'react-redux'
 const FloatingCart = () => {
const shoppingCart  = useSelector(state=>state)

  let totalitem=0;
  for (const item of shoppingCart.cart){
    totalitem+= item.quantity
  }
   return (
    <Link to='/shoppingCart'>
      <div className=' floating-cart'>
        <p> Votre pannier</p>
        <div className='img-notif-container'>
          <img src={cartIcon} alt='cadi'/>
          <span className='notif'>{totalitem}</span>
        </div>
      </div>
    </Link>
    
   )
 }
 
 export default FloatingCart
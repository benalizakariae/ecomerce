import React from 'react'
import { useState,useEffect } from 'react'
import "./ShoppingCart.css"
import { useSelector,useDispatch } from 'react-redux'
const ShoppingCart = () => {
  const storeState=useSelector(state=>state)
  const dispatch= useDispatch()
  const handlechange=(event, id)=>{
    const indexitem= storeState.cart.findIndex(obj=>obj.id=== id)

    const objupdate={
      ...storeState.cart[indexitem], 
      quantity:Number(event.target.value)
    }
    dispatch ({
      type:"UPDATEITEM",
      payload: objupdate
    })

  }
  let totalprice=0;
  if(storeState.cart.lenght!==0 ){
    for (const item of storeState.cart){
      const itemprice=item.price*item.quantity
      totalprice+=itemprice
    }
  }
  return (
    <div className='global-container'>
      <p className='heading-cart'> Votre panier </p>
    <ul className=' cart-list'>
      {storeState.cart.map((item)=>(
       <li key={ item.id}>
        <img 
        src={process.env.PUBLIC_URL+`/images/${item.img}.png`}
        />
        <div className='bloc-cart-infos'>
          <h4>{item.title}</h4>
          <p> price: {item.price}$</p>
        </div>
        <div className='bloc-input'>
          <label htmlFor='quantityInput'>Quantity</label>
          <input
           onChange={e=> handlechange(e,item.id)}
          id="quantity"
          type="number"
          value={item.quantity} />
        
        </div>
        </li>
      ))}
      
        <p className='total-price'>total: {totalprice.toFixed(2)}$</p>
      <button className='btn-cart'>  proccder au payement</button>
    </ul>
    </div>
  );
}

export default ShoppingCart
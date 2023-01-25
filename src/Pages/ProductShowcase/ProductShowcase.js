import React,{useState,useEffect,useRef} from 'react'
import './ProductShowcase.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import inventory from '../../data/inventory';

const ProductShowcase = () => {
  const [nbMugs,setnbMugs]=useState(1);
  const {id}=useParams();
  const addingInfo=useRef();
  let timerInfo;
  let display= true;

  const updatenbMubgs= e=>{
    setnbMugs(Number(e.target.value));
  }
 
   const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g,'').trim()===id)
   const dispatch = useDispatch()
   const addtocart = e => { 
    e.preventDefault()
    const itemAdded = {
      ...inventory[productClicked],
      quantity: nbMugs
    }
    dispatch({
      type:"ADDITEM",
      payload: itemAdded
    })
    addingInfo.current.innerText = "ajouter au panier "
    if (display){
      display= false
      timerInfo=setTimeout( ()=> {
        addingInfo.current.innerText = "";
        display= true;
      },1500)
    }
  }
  useEffect(()=>{
    return ()=>{
      clearTimeout(timerInfo)
    }
  },[])
  
  return (
    <div className='showcase'>
        <div className=' container-img-showcase'>
          <img 
          className='img-showcase'
          src={process.env.PUBLIC_URL+`/images/${inventory[productClicked ].img}.png`}
          alt='image-produit' />
        </div>
        <div className='product-infos'>
        <h2>{inventory[productClicked].title}</h2>
        <p>{inventory[productClicked].price} $</p>
        <form onSubmit={addtocart}>
          <label htmlFor='quantity'> Quantité</label>
          <input
          type="number"
          id='quantity'
          value={nbMugs} 
          onChange={updatenbMubgs}
          />
          <button> ajouter au panier </button>
          <span 
          ref={addingInfo}
          className='adding-info'></span>
        </form>
        </div>
        
    </div>
  )
}

export default ProductShowcase
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='nav-top'>
      <Link to='/'>Acceuil</Link>
      <Link to='/contact'>CONTACT</Link>
      <Link to='/produits'>PRODUITS</Link>
    </nav>
  )
}

export default Navbar
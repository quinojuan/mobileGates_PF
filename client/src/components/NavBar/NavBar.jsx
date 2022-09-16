import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"


export default function NavBar() {
  return (
    <nav>
      <div>
        <h1 className='container-logo'>MóvilGates</h1>
        <a href="#" className='container-nav'>Home</a>
        <a href="#" className='container-nav'>Productos</a>
        <a href="#" className='container-nav'>Quienes somos?</a>
        <a href="#" className='container-nav'> 🛒</a>
        <a href="/home/login" className='container-nav'>Ingresá | Registrate</a>
      </div>
      <hr />
    </nav>
  )
}

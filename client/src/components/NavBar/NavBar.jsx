import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"


export default function NavBar() {
  return (
    <nav>
      <div>
        <h1 className='container-logo'>MóvilGates</h1>
        <a href="#" className='container-nav'>HOME</a>
        <a href="#" className='container-nav'>CATEGORIAS</a>
        <a href="#" className='container-nav'>QUIENES SOMOS?</a>
        <a href="#" className='container-nav'>CARRITO 🛒</a>
      </div>
      <hr />
    </nav>
  )
}

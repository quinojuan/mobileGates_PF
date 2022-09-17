import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useHistory } from 'react-router-dom';


export default function NavBar() {
  const history = useHistory()
  return (
    <nav>
      <div>
        <h1 className='container-logo'>MóvilGates</h1>
        <a href="#" className='container-nav'>HOME</a>
        <a href="#" className='container-nav'>CATEGORIAS</a>
        <a href="#" className='container-nav'>QUIENES SOMOS?</a>
        <a href="#" className='container-nav' onClick={()=> history.push("/products/Cart")}>CARRITO 🛒</a>
      </div>
      <hr />
    </nav>
  )
}

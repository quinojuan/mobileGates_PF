import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css"

export default function NavBar() {

  return (
    <footer>
      <div>
        <a href="#" className='container-foot'>Términos y Condiciones</a>
        <a href="#" className='container-foot'>Ayuda</a>
        <a href="/contacto" className='container-foot'>Contacto</a>
      </div>
        <a href="#" className='copy'>Copyright © 2022 MóvilGates</a>
      <hr />
    </footer>
  )
}
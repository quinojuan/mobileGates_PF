import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css"

export default function NavBar() {

  return (
    <footer class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a href="#" class="navbar-brand text-white">Términos y Condiciones</a>
        <a href="#" class="navbar-brand text-white">Ayuda</a>
        <a href="#" class="navbar-brand text-white">Contacto</a>
        <a href="#" class="navbar-brand text-white">Copyright © 2022 MóvilGates</a>
      </div>
        
    </footer>
  )
}
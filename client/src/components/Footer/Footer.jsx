import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css"

export default function NavBar() {

  return (
    <div class='container'>
      <footer class='py-3 my-4'>
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">Términos y Condiciones</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2 text-muted">Ayuda</a>
          </li>
        </ul>
        <p class="text-center text-muted">Copyright © 2022 MóvilGates</p>
    </footer>
    </div>
    // <footer>
    //   <div>
    //     <a href="#" className='container-foot'>Términos y Condiciones</a>
    //     <a href="#" className='container-foot'>Ayuda</a>
    //     <a href="/contacto" className='container-foot'>Contacto</a>
    //   </div>
    //     <a href="#" className='copy'>Copyright © 2022 MóvilGates</a>
    //   <hr />
    // </footer>
  )
}
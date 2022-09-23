import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css"

export default function NavBar() {

  return (
<footer className='row p-5 bg-dark mt-5 justify-content-around mx-0 position-relative fixed-bottom'>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
          <FontAwesomeIcon
            icon={['fas', 'phone-alt']}
            className='h2'
            style={{ color: 'DodgerBlue' }}
          />
        </div>
        <div className='text-light text-center'>
          <h5 className='text-uppercase font-weight-light'>
            Atención al cliente
          </h5>
          <p>0800-1234-0000</p>
          <p>consultas@movilgates.com</p>
        </div>
      </div>
      <div className='col-md-3 d-flex'>
        <div className='align-self-center m-3'>
          <FontAwesomeIcon
            icon={['fas', 'clock']}
            className='h2'
            style={{ color: 'DodgerBlue' }}
          />
        </div>
        <div className='text-light text-center'>
          <h5 className='text-uppercase font-weight-light'>
            Horarios de atención
          </h5>
          <p>Lunes a viernes de 9hs a 20hs</p>
          <p>Sábados de 10hs a 14hs</p>
        </div>
      </div>
      <div className='col-md-3 text-center'>
        <h5 className='text-uppercase font-weight-light text-light mb-3'>
        Términos y Condiciones
        </h5>
        <div className=''>
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            className='h2 mr-4'
            style={{ color: 'DodgerBlue' }}
          />
          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            className='h2 mr-4'
            style={{ color: 'DodgerBlue' }}
          />
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            className='h2'
            style={{ color: 'DodgerBlue' }}
          />
        </div>
      </div>
      <p class="text-center text-muted text-light">Copyright © 2022 MóvilGates</p>
      <hr/>
    </footer>



    // <div class='container'>
    //   <footer class='py-3 my-4'>
    //     <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    //       <li class="nav-item">
    //         <a href="#" class="nav-link px-2 text-muted">Términos y Condiciones</a>
    //       </li>
    //       <li class="nav-item">
    //         <a href="#" class="nav-link px-2 text-muted">Ayuda</a>
    //       </li>
    //     </ul>
    //     <p class="text-center text-muted">Copyright © 2022 MóvilGates</p>
    // </footer>
    // </div>
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
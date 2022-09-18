import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"


export default function NavBar() {
  // return (
  //   <nav>
  //     <div className='container'>
  //       <h1 className='container'>MóvilGates</h1>
  //       <a href="/home" className='container-nav'>Home</a>
  //       <a href="#" className='container-nav'>Productos</a>
  //       <a href="#" className='container-nav'>Quienes somos?</a>
  //       <a href="#" className='container-nav'> 🛒</a>
  //       <a href="/home/login" className='container-nav'>Ingresá | Registrate</a>
  //     </div>
  //     <hr />
  //   </nav>
  // )


return(
  <nav>
  <div  class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand text-white" >Móvil Gates</a>
    <h1 class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </h1>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white"  href="#">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="#">Quienes somos?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="#">🛒</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white" href="/home/login">Ingresá | Registrate</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</nav>
)

}

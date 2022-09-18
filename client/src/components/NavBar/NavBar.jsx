import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'


export default function NavBar() {

  // const {user, logout, loading} = useAuth()
  // const navigate = useNavigate()

  // const handleLogout = async () => {
  //   await logout()
  //   navigate('/home/')

  // }
  // if (loading) {
  //   return (
  //     <div><Loading/></div>
  //   )
  // } else if (user){
  //   return (
  //     <nav>
  //       <div>
  //         <h1 className='container-logo'>MóvilGates</h1>
  //         <a href="/home" className='container-nav'>Home</a>
  //         <a href="#" className='container-nav'>Productos</a>
  //         <a href="#" className='container-nav'>Quienes somos?</a>
  //         <a href="#" className='container-nav'> 🛒</a>
  //         <h3 className='container-nav'>Hola {user.email}</h3>
  //         <button className='container-nav' onClick={handleLogout}>Cerrar sesión</button>
  //       </div>
  //       <hr />
  //     </nav>
  //   )
  // } else{
  //   return (
  //     <nav>
  //       <div>
  //         <h1 className='container-logo'>MóvilGates</h1>
  //         <a href="/home" className='container-nav'>Home</a>
  //         <a href="#" className='container-nav'>Productos</a>
  //         <a href="#" className='container-nav'>Quienes somos?</a>
  //         <a href="/home/login" className='container-nav'>Ingresá | Registrate</a>
  //       </div>
  //       <hr />
  //     </nav>
  //   )
  // }


  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/home/')

  }
  if (loading) {
    return (
      <div><Loading /></div>
    )
  } else if (user) {
    return (
      <nav>
        <div class="navbar navbar-expand-lg bg-dark">
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
                  <a class="nav-link active text-white" href="#">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white" href="#">Quienes somos?</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white" href="#">🛒</a>
                </li>
                <li class="nav-item">
                  <h3 className='nav-link active text-white'>Hola {user.email}</h3>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white" href="#" onClick={handleLogout}>Cerrar sesión</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <div class="navbar navbar-expand-lg bg-dark">
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
                  <a class="nav-link active text-white" href="#">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white" href="#">Quienes somos?</a>
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



}

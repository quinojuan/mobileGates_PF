import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar() {

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
        <div className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" >Móvil Gates</a>
            <h1 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </h1>
            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
              {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
              <SearchBar/>
            </form>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Quienes somos?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#" onClick={()=> navigate("/products/Cart")}>Carrito 🛒</a>
                </li>
                <li className="nav-item">
                  <h3 className='nav-link active text-white'>Hola {user.email}</h3>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#" onClick={handleLogout}>Cerrar sesión</a>
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
        <div className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" >Móvil Gates</a>
            <h1 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </h1>
            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
              {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
              <SearchBar/>
            </form>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Quienes somos?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="/home/login">Ingresá | Registrate</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }



}

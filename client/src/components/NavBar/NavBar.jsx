import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import {handleReload} from '../Home/Home'
import {searchBar} from '../SearchBar/SearchBar'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {searchName, getProductsByNameAndFilters, setSearch} from "../../redux/Actions/index";
import Swal from "sweetalert2";




export default function NavBar({setCurrentPage, setProductsPerPages}) {

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
  //         <h1 classNameName='container-logo'>MóvilGates</h1>
  //         <a href="/home" classNameName='container-nav'>Home</a>
  //         <a href="#" classNameName='container-nav'>Productos</a>
  //         <a href="#" classNameName='container-nav'>Quienes somos?</a>
  //         <a href="#" classNameName='container-nav'> 🛒</a>
  //         <h3 classNameName='container-nav'>Hola {user.email}</h3>
  //         <button classNameName='container-nav' onClick={handleLogout}>Cerrar sesión</button>
  //       </div>
  //       <hr />
  //     </nav>
  //   )
  // } else{
  //   return (
  //     <nav>
  //       <div>
  //         <h1 classNameName='container-logo'>MóvilGates</h1>
  //         <a href="/home" classNameName='container-nav'>Home</a>
  //         <a href="#" classNameName='container-nav'>Productos</a>
  //         <a href="#" classNameName='container-nav'>Quienes somos?</a>
  //         <a href="/home/login" classNameName='container-nav'>Ingresá | Registrate</a>
  //       </div>
  //       <hr />
  //     </nav>
  //   )
  // }
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [name, setName] = useState("");
  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/home/')

    
  }
  function handleReload(e) {
    e.preventDefault();
    window.location.reload();
  }  
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name.length !== 0) {
      dispatch(getProductsByNameAndFilters(name.toLowerCase(), filters));
      dispatch(setSearch(name.toLowerCase()));
    } else {
      Swal.fire("Tienes que ingresar un producto a buscar");
    }
    setCurrentPage(1);
  }
  if (loading) {
    return (
      <div><Loading /></div>
    )
  } else if (user) {
    return (
      <nav className='container'>
        <div className="navbar fixed-top navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link class='navbar-brand text-white' onClick={(e) => handleReload(e)} >Móvil Gates</Link>
            <h1 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </h1>
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Buscar" aria-label="Search"  onChange={(e) => handleInputChange(e)}/>
              <button class='btn btn-dark text-white' type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
            </form>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Quienes somos?</a>
                </li> */}
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
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
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

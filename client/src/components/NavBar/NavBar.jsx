import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading'


export default function NavBar() {

  const {user, logout, loading} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/home/')
    
  }
  if (loading) {
    return (
      <div><Loading/></div>
    )
  } else if (user){
    return (
      <nav>
        <div>
          <h1 className='container-logo'>MóvilGates</h1>
          <a href="/home" className='container-nav'>Home</a>
          <a href="#" className='container-nav'>Productos</a>
          <a href="#" className='container-nav'>Quienes somos?</a>
          <a href="#" className='container-nav'> 🛒</a>
          <h3 className='container-nav'>Hola {user.email}</h3>
          <button className='container-nav' onClick={handleLogout}>Cerrar sesión</button>
        </div>
        <hr />
      </nav>
    )
  } else{
    return (
      <nav>
        <div>
          <h1 className='container-logo'>MóvilGates</h1>
          <a href="/home" className='container-nav'>Home</a>
          <a href="#" className='container-nav'>Productos</a>
          <a href="#" className='container-nav'>Quienes somos?</a>
          <a href="/home/login" className='container-nav'>Ingresá | Registrate</a>
        </div>
        <hr />
      </nav>
    )
  }

  
}

import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useAuth } from '../Context/authContext';
import { useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading'


export default function NavBar() {

  const {user, logout, loading} = useAuth()
  const history = useHistory()

  const handleLogout = async () => {
    await logout()
  }
  if (loading) {
    return (
      <div><Loading/></div>
    )
  } else {
    return (
      <nav>
        <div>
          <h1 className='container-logo'>MóvilGates</h1>
          <a href="/home" className='container-nav'>Home</a>
          <a href="#" className='container-nav'>Productos</a>
          <a href="#" className='container-nav'>Quienes somos?</a>
          <a href="#" className='container-nav'> 🛒</a>
          <a href="/home/login" className='container-nav'>Ingresá | Registrate</a>
          <h3>Hola {user.email}</h3>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
        <hr />
      </nav>
    )
  }

  
}

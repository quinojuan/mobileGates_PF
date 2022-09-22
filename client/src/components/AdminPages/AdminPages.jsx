import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


export default function AdminPages () {
  

  return (
    <div>
        <NavBar/>
        <button>PRODUCTOS</button>
        <button>CATEGORIAS</button>
        <button>USUARIOS</button>
        <button>INVENTARIO</button>
        <Footer/>
    </div>
  )
}
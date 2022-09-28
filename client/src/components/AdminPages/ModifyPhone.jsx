import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


export default function ModifyPhone() {


  return (
    <div>
      <NavBar />
      <div class="mt-3">
        <button type="button" class="btn btn-success">Modificar</button>
        <button type="button" class="btn btn-danger">Volver al Panel</button>
      </div>
      <Footer />
    </div>
  )
}
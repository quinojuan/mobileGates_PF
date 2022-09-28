import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import administrar from '../../images/administrar.png'

export default function AdminPages() {


  return (
    <div>
      <NavBar />
      <div class="container w-50 mt-5">
            <div class="d-grid gap-4 col-6 mx-auto h-20">
              <a href="/addphone" class="btn btn-success">Agregar un producto</a>
              <a href="/modifyphone" class="btn btn-danger">Modificar un producto</a>
              <a href="/manageuser" class="btn btn-dark">Administrar usuarios</a>
            </div>
      </div>
      <Footer />
    </div>
  )
}
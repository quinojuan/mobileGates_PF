import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import administrar from '../../images/administrar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


export default function AdminPages() {


  return (
    <div>
      <NavBar />
      <div className='row p-5 w-100 mt-5' style={{ minHeight: '350px' }}>
      <div className='col-md-3 text-center'>
        <h5>Telefono</h5>
        <hr />
        <div className='h1 mb-4'>
        <FontAwesomeIcon icon="fa-solid fa-mobile-retro" />
        </div>
        <Link to='/addphone'>
          <button type='button' className='btn btn-outline-info '>
            Agregar Telefono
          </button>
        </Link>
      </div>
      <div className='col-md-3 text-center'>
        <h5>Editar</h5>
        <hr />
        <div className='h1 mb-4'>
        <FontAwesomeIcon icon="fa-solid fa-square-pen" />
        </div>
        <Link to='/phonestable'>
          <button type='button' className='btn btn-outline-info '>
            Editar Telefono
          </button>
        </Link>
      </div>
      <div className='col-md-3 text-center'>
        <h5>Usuarios</h5>
        <hr />
        <div className='h1 mb-4'>
        <FontAwesomeIcon icon="fa-solid fa-user-pen" />
        </div>
        <Link to='/phonestable'>
          <button type='button' className='btn btn-outline-info '>
            Ver Usuarios
          </button>
        </Link>
      </div>
        {/* <div class="d-grid gap-4 col-6 mx-auto h-20">
          <a href="/addphone" class="btn btn-success mt-5">Agregar un producto</a>
          <a href="/phonestable" class="btn btn-danger">Modificar un producto</a>
          <a href="/manageuser" class="btn btn-dark">Administrar usuarios</a>
        </div> */}
      </div>
      <Footer/>
    </div>
  )
}
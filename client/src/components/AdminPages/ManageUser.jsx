import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


export default function ManageUser() {


  return (
    <div>
      <NavBar />
      <div class="mt-3">
        <button type="button" class="btn btn-success">Modificar</button>
        <button type="button" class="btn btn-danger">Volver al Panel</button>
        <button type="button" class="btn btn-danger">Eliminar usuario</button>
      </div>

      <Footer />
    </div>
  )
}
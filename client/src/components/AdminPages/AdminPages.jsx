import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import administrar from '../../images/administrar.png'
import { useEffect } from 'react'
import {getPurchase} from "../../redux/Actions"


export default function AdminPages() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPurchase())
  },[dispatch])

  return (
    <div>
      <NavBar />
      <div class="container w-50 mt-5">
        <div class="d-grid gap-4 col-6 mx-auto h-20">
          <a href="/addphone" class="btn btn-success">Agregar un producto</a>
          <a href="/phonestable" class="btn btn-danger">Modificar un producto</a>
          <a href="/manageuser" class="btn btn-dark">Administrar usuarios</a>
          <a href="/allpurchases" class="btn btn-dark">Todas las compras</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
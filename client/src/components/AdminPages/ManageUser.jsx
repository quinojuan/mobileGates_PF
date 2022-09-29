import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/Actions';


export default function ManageUser() {

  const handleModify = async () =>{

  };

  const handleDelete = async () =>{

  };



  return (
    <div>
      <NavBar />
      <div class="mt-3">
        <button type="button" class="btn btn-success">Modificar</button>
        <button type="button" class="btn btn-danger">Volver al Panel</button>
        <button type="button" class="btn btn-danger">Eliminar usuario</button>
        <button type="button" class="btn btn-danger">Deshabilitar usuario</button>
      </div>

      <Footer />
    </div>
  )
}
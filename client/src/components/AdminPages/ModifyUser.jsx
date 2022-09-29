import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { getAllUsers, updateUser} from "../../redux/Actions/index"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";


export default function ModifyUser() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.users)
  const { id } = useParams()

  let myPhone = products.filter((el) => el.id === id)
  console.log('ESTE ES MI ID', myPhone)

  const [input, setInput] = useState({
    active: myPhone[0].active,
    email: myPhone[0].email,
    password: myPhone[0].password,
    admin: myPhone[0].admin,
    superadmin: myPhone[0].superadmin
    
  })

  console.log('ESTE ES EL PRODUCTO QUE LLEGA',input)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  const handleChange = (e) => {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handlePanel() {
    navigate("/adminpages");
  }

  function handleSubmit(e) {
    dispatch(updateUser(id, input))
    Swal.fire("El usuario ha sido modificado con éxito!")
    console.log('ESTE ES EL USER MODIFICADO',input)
   
    navigate("/manageuser");
    document.location.reload();
}


  return (
    <div>
      <NavBar />
      <div class="container w-50 mt-3">
        <h1 class="mt-3">Modificar un usuario</h1>
        <form id="miForm">
          <div class="row mt-3">
           
          </div>
          <div class="row mt-3">

            <div class="col">
              <label for="formFile" class="form-label">Admin</label>
              <input type="text" name="model" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].model} aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Visible</label>
              <input type="text" name="operative_system" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].operative_system} aria-label="First name"></input>
            </div>
          </div>
         

        </form>
        <div class="mt-3">
          <button type="submit" class="btn btn-success" onClick={(e) => handleSubmit(e)}>Modificar</button>
          <button type="button" class="btn btn-danger" onClick={(e) => handlePanel(e)}>Volver al Panel</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
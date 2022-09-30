import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { getUsers, updateUser} from "../../redux/Actions/index"
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
    admin: myPhone[0].admin,
  })

  console.log('ESTE ES EL PRODUCTO QUE LLEGA',input)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  // var miCheckbox = document.getElementById('miElementoCheckbox');

  // ('El valor inicial del checkbox es ' + miCheckbox.checked);

  // miCheckbox.addEventListener('click', function() {
  //   if(miCheckbox.checked) {
  //     setInput({
  //       ...input,
  //       admin: true
  //     })
  //   } else {
  //     setInput({
  //       ...input,
  //       admin: false
  //     })
  //   }
  // });

  const handleChange = () => {
    if(input.admin === true){
        setInput({
          ...input,
          admin: false
        })
    } else{
        setInput({
          ...input,
          admin: true
        })
    } 
  }

  function handlePanel() {
    navigate("/manageuser");
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
              <input type="checkbox" name="admin" onChange={()=>handleChange()} class="form-control is-valid" placeholder={myPhone[0].model} id="checkboxid" aria-label="Last name"/>
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
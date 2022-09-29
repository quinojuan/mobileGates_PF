import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getAllUsers } from '../../redux/Actions';


export default function ManageUser() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users)
  const {id} = useParams()

  let myPhone = users.filter((el) => el.id === id)
  console.log('ESTE ES MI ID', myPhone)

  const [input, setInput] = useState({
   email: myPhone[0].email,
   active: myPhone[0].active,
   admin: myPhone[0].admin
  });

  console.log(input);

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])


  const handleChange = (e) => {

    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}

  function handleSelectProducts(e) {

    setInput({
      ...input,
      users: e.target.value.map(el => el.id)
    })
    console.log(input.users)
  }

  function handleSelectAdmin(e) {
    if (!input.admin.includes(e.target.value)) {
      setInput({
        ...input,
        users: [...input.admin, Boolean(e.target.value)]
      })
    }
  }

  function handleDeleteUsers(e) {
    setInput({
      ...input,
      users: input.email.filter(el => el !== e)
    })
  }

  
  function handlePanel() {
    navigate("/adminpages");
  }


  return (
    <div>
      <NavBar />
      <div class="container w-50 mt-3">
        <h1>Modificar un dispositivo</h1>
        <form id="miForm">
          <div class="row mt-3">
            {/* <div class="col">
              <label for="formFile" class="form-label" onChange={(e) => handleSelectProducts(e)}>Elegí el producto para editar</label>
              <select class="form-select" aria-label="Default select example">
                <option value="" hidden name="products">Todos los productos</option>
                {
                  products?.map(el => {
                    return (<option value={el} key={el}>{el.model}</option>)
                  })
                }
              </select>
            </div> */}
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Marca</label>
              <select class="form-select" onChange={(e) => handleSelectBrands(e)} aria-label="Default select example">
                <option value="" hidden name="brand">{myPhone[0].brand}</option>
                {
                  brand?.map(el => {
                    return (<option value={el} key={el}>{el}</option>)

                  })
                }
              </select>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Modelo</label>
              <input type="text" name="model" onChange={handleChange} class="form-control" placeholder={myPhone[0].model} aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Sistema Operativo</label>
              <input type="text" name="operative_system" onChange={handleChange} class="form-control" placeholder={myPhone[0].operative_system} aria-label="First name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="customRange3" class="form-label">Capacidad de almacenamiento</label>
              <select class="form-select" onChange={(e) => handleSelectCapacity(e)} aria-label="Default select example">
                <option value="" hidden name="capacity">{myPhone[0].capacity}</option>
                {
                  capacity?.map(el => {
                    return (<option value={el} key={el}>{el}</option>)


                  })
                }
              </select>
            </div>
            <div class="col">
              <label for="customRange3" class="form-label">Memoria RAM</label>
              <select class="form-select" onChange={(e) => handleSelectRAM(e)} aria-label="Default select example">
                <option value="" hidden name="ram">{myPhone[0].ram}</option>
                {
                  ram?.map(el => {
                    return (<option value={el} key={el}>{el}</option>)

                  })
                }
              </select>
            </div>
            <div class="col">
              <label for="customRange3" class="form-label">Tamaño de la pantalla</label>
              <input type="range" name="inches" onChange={handleChange} class="form-range" min="5.5" max="7" step="0.1" id="customRange3"></input>
              <label for="customRange3" class="form-label">{input.inches + ' pulgadas'}</label>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Procesador</label>
              <input type="text" name="cpu" onChange={handleChange} class="form-control" placeholder={myPhone[0].cpu} aria-label="First name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Tamaño</label>
              <input type="text" name="size" onChange={handleChange} class="form-control" placeholder={myPhone[0].size} aria-label="Last name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Cámara frontal</label>
              <input type="text" name="frontal_camera" onChange={handleChange} class="form-control" placeholder={myPhone[0].frontal_camera} aria-label="First name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Cámara trasera</label>
              <input type="text" name="main_camera" onChange={handleChange} class="form-control" placeholder={myPhone[0].main_camera} aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Peso</label>
              <input type="text" name="weight" onChange={handleChange} class="form-control" placeholder={myPhone[0].weight} aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Bateria</label>
              <input type="text" name="battery" onChange={handleChange} class="form-control" placeholder={myPhone[0].battery} aria-label="Last name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Imagen principal</label>
              <input type="text" name="image" onChange={handleChange} class="form-control" placeholder={myPhone[0].image} id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="input-group mb-3">
                <input type="text" name="price" class="form-control" placeholder={myPhone[0].price} aria-label="Recipient's username" aria-describedby="button-addon2"></input>

                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Añadir precio</button>
              </div>
            </div>
            <div class="col">

            </div>
          </div>
          <div class="row mt-1">
            <div class="col">
              <label for="exampleFormControlTextarea1" class="form-label">Añade una descripción</label>
              <input class="form-control" placeholder={myPhone[0].description} id="exampleFormControlTextarea1" name="description" onChange={handleChange} rows="3"></input>
            </div>
          </div>

        </form>
        <button type="button" class="btn btn-success">Modificar</button>
        <button type="button" class="btn btn-danger" onClick={(e) => handlePanel(e)}>Volver al Panel</button>
      </div>
      <Footer />
    </div>
  )



 
}
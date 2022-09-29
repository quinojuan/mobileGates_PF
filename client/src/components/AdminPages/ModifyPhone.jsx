import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { getAllProducts, getCapacity, getRams, getCategories, putPhone } from "../../redux/Actions/index"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";


export default function ModifyPhone() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products)
  const capacity = useSelector((state) => state.capacities)
  const ram = useSelector((state) => state.rams)
  const brand = useSelector((state) => state.categories)
  const { id } = useParams()

  let myPhone = products.filter((el) => el.id === id)
  console.log('ESTE ES MI ID', myPhone)

  const [input, setInput] = useState({
    model: myPhone[0].model,
    brand: myPhone[0].brand,
    operative_system: myPhone[0].operative_system,
    size: myPhone[0].size,
    cpu: myPhone[0].cpu,
    image: myPhone[0].image,
    description: myPhone[0].description,
    inches: myPhone[0].inches,
    main_camera: myPhone[0].main_camera,
    frontal_camera: myPhone[0].frontal_camera,
    weight: myPhone[0].weight,
    battery: myPhone[0].battery,
    ram: myPhone[0].ram,
    capacity: myPhone[0].capacity,
    price: myPhone[0].price
  })

  console.log('ESTE ES EL PRODUCTO QUE LLEGA',input)

  useEffect(() => {
    dispatch(getAllProducts(), getCapacity(), getRams(), getCategories())
  }, [dispatch])

  const handleChange = (e) => {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSelectCapacity(e) {
    if (!input.capacity.includes(e.target.value)) {
      setInput({
        ...input,
        capacity: [...input.capacity, (e.target.value)]
      })
    }
  }


  function handleSelectRAM(e) {
    if (!input.ram.includes(e.target.value)) {
      setInput({
        ...input,
        ram: [...input.ram, Number(e.target.value)]
      })
    }
  }

  function handleSelectBrands(e) {
    if (!input.brand.includes(e.target.value)) {
      setInput({
        ...input,
        brand: e.target.value
      })
    }
  }

  function handlePanel() {
    navigate("/adminpages");
  }

  function handleSubmit(e) {
    input.price = [parseInt(input.price)]
    dispatch(putPhone(id, input))
    Swal.fire("El dispositivo ha sido modificado con éxito!")
    console.log('ESTE ES EL PROD MODIFICADO',input)
    // setInput({
    //   model: myPhone[0].model,
    //   brand: myPhone[0].brand,
    //   operative_system: myPhone[0].operative_system,
    //   size: myPhone[0].size,
    //   cpu: myPhone[0].cpu,
    //   image: myPhone[0].image,
    //   description: myPhone[0].description,
    //   inches: myPhone[0].inches,
    //   main_camera: myPhone[0].main_camera,
    //   frontal_camera: myPhone[0].frontal_camera,
    //   weight: myPhone[0].weight,
    //   battery: myPhone[0].battery,
    //   ram: myPhone[0].ram,
    //   capacity: myPhone[0].capacity,
    //   price: myPhone[0].price
    // })
    navigate("/phonestable");
    document.location.reload();
}


  return (
    <div>
      <NavBar />
      <div class="container w-50 mt-3">
        <h1 class="mt-3">Modificar un dispositivo</h1>
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
              <select class="form-select is-valid" onChange={(e) => handleSelectBrands(e)} aria-label="Default select example">
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
              <input type="text" name="model" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].model} aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Sistema Operativo</label>
              <input type="text" name="operative_system" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].operative_system} aria-label="First name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="customRange3" class="form-label">Capacidad de almacenamiento</label>
              <select class="form-select is-valid" onChange={(e) => handleSelectCapacity(e)} aria-label="Default select example">
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
              <select class="form-select is-valid" onChange={(e) => handleSelectRAM(e)} aria-label="Default select example">
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
              <input type="text" name="cpu" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].cpu} aria-label="First name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Tamaño</label>
              <input type="text" name="size" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].size} aria-label="Last name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Cámara frontal</label>
              <input type="text" name="frontal_camera" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].frontal_camera} aria-label="First name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Cámara trasera</label>
              <input type="text" name="main_camera" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].main_camera} aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Peso</label>
              <input type="text" name="weight" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].weight} aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Bateria</label>
              <input type="text" name="battery" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].battery} aria-label="Last name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Imagen principal</label>
              <img src={myPhone[0].image} alt="" class="w-50"/>
              <input type="text" name="image" onChange={handleChange} class="form-control is-valid" placeholder={myPhone[0].image} id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="input-group mb-3">
                <input type="text" name="price" class="form-control is-valid" placeholder={myPhone[0].price} aria-label="Recipient's username" aria-describedby="button-addon2"></input>
              </div>
            </div>
            <div class="col">

            </div>
          </div>
          <div class="row mt-1">
            <div class="col">
              <label for="exampleFormControlTextarea1" class="form-label">Añade una descripción</label>
              <input class="form-control is-valid" placeholder={myPhone[0].description} id="exampleFormControlTextarea1" name="description" onChange={handleChange} rows="3"></input>
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
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { getAllProducts, getCapacity, getRams, getCategories } from "../../redux/Actions/index"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";


export default function ModifyPhone() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products)
  const capacity = useSelector((state) => state.capacities)
  const ram = useSelector((state) => state.rams)
  const brand = useSelector((state) => state.categories)

  const [input, setInput] = useState({
    model: "",
    brand: "",
    operative_system: "",
    size: "",
    cpu: "",
    image: "",
    description: "",
    inches: 0,
    main_camera: 0,
    frontal_camera: 0,
    weight: 0,
    battery: 0,
    ram: [],
    capacity: [],
    price: []
  })

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCapacity())
  }, [dispatch])

  useEffect(() => {
    dispatch(getRams())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  function handleChange(e) {
    if (isNaN(e.target.value)) {
      setInput({
        ...input,
        [(e.target.name)]: (e.target.value)
      })
    } else {
      setInput({
        ...input,
        [(e.target.name)]: Number(e.target.value)
      })
    }
  }

  function handleSelectProducts(e) {
    if (!input.products.includes(e.target.value)) {
      setInput({
        ...input,
        products: [...input.products, Number(e.target.value)]
      })
    }
  }

  function handleSelectCapacity(e) {
    if (!input.capacity.includes(e.target.value)) {
      setInput({
        ...input,
        capacity: [...input.capacity, Number(e.target.value)]
      })
    }
  }

  function handleDeleteCapacity(e) {
    setInput({
      ...input,
      capacity: input.capacity.filter(el => el !== e)
    })
  }

  function handleSelectRAM(e) {
    if (!input.ram.includes(e.target.value)) {
      setInput({
        ...input,
        ram: [...input.ram, Number(e.target.value)]
      })
    }
  }

  function handleDeleteRAM(e) {
    setInput({
      ...input,
      ram: input.ram.filter(el => el !== e)
    })
  }

  function handleSelectBrands(e) {
    if (!input.brand.includes(e.target.value)) {
      setInput({
        ...input,
        brand: e.target.value
      })
    }
  }


  return (
    <div>
      <NavBar />
      <div class="container w-50 mt-3">
        <h1>Modificar un dispositivo</h1>
        <form id="miForm">
        <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label" onChange={(e) => handleSelectProducts(e)}>Elegí el producto para editar</label>
              <select class="form-select" aria-label="Default select example"></select>
              {/* <option value="" hidden name="products">Todos los productos</option>
                {
                  products?.map(el => {
                    return (<option value={el} key={el}>{el}</option>)


                  })
                } */}
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Marca</label>
              <select class="form-select" onChange={(e) => handleSelectBrands(e)} aria-label="Default select example">
                <option value="" hidden name="brand">Elegí la marca</option>
                {
                  brand?.map(el => {
                    return (<option value={el} key={el}>{el}</option>)

                  })
                }
              </select>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Modelo</label>
              <input type="text" name="model" onChange={handleChange} class="form-control" placeholder="Por ejemplo: S22 Ultra" aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Sistema Operativo</label>
              <input type="text" name="operative_system" onChange={handleChange} class="form-control" placeholder="Por ejemplo: Android 10" aria-label="First name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="customRange3" class="form-label">Capacidad de almacenamiento</label>
              <select class="form-select" onChange={(e) => handleSelectCapacity(e)} aria-label="Default select example">
                <option value="" hidden name="capacity">Elegí la capacidad</option>
                {
                  capacity?.map(el => {
                    return (<option value={el} key={el}>{el}</option>)


                  })
                }
              </select>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  {
                    input.capacity.map(el =>
                      <div class='mt-1'>
                        <span class="badge text-bg-dark">
                          {capacity?.find(p => p === el)}
                          <h6>{el}
                            <button type="button" onClick={() => handleDeleteCapacity(el)} class="btn-close btn-close-white" aria-label="Close"></button>
                          </h6>
                        </span>
                      </div>
                    )
                  }
                </li>
              </ul>
            </div>
            <div class="col">
              <label for="customRange3" class="form-label">Memoria RAM</label>
              <select class="form-select" onChange={(e) => handleSelectRAM(e)} aria-label="Default select example">
                <option value="" hidden name="ram">Elegí la memoria</option>
                {
                  ram?.map(el => {
                    return (<option value={el} key={el}>{el}</option>)

                  })
                }
              </select>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  {
                    input.ram.map(el =>
                      <div class='mt-1'>
                        <span class="badge text-bg-dark">
                          {ram?.find(p => p === el)}
                          <h6>
                            {el}
                            <button type="button" onClick={() => handleDeleteRAM(el)} class="btn-close btn-close-white" aria-label="Close"></button>
                          </h6>
                        </span>
                      </div>
                    )
                  }
                </li>
              </ul>
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
              <input type="text" name="cpu" onChange={handleChange} class="form-control" placeholder="Por ejemplo: Exynos 2200" aria-label="First name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Tamaño</label>
              <input type="text" name="size" onChange={handleChange} class="form-control" placeholder="Por ejemplo: 12.38 x 5.86 x 0.76 cm" aria-label="Last name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Cámara frontal</label>
              <input type="text" name="frontal_camera" onChange={handleChange} class="form-control" placeholder="Por ejemplo: 32" aria-label="First name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Cámara trasera</label>
              <input type="text" name="main_camera" onChange={handleChange} class="form-control" placeholder="Por ejemplo: 10" aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Peso</label>
              <input type="text" name="weight" onChange={handleChange} class="form-control" placeholder="Por ejemplo: 175" aria-label="Last name"></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">Bateria</label>
              <input type="text" name="battery" onChange={handleChange} class="form-control" placeholder="Por ejemplo: 4500" aria-label="Last name"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">Imagen principal</label>
              <input type="text" name="image" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="input-group mb-3">
                <input type="text" name="price" class="form-control" placeholder="Por ejemplo: 250000" aria-label="Recipient's username" aria-describedby="button-addon2"></input>

                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Añadir precio</button>
              </div>
            </div>
            <div class="col">

            </div>
          </div>
          <div class="row mt-1">
            <div class="col">
              <label for="exampleFormControlTextarea1" class="form-label">Añade una descripción</label>
              <input class="form-control" id="exampleFormControlTextarea1" name="description" onChange={handleChange} rows="3"></input>
            </div>
          </div>

        </form>
        <button type="button" class="btn btn-success">Modificar</button>
        <button type="button" class="btn btn-danger">Volver al Panel</button>
      </div>
      <Footer />
    </div>
  )
}
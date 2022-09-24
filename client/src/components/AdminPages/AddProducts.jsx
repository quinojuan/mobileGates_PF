import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { postPhone, getCapacity, getRams } from "../../redux/Actions/index"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

export default function AddProducts() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const capacity = useSelector((state) => state.capacities)
    const ram = useSelector((state) => state.rams)

    const [input, setInput] = useState({
        model: "",
        brand: "",
        operative_system: "",
        size: "",
        cpu: "",
        image: "",
        desciption: "",
        inches: 0,
        main_camera: 0,
        frontal_camera: 0,
        weight: 0,
        battery: 0,
        ram: [],
        colors: [],
        capacity: [],
        price: []
    })


    useEffect(() => {
        dispatch(getCapacity())
    }, [dispatch])

    useEffect(() => {
        dispatch(getRams())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSelectCapacity(e) {
        if(!input.capacity.includes(e.target.value)){
            setInput({
                ...input,
                capacity: [...input.capacity, e.target.value]
            })
        }
    }

    let handleDeleteCapacity = (e) => {
        setInput({
            ...input,
            capacity: input.capacity.filter(el => el !== e)
        })
    }

    function handleSelectRAM(e) {
        if(!input.ram.includes(e.target.value)){
            setInput({
                ...input,
                ram: [...input.ram, e.target.value]
            })
        }
    }

    let handleDeleteRAM = (e) => {
        setInput({
            ...input,
            ram: input.ram.filter(el => el !== e)
        })
    }

    function handleSubmit(e) {

        dispatch(postPhone(input))
        Swal.fire("El dispositivo ha sido añadido con éxito!")
        setInput({
            model: "",
            brand: "",
            operative_system: "",
            size: "",
            cpu: "",
            image: "",
            desciption: "",
            inches: 0,
            main_camera: 0,
            frontal_camera: 0,
            weight: 0,
            battery: 0,
            ram: [],
            colors: [],
            capacity: [],
            price: []
        })
        navigate("/home");
        document.location.reload();
    }

    return (
        <div>
            <NavBar />
            <div class="container w-50 mt-3">
                <h1>Agregar un dispositivo</h1>
                <form id="miForm" onSubmit={(e) => handleSubmit(e)}>
                    <div class="row mt-3">
                        <div class="col">
                            <label for="formFile" class="form-label">Marca</label>
                            <input type="text" name="brand" onChange={handleChange} class="form-control" placeholder="Por ejemplo: Samsung" aria-label="First name"></input>
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
                                {/* <option value="32" name="capacity">32GB</option>
                                <option value="64" name="capacity">64GB</option>
                                <option value="128" name="capacity">128GB</option>
                                <option value="256" name="capacity">256GB</option>
                                <option value="512" name="capacity">512GB</option>
                                <option value="1" name="capacity">1TB</option> */}
                                <option value="" hidden name="capacity"></option>
                                {
                                    capacity?.map(el => {
                                        return (<option value={el.name} key={el.id}>{el.name}</option>)
                                        
                                    })
                                }
                            </select>
                            <ul>
                                <li>
                                    {
                                        input.capacity.map(el =>
                                            <div>
                                                <h5>
                                                    {capacity?.find(p => p.name === el)?.name}
                                                    <button onClick={() => handleDeleteCapacity(el)}>x</button>
                                                </h5>
                                            </div>
                                        )
                                    }
                                </li>
                            </ul>
                        </div>
                        <div class="col">
                            <label for="customRange3" class="form-label">Memoria RAM</label>
                            <select class="form-select" onChange={(e) => handleSelectRAM(e)} aria-label="Default select example">
                                {/* <option value="3" name="ram">3GB</option>
                                <option value="4" name="ram">4GB</option>
                                <option value="6" name="ram">6GB</option>
                                <option value="8" name="ram">8GB</option>
                                <option value="12" name="ram">12GB</option> */}
                                <option value="" hidden name="ram"></option>
                                {
                                    ram?.map(el => {
                                        return (<option value={el.name} key={el.id}>{el.name}</option>)
                                        
                                    })
                                }
                            </select>
                            <ul>
                                <li>
                                    {
                                        input.ram.map(el =>
                                            <div>
                                                <h5>
                                                    {ram?.find(p => p.name === el)?.name}
                                                    <button onClick={() => handleDeleteRAM(el)}>x</button>
                                                </h5>
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
                        <label for="formFile" class="form-label">Imagenes adicionales</label>
                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>

                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>

                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>

                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <div class="input-group mb-3">
                                <input type="text" name="price" onChange={handleChange} class="form-control" placeholder="Por ejemplo: 250000" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
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
                    <div class="mt-3">
                        <button type="button" class="btn btn-success">Añadir dispositivo</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUsers } from '../../redux/Actions/index'
import { useHistory } from 'react-router-dom';
import './CreateUser.css'

export default function CreateUser() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
         
        dispatch(postUsers(input))
        alert("El usuario ha sido creado con éxito!")
        setInput({
            name: "",
            email: "",
            password: ""
        })
        console.log(input.email)
        // history.push("/home");
        // document.location.reload();
    }
 
    return(
        <div className="login">
            <form className="form" >
                <h1>Registrate gratis</h1>
                <label>Nombre completo</label>
                <input type="text" name="name" placeholder="Ingresa tu nombre completo" />
                <label>Email</label>
                <input type="text" placeholder="Ingresa tu mail" />
                <label>Contraseña</label>
                <input type="text" placeholder="Ingresa tu contraseña" />
                <button id='submit' type='submit' onClick={(e) => handleSubmit(e)}>Registrate</button>
            </form>
        </div>
    )
}
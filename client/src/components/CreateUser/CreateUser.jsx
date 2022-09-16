import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUsers } from '../../redux/Actions/index'
import { useHistory } from 'react-router-dom';
import './CreateUser.css'

export default function CreateUser() {
    
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit() {
    //      if(!input.name){
    //         return alert("Debe ingresar un nombre")
    //     } 
    //     else if(!input.email){
    //         return alert("Debe ingresar un mail")
    //     }
    //     else if (input.password) {
    //         dispatch(postUsers({ ...input }))
    //         return alert("Usuario creado con éxito")
    //     } else {
    //         return alert("Debe ingresar una contraseña")
    //     }
    // }
        dispatch(postUsers(input))
        alert("El usuario ha sido creado con éxito!")
        setInput({
            name: "",
            email: "",
            password: ""
        })
        console.log(input.email)
        history.push("/home");
        document.location.reload();
    }
 
    return(
        <div className="login">
            <form className="form" >
                <h1>Registrate gratis</h1>
                <label>Nombre completo</label>
                <input type="text" name = 'name' value={input.name} placeholder="Ingresa tu nombre completo" onChange={(e) => handleChange(e)}/>
                <label>Email</label>
                <input type="text" name = 'email' value={input.email} placeholder="Ingresa tu mail" onChange={(e) => handleChange(e)}/>
                <label>Contraseña</label>
                <input type="text" name = 'password' value={input.password} placeholder="Ingresa tu contraseña" onChange={(e) => handleChange(e)}/>
                <button id='submit' type='submit' onClick={(e) => handleSubmit(e)}>Registrate</button>
            </form>
        </div>
    )
}
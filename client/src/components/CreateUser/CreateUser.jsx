import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUsers } from '../../redux/Actions/index'
import { useHistory } from 'react-router-dom';
import './CreateUser.css'

export default function CreateUser() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    function validate(input){
        
        let errors = {};
        if (!input.name){
            errors.name = 'Se requiere un Nombre';
        }if(!input.email){
            errors.email = 'Ingrese un email valido';
        }if(!input.password){
            errors.password = 'Ingrese la contraseña'
        }    
       
        return errors
    };

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
             [e.target.name] : e.target.value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
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
                <input type="text" name="name" value={input.name} placeholder="Ingresa tu nombre completo" onChange={handleChange} />
                {errors.name && (<p>{errors.name}</p>)}
                <label>Email</label>
                <input type="text" name="email" value={input.email} placeholder="Ingresa tu mail" onChange={handleChange} />
                {errors.email && (<p>{errors.email}</p>)}
                <label>Contraseña</label>
                <input type="text" name="password" value={input.password} placeholder="Ingresa tu contraseña" onChange={handleChange} />
                {errors.password && (<p>{errors.password}</p>)}
                <button id='submit' type='submit' onClick={(e) => handleSubmit(e)}>Registrate</button>
            </form>
        </div>
    )
}
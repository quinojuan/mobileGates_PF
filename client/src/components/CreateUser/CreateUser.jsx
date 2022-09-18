import React, { useState } from "react";
import { useAuth } from "../Context/authContext"; 
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function CreateUser() {
 
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const {signup} = useAuth();
   
    const navigate = useNavigate()

    const [error, setError] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
    try{
        await signup(user.email, user.password)
        Swal.fire("Registro exitoso!");
        navigate("/home");
    }catch(error){
        // setError(error.message)
        console.log(error.code)
        if(error.code === "auth/internal-error"){
            //setError('El mail ingresado no es válido')
            Swal.fire("El mail ingresado no es válido");
        } else if(error.code === 'auth/wrong-password'){
            //setError('Contraseña incorrecta')
            Swal.fire("Contraseña incorrecta");
        } else if(error.code === 'auth/weak-password'){
            //setError('La contraseña debe tener más de 6 caracteres')
            Swal.fire("La contraseña debe tener más de 6 caracteres");
        }
    }
    }
    return(
        <div className="login">

        {error && <p>{error}</p>}

            <form className="form" onSubmit={handleSubmit} >
                <h1>Registrate gratis</h1>
                <label>Email</label>
                <input type="text" name = 'email' placeholder="Ingresa tu mail" onChange={handleChange}/>
                <label>Contraseña</label>
                <input type="password" name = 'password'  placeholder="******" onChange={handleChange}/>
                <button id='submit' type='submit'>Registrate</button>
            </form>
        </div>
    )
}
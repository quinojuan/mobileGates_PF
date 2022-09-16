import React, { useState } from "react";
import { useAuth } from "../Context/authContext"; 
import { useHistory } from 'react-router-dom';


export default function CreateUser() {
 
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const {signup} = useAuth();
   
    const history = useHistory();

    const [error, setError] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
    try{
        await signup(user.email, user.password)
        // history.push("/home");
    }catch(error){
        setError(error.message)
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
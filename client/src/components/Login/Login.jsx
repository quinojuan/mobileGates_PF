// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import './Login.css'

// export default function Login() {
//     const dispatch = useDispatch();

//     return(
//         <div className="login">
//             <form className="form">
//                 <h1>Iniciá sesión</h1>
//                 <label>Usuario</label>
//                 <input type="text" placeholder="Ingresa tu mail o tu nombre de usuario" />
//                 <label>Contraseña</label>
//                 <input type="password" placeholder="Ingresa tu contraseña" />
//                 <button>Entrar</button>
//                 <a href="/home/createuser">No tenes cuenta? Registrate gratis</a>
//                 <a href="#">Olvidaste tu contraseña?</a>
//             </form>
//         </div>
//     )
// }


import React, { useState } from "react";
import { useAuth } from "../Context/authContext"; 
import { useHistory } from 'react-router-dom';
import './Login.css'

export default function Login() {
 
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const {login} = useAuth();
   
    const history = useHistory();

    const [error, setError] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
    try{
        await login(user.email, user.password)
        // history('/home/')
    }catch(error){
        setError(error.message)
    }
    }
    return(
        <div className="login">

        {error && <p>{error}</p>}

            <form className="form" onSubmit={handleSubmit} >
                <h1>Iniciá sesión</h1>
                <label>Email</label>
                <input type="text" name = 'email' placeholder="Ingresa tu mail" onChange={handleChange}/>
                <label>Contraseña</label>
                <input type="password" name = 'password'  placeholder="******" onChange={handleChange}/>
                <button id='submit' type='submit'>Login</button>
                <a href="/home/createuser">No tenes cuenta? Registrate gratis</a>
            </form>
        </div>
    )
}
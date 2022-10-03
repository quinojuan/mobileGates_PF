import React, { useState } from "react";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import {addUser} from "../../redux/Actions/index"
import { useDispatch } from "react-redux";

export default function CreateUser() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    
    const dispatch = useDispatch()

    const { signup } = useAuth();

    const navigate = useNavigate()

    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setError('')
            await signup(user.email, user.password)
            //console.log()
            dispatch(addUser(user))
            Swal.fire("Registro exitoso!");
            navigate("/home");
        } catch (error) {
            // setError(error.message)
            console.log(error.code)
            if (error.code === "auth/internal-error") {
                //setError('El mail ingresado no es válido')
                Swal.fire("El mail ingresado no es válido");
            } else if (error.code === 'auth/wrong-password') {
                //setError('Contraseña incorrecta')
                Swal.fire("Contraseña incorrecta");
            } else if (error.code === 'auth/weak-password') {
                //setError('La contraseña debe tener más de 6 caracteres')
                Swal.fire("La contraseña debe tener más de 6 caracteres");
            } else if(error.code === 'auth/email-already-in-use'){
                Swal.fire("El mail ingresado ya está en uso");
            }
        }
    }
   
    return (
        <div> 

            {error && <p>{error}</p>}
            <NavBar />
            <div class='container'>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className='col border border-5'>
                        <form onSubmit={handleSubmit} >
                            <h1 class='fw-bold text-center py-5'>Registrate gratis</h1>
                            <div className="container w-100 mb-4">
                                <label class="col-sm-2 col-form-label">Email</label>
                                <input type="text" name='email' placeholder="Ingresa tu mail" onChange={handleChange} class='form-control' />

                                <label class="col-sm-2 col-form-label">Contraseña</label>
                                <input type="password" name='password' placeholder="******" onChange={handleChange} class="form-control" />
                            </div>
                            <button id='submit' type='submit' class="btn btn-primary">Registrate</button>
                            <div class='my-3'>
                                <a href="/home" class="btn btn-primary">Volver al inicio</a>
                            </div>
                        </form>
                    </div>
                    <div className="col">

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
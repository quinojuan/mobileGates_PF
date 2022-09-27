import React, { useState } from "react";
import { useAuth } from "../Context/authContext";
// import './Login.css'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css'
import google from '../../images/google.png'
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { login, loginWithGoogle, resetPassword } = useAuth();

    const navigate = useNavigate()

    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            navigate('/home/')
            Swal.fire("Inicio exitoso");
        } catch (error) {
            // setError(error.message)
            console.log(error.code)
            if (error.code === "auth/invalid-email") {
                //setError('Correo inválido')
                Swal.fire("Correo inválido");
            } else if (error.code === 'auth/wrong-password') {
                //setError('Contraseña incorrecta')
                Swal.fire("Contraseña incorrecta");
            } else if(error.code === 'auth/user-disabled'){
                Swal.fire("Esta cuenta se encuentra inhabilitada para este sitio")
            }
        }
    }

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/home");
            Swal.fire("Inicio exitoso");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return Swal.fire("Ingrese un mail para cambiar la contraseña"); //setError("Ingrese un mail para cambiar la contraseña");
        try {
            await resetPassword(user.email);
            //setError('Te enviamos un email con un enlace para que resetees tu contraseña')
            Swal.fire('Te enviamos un email con un enlace para que resetees tu contraseña')
        } catch (error) {
            //setError(error.message);
            if (error.code === "auth/invalid-email") {
                //setError('Correo inválido')
                Swal.fire("Correo inválido");
            }
        }
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <NavBar/>
            <div class='container'>
                <div className="row">
                    <div className="col">

                    </div>

                    <div className="col  border border-5">
                        <form onSubmit={handleSubmit} >
                            <h1 class='fw-bold text-center py-5'>Iniciá sesión</h1>

                            <div className="container w-100 mb-4">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <input type="text" name='email' placeholder="Ingresa tu mail" onChange={handleChange} class="form-control" />
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Contraseña</label>
                                <input type="password" name='password' placeholder="******" onChange={handleChange} class="form-control" />
                            </div>
                                </form>
                            <div class='d-grid container w-100'>
                                <button id='submit' type='submit' class="btn btn-primary">Ingresar</button>
                                <button class="btn btn-light" onClick={handleGoogleSignin}>
                                    <img src={google} alt="image not found" width='32' />
                                    Continuar con Google
                                </button>
                            </div>
                            <div class='my-3'>
                                {/* <a href="/home/createuser" class="btn btn-secondary">No tenes cuenta? Registrate gratis</a>
        <a href="#" onClick={handleResetPassword} class="btn btn-secondary">Olvidaste tu contraseña?</a> */}
                                <span>No tenes cuenta? <a href="/home/createuser">Registrate gratis</a></span><br />
                                <span><a href="#" onClick={handleResetPassword}>Olvidaste la contraseña?</a></span>
                            </div>
                            <div>
                                <a href="/home" class="btn btn-primary">Volver al inicio</a>
                            </div>
                    </div>
                    <div className="col">

                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
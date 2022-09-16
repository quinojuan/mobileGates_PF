import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Login.css'

export default function Login() {
    const dispatch = useDispatch();
 

    return(
        <div className="login">
            <form className="form">
                <h1>Iniciá sesión</h1>
                <label>Usuario</label>
                <input type="text" placeholder="Ingresa tu mail o tu nombre de usuario" />
                <label>Contraseña</label>
                <input type="text" placeholder="Ingresa tu contraseña" />
                <button>Entrar</button>
                <a href="/home/createuser">No tenes cuenta? Registrate gratis</a>
                <a href="#">Olvidaste tu contraseña?</a>
            </form>
        </div>
    )
}
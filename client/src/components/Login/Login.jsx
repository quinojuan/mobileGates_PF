import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/authContext";
// import './Login.css'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import google from "../../images/google.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { addUser } from "../../redux/Actions";
import { useDispatch } from "react-redux";

export default function Login() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError("");
      await login(newUser.email, newUser.password);
      dispatch(addUser(newUser));
      navigate("/home/");
      Swal.fire("Inicio exitoso");
    } catch (error) {
      // setError(error.message)
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        //setError('Correo inválido')
        Swal.fire("Correo inválido");
      } else if (error.code === "auth/wrong-password") {
        //setError('Contraseña incorrecta')
        Swal.fire("Contraseña incorrecta");
      } else if (error.code === "auth/user-disabled") {
        Swal.fire("Esta cuenta se encuentra inhabilitada para este sitio");
      }
    }
  };

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
    if (!newUser.email)
      return Swal.fire("Ingrese un mail para cambiar la contraseña"); //setError("Ingrese un mail para cambiar la contraseña");
    try {
      await resetPassword(newUser.email);
      //setError('Te enviamos un email con un enlace para que resetees tu contraseña')
      Swal.fire(
        "Te enviamos un email con un enlace para que resetees tu contraseña"
      );
    } catch (error) {
      //setError(error.message);
      if (error.code === "auth/invalid-email") {
        //setError('Correo inválido')
        Swal.fire("Correo inválido");
      }
    }
  };

  // useEffect(()=>{
  //     dispatch(addUser(user))
  //   },[dispatch])

  return (
    <div>
     
    </div>
  );
}

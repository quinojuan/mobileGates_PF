import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getPurchase, getUsers } from "../../redux/Actions";
import { useAuth } from '../Context/authContext';

export default function UserPurchases(){
    const dispatch=useDispatch()
    const purchases=useSelector((state)=>state.purchases)
    const logged=useSelector((state)=>state.loggedUser)
    console.log(purchases, "COMPRITAS BIEN PERRAZAS")
    console.log(logged, "USUARIOS BIEN PERRAZOS")
    const userLogin = purchases&&purchases.filter(s=>s.email === logged.email)
    useEffect(()=>{
        dispatch(getUsers());
        dispatch(getPurchase())
    }, [])
    return (
        <div>
        <h1>userPurchases</h1>
        {console.log("logged:",logged)}
        {console.log("userLogin:",userLogin)}
        {userLogin.length ? userLogin : "Aun no hay compras"}
        <button>
            <Link to= "/userpanel">Volver</Link>
        </button>
        </div>
    )

}
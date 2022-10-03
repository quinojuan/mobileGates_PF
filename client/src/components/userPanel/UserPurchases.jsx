import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getPurchase } from "../../redux/Actions";
import { useAuth } from '../Context/authContext';

export default function UserPurchases(){
    const dispatch=useDispatch()
    const purchases=useSelector((state)=>state.purchases)
    console.log(purchases)
    // const logged=useSelector((state)=>state.loggedUser)
    // console.log(logged)
    // const userLogin=purchases&&purchases.filter(s=>s.email===logged.email)
    useEffect(()=>{
        dispatch(getPurchase())
    }, [])
    return (
        <div>
        {/* {userLogin.length ? userLogin : "Aun no hay compras"}
        <button>
            <Link to= "/userpanel">Volver</Link>
        </button> */}
        <h1>Hola</h1>
        </div>
    )

}
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getPurchase } from "../../redux/Actions";
import Feedback from "../Feedbacks/Feedbacks"


export default function UserPurchases(){
    const dispatch=useDispatch()
    const purchases=useSelector((state)=>state.purchases)
    const logged=useSelector((state)=>state.loggedUser)
    const navigate=useNavigate()
    console.log(purchases, "COMPRITAS BIEN PERRAZAS")
    console.log(logged, "USUARIOS BIEN PERRAZOS")
    // console.log(purchases[0])
    const userLogin = purchases.filter((s)=>s.email == logged.email)
    
    console.log(userLogin, "ysfysfudisdsfd")
    useEffect(()=>{
        dispatch(getPurchase())
    }, [])
    return (
        
        <div>
            <NavBar/>
            {purchases.length ? purchases.map((s)=>{
                return(
                    <div> 
                        <h1>Tu compra: {s.products.map((s)=>{
                            return(
                            <div>
                            <p>{s.phone}</p>
                            <p>{s.quantity}</p>
                            <Feedback
                                model={s.phone}
                                email={logged.email}
                            />
                            </div>
            )})}</h1>
                        <button onClick={()=>navigate(`userpurchase/${s.id}`)}>Ver detalle de compra</button>
                    </div>
                )
            }):<h1>No realizó compras</h1>}
        
        <button>
            <Link to= "/userpanel">Volver</Link>
        </button>
        
               
                    
                
            
            <Footer/>
         
        </div>
    )

}
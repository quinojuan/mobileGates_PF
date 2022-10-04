import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getPurchase, getUsers } from "../../redux/Actions";
import Feedback from "../Feedbacks/Feedbacks"


export default function UserPurchases(){
    const dispatch=useDispatch()
    const purchases=useSelector((state)=>state.purchases)
    const logged=useSelector((state)=>state.loggedUser)
    const navigate=useNavigate()
   // console.log(purchases, "COMPRITAS BIEN PERRAZAS")
    //console.log(logged, "USUARIOS BIEN PERRAZOS")
    // console.log(purchases[0])
    const userLogin = purchases.filter((s)=>s.email == logged.email)
    
   // console.log(userLogin, "ysfysfudisdsfd")
    useEffect(()=>{
        dispatch(getUsers());
        dispatch(getPurchase())
    }, [dispatch])
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
            <hr />
            <table class="table table-striped w-75 ms-5 mt-5">
                        <tbody>
                            <tr>
                        <td>{s.id}</td>
                        <td class='btn btn-primary'onClick={()=>navigate(`userpurchase/${s.id}`)}>Ver detalle de compra</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>

                )
            }):<h1>No realizó compras</h1>}  
        <button class='btn btn-dark mt-4'>
            <a className="nav-link active text-white" href="/userpanel">Volver</a>
        </button>
            <Footer/>   
        </div>
    )

}
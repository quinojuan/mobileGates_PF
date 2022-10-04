//datos del usuario
//detalles de orden que hice en el pasado
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, getPurchase, getPurchasesDetail, getCleanPurchases } from "../../redux/Actions";
import { useParams, Link } from "react-router-dom";


export default function PurchaseDetail(){
    const dispatch= useDispatch();
    // const myProfiles= useSelector((state)=>state.purchases);
    const details=useSelector((state)=>state.purchasesDetail)
    const purchases=useSelector((state)=>state.purchases)
    const {id} = useParams();
    let myPurchase=purchases&&purchases.filter((s)=>s.id===id)
    console.log(details)

    
    useEffect(()=>{
        dispatch(getPurchase())
        
    },[dispatch])
    return(
    <div>
    <Link to= "/userpurchases">
        <button>Volver</button>
    </Link>
    
    {
                purchases.length > 0 ?
                    <div>
                        <h1>Detalles del pedido</h1>
                        <h5>Total: ${myPurchase[0].amount} </h5>
                        <h5>Productos: {myPurchase[0].products.map(s => s.phone).join(" , ")}</h5>
                        <h3>Dirección de facturación</h3>
                        <h5 >Dirección: {myPurchase[0].adress}</h5>
                        <h5 >DNI: {myPurchase[0].dni}</h5>
                        <h5>Fecha de nacimiento:{myPurchase[0].birthday} </h5>
                    </div> : <div><div><h4>Loading...</h4></div></div>
            }
            
    </div>
 
)}
//datos del usuario
//detalles de orden que hice en el pasado
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, getPurchase, getPurchasesDetail } from "../../redux/Actions";
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
                        <h3 >Dirección: {purchases[0].adress}</h3>
                        <h3>Productos {purchases[0].products.map(s => s.phone).join(" || ")}</h3>
                        <h3>Amount: ${purchases[0].amount}</h3>
                        <h5 >DNI: {purchases[0].dni}</h5>
                        <h5>Fecha de nacimiento:{purchases[0].birthday} </h5>
                    </div> : <div><div><h4>Loading...</h4></div></div>
            }
            
    </div>
 
)}
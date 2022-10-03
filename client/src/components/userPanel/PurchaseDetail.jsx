//datos del usuario
//detalles de orden que hice en el pasado
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, getPurchase } from "../../redux/Actions";
import { useParams, Link } from "react-router-dom";


export default function PurchaseDetail(){
    const dispatch= useDispatch();
    const myProfiles= useSelector((state)=>state.purchases);

const {id} = useParams();
useEffect(()=>{
    dispatch(getPurchase(id))
},[dispatch,id])
    return(
    <div>
    <Link to= "/userpurchases">
        <button>Volver</button>
    </Link>
    
    { 
        Object(myProfiles).length!==0? <div >
        <div>
            <h1>{myProfiles&&myProfiles.name}</h1>
             
        </div>
        <img src={myProfiles&&myProfiles.image} alt="Not found" width="200px" height="200px" />
       <div>
     
     </div>
    </div> : <div>Loading...</div>}
    </div>
 
)}
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
        <button class='btn btn-secondary mt-3 mb-5'>Volver</button>
    </Link>
    
    {
                purchases.length > 0 ?
                
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Detalles del pedido</th>
                          <th scope="col">Total</th>
                          <th scope="col">Dirección</th>
                          <th scope="col">DNI</th>
                          <th scope="col">Fecha de nacimiento</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td></td>
                        <td>${myPurchase[0].amount} </td>
                        <td>{myPurchase[0].adress}</td>
                        <td>{myPurchase[0].dni}</td>
                        <td>{myPurchase[0].birthday}</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            
                        </tr> 
                        <tr> 
                        <th scope='row'>3</th>
                        
                        </tr>
                        </tbody>
                        </table>
                     : <div><div><h4>Loading...</h4></div></div>
            }
            
    </div>
 
)}


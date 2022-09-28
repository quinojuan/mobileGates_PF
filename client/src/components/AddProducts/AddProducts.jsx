import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart, addToCart, getPurchaseRepeat } from "../../redux/Actions";
import style from "./AddProduct.module.css"
import { Link } from "react-router-dom";
import { useAuth } from '../Context/authContext';
import Swap from "sweetalert2"


export default function AddProducts({id}){
    
    const dispatch=useDispatch()
    const cart = useSelector((state)=>state.cart)
    const { user, logout, loading } = useAuth()
    const products = useSelector((state)=>state.products)
    let product = products.filter((e)=>e.id === id)
    const [sinAgregar, setSinAgregar]=useState((true))

    function handleCart(){
        console.log(id, "ID")
        console.log(product, "PRODUCT")
        if(sinAgregar){
        dispatch(addToCart(product))
        Swap.fire("Éxito","Producto agregado con exito.", "success")
        setSinAgregar(false)
        } else {
            Swap.fire("El producto ya ha sido añadido anteriormente.")
        }
    }
    if(user){
    return (
            <div class='mb-3' >
            <button type="button" class=' btn btn-primary ' onClick={()=>handleCart()}>Agregar al Carrito</button>
            </div>
    )
} else {
    return (
        <h1>
            Inicia sesión para poder realizar la compra
        </h1>
    )
}
}
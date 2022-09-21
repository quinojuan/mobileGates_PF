import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart, addToCart } from "../../redux/Actions";
import style from "./AddProduct.module.css"
import { Link } from "react-router-dom";

export default function AddProducts({id}){
    
    const dispatch=useDispatch()
    const cart = useSelector((state)=>state.cart)
    const products = useSelector((state)=>state.products)
    let product = products.filter((e)=>e.id === id)

    function handleCart(){
        console.log(id, "EEEEE")
        console.log(product, "PRODUCT")
        dispatch(addToCart(product))
    }

    return (
        
            <button type="button" class='btn btn-outline-success btn-sm' onClick={()=>handleCart()}>Agregar al Carrito</button>
        
    )
}
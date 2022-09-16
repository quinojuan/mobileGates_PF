import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart, addToCart } from "../../redux/Actions";
import style from "./AddProduct.module.css"

export default function AddProducts({id}){
    
    const dispatch=useDispatch()
    const products = useSelector((state)=>state.products)
    let product = products.filter((e)=>e.id === id)

    function handleCart(){
        console.log(id, "EEEEE")
        console.log(product, "PRODUCT")
        dispatch(addToCart(product))
    }

    return (
        <div>
            <button className={style.button} onClick={()=>handleCart()}>Add</button>
        </div>
    )
}
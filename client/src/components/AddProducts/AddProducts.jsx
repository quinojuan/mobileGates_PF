import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart, addToCart } from "../../redux/Actions";

export default function AddProducts(){
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.cart)
    

    function handleCart(e){
        e.preventDefault()
        console.log(e.target.value)
        dispatch(addToCart(e.target.value))
    }

    return (
        <div>
            <button onClick={(e)=>handleCart(e)}>Add</button>
        </div>
    )
}
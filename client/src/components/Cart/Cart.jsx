import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCart, deleteProductInCart } from "../../redux/Actions";
import { useNavigate } from "react-router-dom";
//import { useState } from "react";

export default function Cart(){

    let myCart = useSelector((state)=> state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getCart())
      console.log(myCart, "CARRITO cart")
    },[dispatch])
  
return(
    <div>
        <button onClick={()=> navigate("/home")}></button>
        <div>
      {myCart.length &&
      myCart.map((p)=>{
        return(
        <div key={p.id}>
            <img src={p.image} height="300px" width="300px"></img>
            <button onClick={()=>dispatch(deleteProductInCart(p.id))}>X</button>
        </div>
        )
      })}
        </div>
    </div>
)
}
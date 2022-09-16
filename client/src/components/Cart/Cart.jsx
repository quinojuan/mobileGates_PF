import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCart, deleteProductInCart } from "../../redux/Actions";
import { useHistory } from "react-router-dom";

export default function Cart(){
    //const dispatch=useDispatch()
    const cart = useSelector((state)=> state.cart)
    const history = useHistory()
    
return(
    <div>
        <button onClick={()=> history.push("/home")}></button>
      {cart.length && 
      cart.map((p)=>{
        <div key={cart.id}>
            <img src={p.image}></img>
        </div>
      })}
    </div>
)
}
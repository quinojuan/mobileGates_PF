import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCart, deleteProductInCart } from "../../redux/Actions";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Cart(){
    //const dispatch=useDispatch()
    let myCart = useSelector((state)=> state.cart)
    const history = useHistory()
    const [carro, setCarro] = useState({items: []})
    const dispatch = useDispatch()

    useEffect(()=>{
      console.log(myCart, "CARRITO cart")
      dispatch(getCart())
    },[dispatch])

  /*   const handleDelete =(e)=>{
        setCarro({...carro, items: carro.items.filter(d=>d !== e)})  
    }  */
return(
    <div>
        <button onClick={()=> history.push("/home")}></button>
        <div>
      {myCart.length &&
      myCart?.map((p)=>{
        return(
        <div key={p.id}>
            <img src={p.image}></img>
            <button onClick={()=>deleteProductInCart(p.id)}>X</button>
        </div>
        )
      })}
        </div>
    </div>
)
}
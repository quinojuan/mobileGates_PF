import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Actions";
import { useAuth } from '../Context/authContext';
import Swap from "sweetalert2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const addCartButton = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    margin: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '8px',
    paddingBottom: '8px',
    borderRadius: '5px',
    fontSize: '15px',
  }

export default function AddProducts({id, quantity}){
    
    const dispatch=useDispatch()
    const { user } = useAuth()
    const products = useSelector((state)=>state.products)
    let product = products.filter((e)=>e.id === id)
    const [sinAgregar, setSinAgregar]=useState((true))

    let productPresentation = { 
        phone: product[0],
        quantity: quantity
    }
    var isOutOfStock = false

    function handleCart(){
        //console.log(id, "ID")
        console.log(productPresentation, "PRODUCT")
        if(sinAgregar){
        dispatch(addToCart(productPresentation))
        Swap.fire("Éxito","Producto agregado con exito.", "success")
        setSinAgregar(false)
        } else {
            Swap.fire("El producto ya ha sido añadido anteriormente.")
        }
    }
    if(user){
    return (
        
        <div className='p-3'>
            <button type="button"  className={`${isOutOfStock ? 'displayNone' : ''}`}style={addCartButton} onClick={()=>handleCart()}><FontAwesomeIcon icon={['fas', 'cart-plus']} /> Agregar al Carrito</button>
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
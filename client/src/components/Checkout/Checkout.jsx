import React from "react";
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {postPurchase, getCheck, cleanCart} from "../../redux/Actions/index"
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

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

const stripePromise = loadStripe('pk_test_51Lm1TVK1EwVhNCq68YLlfHrPYO6g5jOMh5oTgzSercKkEo1RAgFdwEZ89w2dFni5DwDTm0Fx1mlSvGk3AaXwOxbQ00h8CiddUO');

const CheckOutForm = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stripe = useStripe();
    const element = useElements();
    const price = useSelector((state)=> state.finalPrice)
    //console.log(price, "PRICEEE")
    const estadoGlobal = useSelector((state)=>state.inputPurchase)


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: element.getElement(CardElement)
        });

        if(!error){
            const {id} = paymentMethod

           let purchaseStripe = await axios.post('http://localhost:3001/checkout', {
                id,
                amount: price
        });
        let dataCheck = await axios.get('http://localhost:3001/checkout');
          console.log(dataCheck.data, " DATA CHECK")
         
         let estadoGlobal2 = {...estadoGlobal, ...dataCheck.data}
           console.log(estadoGlobal2, "ahora si el objeto a presentar en back")
            dispatch(postPurchase(estadoGlobal2))
            dispatch(cleanCart())
           navigate("/home") 
        }else{
            console.log(error);
        }
        
    };

    return <form onSubmit={handleSubmit} class='card card-body'>
        <img src="https://static.vecteezy.com/system/resources/previews/006/059/902/original/three-credit-cards-icon-debit-card-sign-free-vector.jpg" 
            alt="" 
            class='img-fluid' />
        <div class='form-group'>
        <CardElement class='form-control'/>
        </div>
        <button class='btn btn-primary text-decoration-none text-light' style={addCartButton}>Comprar</button>
    </form>
    
};


export default function Checkout(){
    return(
        <Elements stripe={stripePromise}>
            <NavBar/>
            <div className='list-group-item-secondary'>
            <div className='jumbotron jumbotron-fluid text-center py-2'>
            <h4 className='display-4 mt-5'> Metodo de pago </h4>
            </div>
            </div>
            <hr/>
        <div class='container p-4'>
            <div class='row'>
                <div class='col-md-4 offset-md-4'>
                    <CheckOutForm/>
                </div>
            </div>
        </div>
        </Elements>
    );
};
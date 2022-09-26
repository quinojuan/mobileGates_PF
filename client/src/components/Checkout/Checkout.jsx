import React from "react";
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51Lm1TVK1EwVhNCq68YLlfHrPYO6g5jOMh5oTgzSercKkEo1RAgFdwEZ89w2dFni5DwDTm0Fx1mlSvGk3AaXwOxbQ00h8CiddUO');

const CheckOutForm = () =>{
    const stripe = useStripe();
    const element = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: element.getElement(CardElement)
        });

        if(!error){
            const {id} = paymentMethod
            await axios.post('http://localhost:3001/checkout', {
                id,
                amount: 1000
        });
        }else{
            console.log(error);
        }
        
    };

    return <form onSubmit={handleSubmit}>
        <CardElement/>
        <button>BUY</button>
    </form>
    
};


export default function Checkout(){
    return(
        <Elements stripe={stripePromise}>
        <CheckOutForm/>
        </Elements>
    );
};
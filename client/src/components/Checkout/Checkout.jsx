import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postPurchase, getCheck, cleanCart, purchaseMail } from "../../redux/Actions/index";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51Lm1TVK1EwVhNCq68YLlfHrPYO6g5jOMh5oTgzSercKkEo1RAgFdwEZ89w2dFni5DwDTm0Fx1mlSvGk3AaXwOxbQ00h8CiddUO"
);

const CheckOutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const element = useElements();
  const price = useSelector((state) => state.finalPrice);
  //console.log(price, "PRICEEE")
  const estadoGlobal = useSelector((state) => state.inputPurchase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      let purchaseStripe = await axios.post("http://localhost:3001/checkout", {
        id,
        amount: price,
      });
      let dataCheck = await axios.get("http://localhost:3001/checkout");
      console.log(dataCheck.data, " DATA CHECK");

      let estadoGlobal2 = { ...estadoGlobal, ...dataCheck.data };
      console.log(estadoGlobal2, "ahora si el objeto a presentar en back");
      dispatch(postPurchase(estadoGlobal2));
      dispatch(purchaseMail(estadoGlobal2)); // envia el mail al finalizar la compra
      dispatch(cleanCart());
      navigate("/home");
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>BUY</button>
    </form>
  );
};

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  );
}

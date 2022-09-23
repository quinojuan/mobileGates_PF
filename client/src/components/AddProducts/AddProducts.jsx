import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, getPurchaseRepeat, getCart } from "../../redux/Actions";
import style from "./AddProduct.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import Swap from "sweetalert2";

export default function AddProducts({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { user } = useAuth();
  const products = useSelector((state) => state.products);
  let product = products.filter((e) => e.id === id);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  function handleCart() {
      
      if (checkInCart()) {
      dispatch(addToCart(product));
      Swap.fire("Éxito", "Producto agregado con exito.", "success");
    } else {
      Swap.fire("El producto ya ha sido añadido anteriormente.");
    }
  }

  function checkInCart() {
    if (!cart.find(el=> el.id === product[0].id)) {
      return true;
    } else {
      return false
    }
  }

  if (user) {
    return (
      <button
        type="button"
        class="btn btn-outline-success btn-sm"
        onClick={() => handleCart()}
      >
        Agregar al Carrito
      </button>
    );
  } else {
    return <h1>Inicia sesión para poder realizar la compra</h1>;
  }
}

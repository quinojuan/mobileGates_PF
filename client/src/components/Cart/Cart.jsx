import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getCart,
  deleteProductInCart,
} from "../../redux/Actions";
//import { useNavigate } from "react-router-dom";
//import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Cart() {
  let myCart = useSelector((state) => state.cart);
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  console.log(myCart, "CARRITO cart")
  function handleSuma(e){
    e.preventDefault()
    let suma=0
    for(let i=0; i<myCart.length; i++) {
    // suma+=myCart.map(s=>s.price[0])
    suma+=myCart[i].price[0]
    }
    console.log(suma)
    return suma;
    
                  
    
  }
  return (
    <div>
      <NavBar />
      <div className="container" style={{ maxWidth: '540px', alignItems: 'center', display: 'flex', position: 'relative' }}>
      {myCart.length >0 ?
        <button>
          <Link to="/purchase">Comprar</Link>
        </button> : null
}

        
        <div class="card" style={{ maxWidth: '540px', alignItems: 'center', display: 'flex', position: 'relative', width: '80%', height: '100%'}}>
          {myCart.length >0 ? 
            myCart?.map((p) => {
              
              return (
                <div>
                  <div key={p.id}>
                    <img
                      src={p.image}
                      height="300px"
                      width="300px"
                      class="card-img-top"
                      alt=""
                    ></img>
                    <button
                      class="btn btn-danger"
                      onClick={() => dispatch(deleteProductInCart(p.id))}
                    >
                      Quitar del carrito
                    </button>
                  </div>
                  <div></div>
                </div>
              );
            })
           : (
            <div>
              <h1>No se agregaron productos al carrito aun</h1>
            </div>
          )}
        </div>
      </div>
      <h4>Costo total: ${(e)=>handleSuma(e)}</h4>
      <div>
        <Link to="/home" class="btn btn-dark" style={{ alignItems: "center" }}>
          Volver
        </Link>
      </div>
      <Footer />
    </div>
  );
}

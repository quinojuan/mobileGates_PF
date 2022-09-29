import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCart, deleteProductInCart, setFinalPrice, preventCartBug} from "../../redux/Actions";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useNavigate, useNavigation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Cart() {
  let myCart = useSelector((state) => state.cart);
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const carrito = useSelector(state=>state.cart)
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(getCart());
   
  }, [dispatch]);
  
  function acomodarPrecio(precio) {
    let precioString = precio.toString();
    let contador = 0;
    let acumulador = [];
    let acumuladorInvertido = []
    for (let i = precioString.length - 1; i >= 0; i--) {
      contador++;
      if (contador === 3 && i>0) {
        acumuladorInvertido.push(precioString[i]);
        acumuladorInvertido.push(".");
        contador = 0
      } else {
        acumuladorInvertido.push(precioString[i]);
      }
    }
    for(let i=acumuladorInvertido.length - 1; i>=0;i--){
      acumulador.push(acumuladorInvertido[i])
    }
    return acumulador.join("");
  }

  const handleSuma =()=> {
    let suma = 0;
    for (let i = 0; i < myCart.length; i++) {
      suma += (myCart[i].phone.price[0] * myCart[i].quantity);
    }
    dispatch(setFinalPrice(suma))
    console.log("SUMA:", suma);
    
    return acomodarPrecio(suma);
  }

  const handleDelete = (id) => {
    dispatch(deleteProductInCart(id))
  }

  function preventNullCart(){
    if (carrito[0] === null){
      dispatch(preventCartBug())
    }
    navigate("/purchase")
  }

  return (
    <div >
      <NavBar/>
      <h1 class='mt-3'>
        <FontAwesomeIcon
          icon={['fas', 'shopping-cart']}
          style={{ marginRight: '20px' }}
        />
        Carrito de compras
      </h1>
      <hr />
      <div className="container mt-5 ms-auto me-auto w-100" >
        
          {myCart.length > 0 ? (
            myCart?.map((p) => {
              return (
                <div class='container' style={{ minHeight: '50px' }}>
                  {/* <div class='col lg-8' key={p.id}> */}
                  <div className='card mt-1 p-1 w-50' key={p.phone.id}>
                    {/* <div class='col-md-20 ms-2 ' style={{ maxHeight: '700px'}}> */}
                    <div className='row container' >
                    <div className='col-md-4'>
                    <img src={p.phone.image} class="card-img w-100"alt=""/>
                    </div>
                  <div className='col-md-5'>
                  <div className='card-body'>
                    <h5 className='card-title'>{p.phone.brand} </h5>
                    <h5 className='card-title'>{p.phone.model}</h5>
                    <p className='card-text'>
                      {p.phone.description.slice(0, 50) + '...'}
                    </p>
                    <h5 className='card-quantity'>Cantidad a comprar: {p.quantity}</h5>
                  </div>
                </div>
                <h5 className='card-quantity'>Cantidad a comprar: {p.quantity}</h5>
                    <button
                      class="btn btn-danger btn-sm w-50 mx-auto"
                      onClick={() => handleDelete(p.phone.id)}
                      >
                      Quitar del carrito
                    </button>
                  
                  </div>
                  </div>
                </div>
              );
            })
            ) : (
              <div class="alert alert-success mt-2 ms-5">
              <h3 class="alert-heading">¡No se agregaron productos al carrito aun!</h3>
            </div>
          )}
      </div>
      <div className='col-md-5 p-5 position-absolute top-50 start-50'>
      <div className='sticky-top'>
        <h3 class=""></h3>
        <hr />
        <h4 class='mt-3'>Costo total: ${handleSuma()}</h4>
            {myCart.length > 0 ? (
              <button class='btn btn-primary w-50' onClick={()=>preventNullCart()}>
                <h4 class='text-decoration-none text-light'>Comprar</h4>
              </button>
            ) : null}
            {myCart.length > 0 ? (
              <button class="btn btn-danger" >Limpiar carrito.</button>
            ) : null}
        </div>
        </div>
        
      {/* <div>
        <Link to="/home" class="btn btn-dark" style={{ alignItems: "center" }}>
        Volver
        </Link>
      </div> */}
      <Footer />
    </div>
  );
}

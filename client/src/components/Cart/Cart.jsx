import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCart, deleteProductInCart } from "../../redux/Actions";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Cart() {
  let myCart = useSelector((state) => state.cart);
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  function handleSuma() {
    let suma = 0;
    for (let i = 0; i < myCart.length; i++) {
      suma += myCart[i].price[0];
    }
    console.log("SUMA:", suma);
    suma = parseFloat(suma)/1000
    return suma;
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
                  <div className='card mt-1 p-1 w-50' key={p.id}>
                    {/* <div class='col-md-20 ms-2 ' style={{ maxHeight: '700px'}}> */}
                    <div className='row container' >
                    <div className='col-md-4'>
                    <img src={p.image} class="card-img w-100"alt=""/>
                    </div>
                  <div className='col-md-5'>
                  <div className='card-body'>
                    <h5 className='card-title'>{p.brand}{p.model}</h5>
                    <p className='card-text'>
                      {p.description.slice(0, 50) + '...'}
                    </p>
                  </div>
                </div>
                    <button
                      class="btn btn-danger btn-sm w-50 mx-auto"
                      onClick={() => dispatch(deleteProductInCart(p.id))}
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
        <h3 class="">Resumen</h3>
        <hr />
        <h4 class='mt-3'>Costo total: ${handleSuma()}</h4>
            {myCart.length > 0 ? (
              <button class='btn btn-primary w-50'>
                <Link class='text-decoration-none text-light' to="/purchase">Comprar</Link>
              </button>
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

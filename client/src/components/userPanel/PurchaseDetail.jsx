//datos del usuario
//detalles de orden que hice en el pasado
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getUsers,
  getPurchase,
  getPurchasesDetail,
  getCleanPurchases,
} from "../../redux/Actions";
import { useParams, Link } from "react-router-dom";
import Feedbacks from "../Feedbacks/Feedbacks";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"

export default function PurchaseDetail() {
  const dispatch = useDispatch();
  // const myProfiles= useSelector((state)=>state.purchases);
  const details = useSelector((state) => state.purchasesDetail);
  const purchases = useSelector((state) => state.purchases);
  const { id } = useParams();
  let myPurchase = purchases && purchases.filter((s) => s.id === id);
  console.log(details);
  console.log(myPurchase);

  function handleSuma() {
    // let total=0;
    // total+=myPurchase[0].products&&products.map((s)=>s.quantity)
    // return total
    let suma = 0;
    for (let i = 0; i < myPurchase[0].products.length; i++) {
      suma += myPurchase[0].products[i].quantity;
    }
    return suma;
  }
  console.log(handleSuma, "uadnisdsfs");

  useEffect(() => {
    dispatch(getPurchase());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <br />
      <br />

      {purchases.length > 0 ? (
        <div class='container mt-5 w-50'>
          <h1>Detalles del pedido</h1>
          <div class="card text-start" style={{ Width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">Total:
                <b class="card-subtitle mb-2 text-muted"> ${myPurchase[0].amount}</b>
              </h5>
              <h5 class="card-title">Cantidad de productos:
                <b class="card-subtitle mb-2 text-muted"> {handleSuma()} productos</b>
              </h5>
              <h5 class="card-title">Dirección de facturación:
                <b class="card-subtitle mb-2 text-muted"> {myPurchase[0].adress}</b>
              </h5>
              <h5 class="card-title">DNI:
                <b class="card-subtitle mb-2 text-muted"> {myPurchase[0].dni}</b>
              </h5>
              <h5 class="card-title">Fecha de nacimiento:
                <b class="card-subtitle mb-2 text-muted"> {myPurchase[0].birthday}</b>
              </h5>
              <h5 class="card-title">Productos:{" "}</h5>
              {myPurchase[0].products.map((p) => {
                return (
                  <div>
                    <b class="card-subtitle mb-2 text-muted">{p.phone}</b>
                    {/* <a>{p.quantity}</a> */}
                    <Feedbacks
                      model={p.phone}
                      email={myPurchase[0].email}
                      />
                  </div>
                )
              }
              )}
            </div>
          </div>
        </div>

      ) : (
        <div>
          <div>
            <h4>Loading...</h4>
          </div>
        </div>
      )}
      <div>

        <Link to="/userpurchases">
          <button class="btn btn-secondary mt-3 mb-5">Volver</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

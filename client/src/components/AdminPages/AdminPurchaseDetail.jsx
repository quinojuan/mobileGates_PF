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
  let myPurchase = purchases && purchases.find((s) => s.id === id);
  //console.log(details);
  console.log(myPurchase, "COMPRA");

  function handleSuma() {
    // let total=0;
    // total+=myPurchase[0].products&&products.map((s)=>s.quantity)
    // return total
    let suma = 0;
    for (let i = 0; i < myPurchase.products.length; i++) {
      suma += myPurchase.products[i].quantity;
    }
    return suma;
  }
 // console.log(handleSuma, "uadnisdsfs");

  useEffect(() => {
    dispatch(getPurchase());
  }, [dispatch]);
  return (
//     <div>
//       <NavBar/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <Link to="/allpurchases">
//         <button class="btn btn-secondary mt-3 mb-5">Volver</button>
//       </Link>
//       {purchases.length > 0 ? (
//         <div>
//           <h1>Detalles del pedido</h1>
//           <h5>Total: ${myPurchase[0].amount} </h5>
//           {myPurchase[0].products.map((p)=>{
//             return(
//                 <div>
//                     <h5>{p.phone}</h5>
//                     <p>({p.quantity})</p>
//                 </div>
//             )
//           })}
//           <h5>Cantidad de productos: {handleSuma()} productos</h5>
//           <h3>Dirección de facturación</h3>
//           <h5>Dirección: {myPurchase[0].adress}</h5>
//           <h5>DNI: {myPurchase[0].dni}</h5>
//           <h5>Fecha de nacimiento:{myPurchase[0].birthday} </h5>
          
//         </div>
//       ) : (
//         <div>
//           <div>
//             <h4>Loading...</h4>
//           </div>
//         </div>
//       )}
//      <Footer/>
//     </div>
//   );
// }
<div class="card text-start" style={{ Width: '18rem' }}>
      <NavBar />
      <br />
      <br />
      {/* <div class="card text-start" style={{ Width: '18rem' }}>
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
      <b class="card-subtitle mb-2 text-muted">{p.phone}</b> */}
      {purchases.length > 0 ? (
        <div class="card-body ms-5">
          <h1 class="card-title">Detalles del pedido</h1>
          <h5 class="card-title">Total:<b class="card-subtitle mb-2 text-muted"> ${myPurchase.amount}</b> </h5>
          {myPurchase.products.map((p)=>{
            return(
                <div>
                    <h5>{p.phone}</h5>
                    <p>({p.quantity})</p>
                </div>
            )
          })}
          <h5 class="card-title">Cantidad de productos: <b class="card-subtitle mb-2 text-muted">{handleSuma()} productos</b></h5>
          {/* <h5 class="card-title"> Dirección de facturación</h5> */}
          <h5 class="card-title">Dirección:<b class="card-subtitle mb-2 text-muted">{myPurchase.adress} </b> </h5>
          <h5 class="card-title">DNI:<b class="card-subtitle mb-2 text-muted"> {myPurchase.dni}</b></h5>
          <h5 class="card-title">Fecha de nacimiento: <b class="card-subtitle mb-2 text-muted">{myPurchase.birthday}</b> </h5>
          <>
          <br/>
           
          
          </>
        </div>

      ) : (
        <div>
          <div>
            <h4>Loading...</h4>
          </div>
        </div>
      )}
      <div>

        <Link to="/allpurchases">
          <button class="btn btn-secondary mt-3 mb-5 text-center">Volver</button>
        </Link>
      </div>
      <Footer />
    </div>
 
)}
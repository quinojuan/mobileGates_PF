//datos del usuario
//detalles de orden que hice en el pasado
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, getPurchase, getPurchasesDetail, getCleanPurchases } from "../../redux/Actions";
import { useParams, Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Feedbacks from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


export default function PurchaseDetail() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.purchasesDetail);
  const purchases = useSelector((state) => state.purchases);
  const feeds = useSelector((state)=> state.allFeedbacks)
  const { id } = useParams();

  let myPurchase = purchases && purchases.find((s) => s.id === id);

  let myFeed = feeds.filter((el)=> el.email === myPurchase.email)

  let myFeedModels = myFeed.map((e)=> e.product)
  
  let productNotCommented =  myPurchase.products.filter((e)=> !myFeedModels.includes(e.phone))

  //console.log(myFeed, "FEEEEED");
  //console.log(myPurchase, "PURCHASE");
  //console.log(productNotCommented, "PRODUCT NOT COMMENTED");

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
  //console.log(handleSuma, "uadnisdsfs");

  useEffect(() => {
    dispatch(getPurchase());
  }, [dispatch]);
  return (
    <div>
      <NavBar/>
      <br/>
      <br/>
      <Link to="/userpurchases">
        <button class="btn btn-secondary mt-3 mb-5">Volver</button>
      </Link>
      {purchases.length > 0 ? (
        <div>
          <h1>Detalles del pedido</h1>
          <h5>Total: ${myPurchase.amount} </h5>
          {myPurchase.products.map((p)=>{
            return(
                <div>
                    <h5>{p.phone}</h5>
                    <p>({p.quantity})</p>
                </div>
            )
          })}
          <h5>Cantidad de productos: {handleSuma()} productos</h5>
          <h3>Dirección de facturación</h3>
          <h5>Dirección: {myPurchase.adress}</h5>
          <h5>DNI: {myPurchase.dni}</h5>
          <h5>Fecha de nacimiento:{myPurchase.birthday} </h5>
          <>
          <br/>
           {productNotCommented.length?productNotCommented.map((e)=>{
             return(
               <div>
                <h5>Podes comentar el producto:{" "}</h5>
                <h3>{e.phone}</h3>
                <Feedbacks
                   model={e.phone}
                   email={myPurchase.email}
                   />
              </div>
             )
           }):null}
          
          </>
        </div>
      ) : (
        <div>
          <div>
            <h4>Loading...</h4>
          </div>
        </div>
      )}
     <Footer/>
    </div>
 
)}
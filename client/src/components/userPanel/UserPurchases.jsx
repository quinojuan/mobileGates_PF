import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, Navigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getPurchase, getUsers } from "../../redux/Actions";
import Feedback from "../Feedbacks/Feedbacks"


export default function UserPurchases() {
  const dispatch = useDispatch()
  const purchases = useSelector((state) => state.purchases)
  const logged = useSelector((state) => state.loggedUser)
  const navigate = useNavigate()
  // console.log(purchases, "COMPRITAS BIEN PERRAZAS")
  //console.log(logged, "USUARIOS BIEN PERRAZOS")
  // console.log(purchases[0])
  const userLogin = purchases.filter((s) => s.email == logged.email)

  // console.log(userLogin, "ysfysfudisdsfd")
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPurchase())
  }, [dispatch])
  return (

    <div class='container mt-5'>
      <NavBar />

      <h1>Detalle de las compras</h1>

      {/* <h1>Detalle de las compras</h1>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Detalles del pedido</th>
            <th scope="col">Total</th>
            <th scope="col">Dirección</th>
            <th scope="col">DNI</th>
            <th scope="col">Fecha de nacimiento</th>
          </tr>
        </thead>
        
      </table> */}
      {purchases.length ? purchases.map((s, index) => {
        return (


          <div>
            <br />
            <br />
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Detalles del pedido</th>
                  <th scope="col">Total</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Fecha de nacimiento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  {/* <button onClick={()=>navigate(`userpurchase/${s.id}`)}>Ver detalle de compra</button> */}
                  <td>{s.id}</td>
                  <td>${s.amount} </td>
                  <td>{s.adress}</td>
                  <td>{s.dni}</td>
                  <td>{s.birthday}</td>
                  <td class='btn btn-primary' onClick={() => navigate(`userpurchase/${s.id}`)}>Ver detalle de compra</td>
                </tr>
              </tbody>
            </table>

            <hr />

          </div>


        )
      }) :
      <div class='container mt-5'>
        <h1>No realizó compras</h1>
      </div>
        }
      <div>
        <button class='btn btn-secondary mt-4'>
          <a className="nav-link active text-white" href="/userpanel">Volver</a>
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  )

}
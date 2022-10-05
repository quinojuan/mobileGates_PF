import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from "../../redux/Actions";
import { useEffect } from "react";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom";

export default function AllPurchases() {
  const purchases = useSelector((state) => state.purchases)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(purchases, "AbER LAS COMPRINIAS")
  useEffect(() => {
    dispatch(getPurchase())
  }, [dispatch])

      return (
        <div>
        <NavBar/>
        {purchases.length ? purchases.map((s)=>{
            return(
              <div class='container mt-5'> 
              
              
            
                    <br/>
                    <br/>
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
                                    <th scope="row">1</th>
                                     {/* <button onClick={()=>navigate(`userpurchase/${s.id}`)}>Ver detalle de compra</button> */}
                                    <td>{s.id}</td>
                                    <td>${s.amount} </td>
                                    <td>{s.adress}</td>
                                    <td>{s.dni}</td>
                                    <td>{s.birthday}</td>
                                  </tr>
                                  </tbody>
                                </table>
                       <h1>

                        <div>
                      {/*   <p>{s.phone}</p>
                        <p>{s.quantity}</p>
                        <Feedback
                            model={s.phone}
                            email={logged.email}
                        /> */}
                        </div>
                    </h1>
        <hr />
        <table class="table table-striped w-75 ms-5 mt-5">
                    <tbody>
                        <tr>
                    <td>{s.id}</td>
                    <td class='btn btn-primary'onClick={()=>navigate(`userpurchase/${s.id}`)}>Ver detalle de compra</td>
                        </tr>
                    </tbody>
                </table>
                </div>

            )
        }):
        <div class='container' style={{ minHeight: "400px" }}>
          <h1>Aún realizó compras</h1>
        </div>
        }  
    <button class='btn btn-dark mt-4'>
        <a className="nav-link active text-white" href="/userpanel">Volver</a>
    </button>
        <Footer/>   
    </div>
      )
    }

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from "../../redux/Actions";
import { useEffect } from "react";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom";

export default function AllPurchases(){
<<<<<<< HEAD
    const purchases=useSelector((state)=>state.purchases)
    const dispatch=useDispatch()
    const navigate=useNavigate()
=======
    const purchases = useSelector((state)=>state.purchases)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    console.log(purchases, "AbER LAS COMPRINIAS")
>>>>>>> 6887edcf485683e9643e4282de6f5476665ae09d
    useEffect(()=>{
        dispatch(getPurchase())
      },[dispatch])

      return (
        <div>
          <NavBar />
          <div class="mt-3">
            {purchases.length?purchases.map((u)=>{
              return(
              <div>
                <br/>
<<<<<<< HEAD
                {u.products}
                {u.email}

                
                
=======
                {u.email}
                <br/>
                {u.amount}
                {u.products.map((p)=> (
                    <div>
                        <p>{p.phone}</p>
                        <p>{p.quantity}</p>
                    </div>
                ))}
>>>>>>> 6887edcf485683e9643e4282de6f5476665ae09d
              </div>
              )
            }):<h1>Aun no hay compras</h1>}
            <hr/>
            <button type="button" class="btn btn-danger" onClick={()=>navigate("/adminpages")}>Volver al Panel</button>
          </div>
    
          <Footer />
        </div>
      )
<<<<<<< HEAD
    }
=======
    }
>>>>>>> 6887edcf485683e9643e4282de6f5476665ae09d

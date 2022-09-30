import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from "../../redux/Actions";
import { useEffect } from "react";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useNavigate } from "react-router-dom";

export default function AllPurchases(){
    const purchases=useSelector((state)=>state.purchases)
    const dispatch=useDispatch()
    const navigate=useNavigate()
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
                {u.products}
                {u.email}

                
                
              </div>
              )
            }):<h1>Aun no hay compras</h1>}
            <hr/>
            <button type="button" class="btn btn-danger" onClick={()=>navigate("/adminpages")}>Volver al Panel</button>
          </div>
    
          <Footer />
        </div>
      )
    }

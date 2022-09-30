import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { getPurchase } from "../../redux/Actions";
import { useAuth } from '../Context/authContext';

export default function UserPanel(){
    const purchases=useSelector((state)=>state.purchases)
    const users= useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { user } = useAuth()
    console.log(user)
    useEffect(()=>{
        dispatch(getPurchase())
      },[dispatch])
      let purchaseUser=purchases.filter((s)=>s.email===user.email)
      return (
        <div>
          <NavBar />
          <div class="mt-3">
            {purchaseUser.length?purchaseUser.map((u)=>{

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


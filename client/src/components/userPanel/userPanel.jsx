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
    const usersByID=useSelector((state)=>state.usersID)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // const { user } = useAuth()
    // console.log(user)
    useEffect(()=>{
        dispatch(getPurchase())
      },[dispatch])
      let filterUser=usersByID.filter((s)=>s.id===usersByID.id)
      return (
        <div>
          <NavBar />
          <div class="mt-3">
            
            <button type="button" class="btn btn-danger" onClick={()=>navigate("/home")}>Volver al inicio</button>
            <button type="button" class="btn btn-danger" onClick={()=>navigate("/userpurchases")}>Mis compras</button>
            
            
          </div>
    
          <Footer />
        </div>
      )
    }
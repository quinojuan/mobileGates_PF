import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { getQas } from "../../redux/Actions"


export default function ManageQuestions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userQuestions = useSelector((state) => state.qas)
 
  useEffect(() => {
    dispatch(getQas())
  }, [dispatch])
   console.log(userQuestions, "questions")
 
  return (
    <div>
      <NavBar />
        <div>
            <br/>
           {userQuestions.length?userQuestions.map((q)=>{
            if(!q.answers){
              return(
                <div>
                   <p>{q.email}</p>
                   <p>{q.product}</p>
                   <p>{q.questions}</p>
                   <button onClick={()=> navigate(`/qas/${q.id}`)}>responder</button>                                              
                </div>
              )
            }
           }):<h2>No hay preguntas pendientes</h2>}
        </div>
        <div>
        <button type="button" class="btn btn-danger" onClick={()=>navigate("/adminpages")}>Volver al Panel</button>
        </div>
      <Footer />
    </div>
  )
}
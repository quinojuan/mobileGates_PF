import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { getQas, updateQa } from "../../redux/Actions"

const btn = {
  color: "white",
  backgroundColor: "DodgerBlue",
  margin: "10px",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "8px",
  paddingBottom: "8px",
  borderRadius: "5px",
  fontSize: "15px",
};

export default function ManageQuestions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userQuestions = useSelector((state) => state.qas)
  const [input, setInput] = useState({
     
  })
 
  useEffect(() => {
    dispatch(getQas())
  }, [dispatch])
   console.log(userQuestions, "questions")
 
  return (
    <div>
      <NavBar />
        <div>
          <br/>
            <br/>
           {userQuestions.length?userQuestions.map((q)=>{
            if(!q.answers){
              return(
                <div>
                  <div margin= "5px">
                  <form class="form-control">
                   <h5>{q.email}</h5>
                   <h5>{q.product}</h5>
                   <p>{q.questions}</p>
                     <button style={btn} class="mt-2"
                      onClick={()=> navigate(`/qas/${q.id}`)}>responder</button>
                     </form>  
                     </div>                                  
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
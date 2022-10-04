import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { getQas, updateQa } from "../../redux/Actions"


export default function ModifyUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()
  const usersQuestions = useSelector((state) => state.qas)
  let qa = usersQuestions.filter((q)=>q.id === id)
  const [input, setInput] = useState({
     answers : ""
  })
 
  useEffect(() => {
    dispatch(getQas())
  }, [dispatch])
   //console.log(userQuestions, "questions")
  
   const handleChange = (e) => {
      e.preventDefault()
      setInput({
        answers: e.target.value
      })
   }
   console.log(input, "EL INPUT")
   const handleSubmit = () => {
      dispatch(updateQa(id, input))
      navigate('/managequestions')
   }
  return (
    <div>
      <NavBar />
        <div>
            <br/>
           {qa.length?qa.map((q)=>{
              return(
                <div>
                   <p>{q.email}</p>
                   <p>{q.model}</p>
                   <p>{q.questions}</p>  
                   <input type="text" onChange={(e)=> handleChange(e)}/> 
                   <button onClick={()=> handleSubmit()}>commit</button>                                        
                </div>
              )
           }):<h2>No hay preguntas pendientes</h2>}
        </div>
        <div>
        <button type="button" class="btn btn-danger" onClick={()=>navigate("/adminpages")}>Volver al Panel</button>
        </div>
      <Footer />
    </div>
  )
}
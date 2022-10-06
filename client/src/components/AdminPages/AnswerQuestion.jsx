import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export default function AnswerQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()
  const usersQuestions = useSelector((state) => state.qas)
  let qa = usersQuestions.filter((q) => q.id === id)
  const [input, setInput] = useState({
    answers: ""
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
      <div class= 'mt-5'>
        <br />
        {qa.length ? qa.map((q) => {
          return (
            <div class="w-50 mx-auto">
              <input
                class="form-control"
                type="text"
                onChange={(e) => handleChange(e)}
                placeholder="hace tu pregunta al admin"
              />
              <form class="form-control">
                <table class="list-group list-group-flush">
                  <table class="list-group-item table-primary">El usuario: {q.email}</table>
                  <table class="list-group-item">Preguntó: {q.questions}</table>
                  <table class="list-group-item">En el producto: {q.product}</table>
                </table>
              <input class="form-control w-50 mx-auto" type="text" onChange={(e) => handleChange(e)} />
              <button class="btn btn-primary mt-3 mb-5" onClick={() => handleSubmit()}>Enviar Respuesta</button>
              </form>
            </div>
          )
        }) : <h2>No hay preguntas pendientes</h2>}
      </div>
      <div>
        <button type="button" class="btn btn-danger" onClick={() => navigate("/adminpages")}>Volver al Panel</button>
      </div>
      <Footer />
    </div>
  )
}
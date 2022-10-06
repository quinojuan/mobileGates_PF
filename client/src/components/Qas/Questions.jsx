import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postQa } from "../../redux/Actions";
import Swal from "sweetalert2"
import { useAuth } from "../Context/authContext";


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

export default function Questions({email,model}) {
  //const myProduct = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [qa, setQa] = useState({
    question: ""
  });

  const handleChange = (e) => {
    e.preventDefault();
      setQa({
        ...qa,
        [e.target.name]: e.target.value,
      });
  };

  const post = () => {
    if(user){
      dispatch(postQa({
        questions: qa.question,
        email: email,
        model: model
      }));
      Swal.fire("Pregunta enviada")
      setQa({
        question: ""
      });
    } else{
      Swal.fire("Debes iniciarte sesión para poder realizar una pregunta")
    }
    
  }

  return (
    <div >
      <input
        class="form-control"
        type="text"
        name="question"
        onChange={(e) => handleChange(e)}
        placeholder="Hacé tu pregunta al admin"
      />
      <button style={btn} class="mt-2"
       onClick={() => post()}>Enviar</button>
    </div>
  );
}
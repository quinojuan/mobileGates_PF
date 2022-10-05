import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postQa } from "../../redux/Actions";
import Swal from "sweetalert2"


export default function Questions({email,model}) {
  //const myProduct = useSelector((state) => state.details);
  const dispatch = useDispatch();
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
    dispatch(postQa({
      questions: qa.question,
      email: email,
      model: model
    }));
    Swal.fire("Pregunta enviada")
    setQa({
      question: ""
    });
  }

  return (
    <div>
      <input
        type="text"
        name="question"
        onChange={(e) => handleChange(e)}
        placeholder="hace tu pregunta al admin"
      />
      <button onClick={() => post()}>Enviar</button>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postQa } from "../../redux/Actions";


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
    setQa({
      question: ""
    });
  }

  return (
    <div >
      <input
        class="form-control"
        type="text"
        name="question"
        onChange={(e) => handleChange(e)}
        placeholder="hace tu pregunta al admin"
      />
      <button style={btn} class="mt-2"
       onClick={() => post()}>Enviar</button>
    </div>
  );
}
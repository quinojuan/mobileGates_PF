import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postQa } from "../../redux/Actions";


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
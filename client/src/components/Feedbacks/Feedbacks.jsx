import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postFeedback } from "../../redux/Actions";


export default function Feedback({email,model}) {
  const myProducts = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({
    title: "",
    comment: "",
    points: 0,
  });


  const handleChange = (e) => {
    e.preventDefault();
    console.log("Email ES:", email);
    console.log("model es:", model);
    if (e.target.name === "points") {
      setFeedback({
        ...feedback,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setFeedback({
        ...feedback,
        [e.target.name]: e.target.value,
      });
    }
    console.log("FEEDBACK ES:", feedback);
  };

  //useEffect(() => {}, []);

  function post() {
    console.log("feedback para post es:", feedback);
    dispatch(postFeedback({
      title: feedback.title,
      comment: feedback.comment,
      points: feedback.points,
      email: email,
      model: model
    }));
    setFeedback({
      title: "",
      comment: "",
      points: 0,
    });
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={(e) => handleChange(e)}
        placeholder="Resumen de tu reseña"
      />
      <input
        type="text"
        name="comment"
        placeholder="Deje su reseña"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="range"
        name="points"
        min="1"
        max="5"
        step="0.1"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => post()}>onSubmit</button>
    </div>
  );
}
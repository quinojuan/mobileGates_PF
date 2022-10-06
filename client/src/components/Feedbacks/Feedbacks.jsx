import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postFeedback } from "../../redux/Actions";
import Swal from "sweetalert2"
import './Feedbacks.css'

// const addCartButton = {
//   color: 'black',
//   backgroundColor: 'white',
//   margin: '10px',
//   paddingLeft: '15px',
//   paddingRight: '15px',
//   paddingTop: '8px',
//   paddingBottom: '8px',
//   borderRadius: '5px',
//   fontSize: '15px',
//   borderColor: 'DodgerBlue',
//   borderWidth:'1px',
//   }


export default function Feedbacks({ email, model }) {
  const myProducts = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [feedback, setFeedback] = useState({
    title: "",
    comment: "",
    points: 0,
  });

  const handleChange = (e) => {
    console.log(e.target.value, "EL VALUE")
    e.preventDefault()
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    })
  }

const post = (e) =>{
  e.preventDefault()
    console.log("feedback para post es:", feedback);
    if(feedback.comment.length<1 || Number(feedback.points)<1 || Number(feedback.points)>5){
      Swal.fire("Faltan completar datos en el feedback")
    } else{
      dispatch(postFeedback({
        title: feedback.title,
        comment: feedback.comment,
        points: Number(feedback.points),
        email: email,
        model: model
      }));
      Swal.fire("Reseña enviada")
      setFeedback({
        title: "",
        comment: "",
        points: 0,
      });
      navigate("/userpurchases")
    }
    
  }
  
  return (
    <div >
      <form onSubmit={(e)=>post(e)}>
              <p className='clasificacion'>
                <input
                  className='input'
                  onChange={(e)=>handleChange(e)}
                  type='radio'
                  name='points'
                  value='5'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={(e)=>handleChange(e)}
                  type='radio'
                  name='points'
                  value='4'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={(e)=>handleChange(e)}
                  type='radio'
                  name='points'
                  value='3'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={(e)=>handleChange(e)}
                  type='radio'
                  name='points'
                  value='2'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={(e)=>handleChange(e)}
                  type='radio'
                  name='points'
                  value='1'
                />
                <label className='label'>★</label>
              </p>
            
            <label>Agrega un comentario</label>
            <input type="text"
              className='form-control'
              rows='3'
              name='comment'
              onChange={(e)=>handleChange(e)}

              placeholder='Mi producto me pareció...'
            />
            
            <button className="button" onSubmit={(e)=>post(e)}>
              Enviar reseña
            </button>
              
          </form>
    </div>
  );
}
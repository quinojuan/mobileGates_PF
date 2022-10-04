import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postFeedback } from "../../redux/Actions";

const addCartButton = {
  color: 'black',
  backgroundColor: 'white',
  margin: '10px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderRadius: '5px',
  fontSize: '15px',
  borderColor: 'DodgerBlue',
  borderWidth:'1px',
  }


export default function Feedbacks({ email, model }) {
  const myProducts = useSelector((state) => state.details);
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({
    title: "",
    comment: "",
    points: 0,
  });


  const handleChange = (e) => {
    e.preventDefault();
    //console.log("Email ES:", email);
    //console.log("model es:", model);
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
    <div >
      <form >
            
              <p className='clasificacion'>
                <input
                  className='input'
                  onChange={handleChange}
                  type='radio'
                  name='score'
                  value='5'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={handleChange}
                  type='radio'
                  name='score'
                  value='4'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={handleChange}
                  type='radio'
                  name='score'
                  value='3'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={handleChange}
                  type='radio'
                  name='score'
                  value='2'
                />
                <label className='label'>★</label>
                <input
                  className='input'
                  onChange={handleChange}
                  type='radio'
                  name='score'
                  value='1'
                />
                <label className='label'>★</label>
              </p>
            
            <label>Agrega un comentario</label>
            <textarea
              className='form-control'
              rows='3'
              name='comments'
              onChange={handleChange}

              placeholder='Mi producto me pareció...'
            />
            <input
              className='text-right btn btn-outline-info mt-2'
              type='submit'
              value='Enviar reseña'
              style={addCartButton}
            />
          </form>
    </div>
  );
}

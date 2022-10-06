import React from "react";
import { useSelector } from "react-redux";


const puntaje = {
  color: "DodgerBlue",
}
export default function PhoneFeedbacks ({model}) {
  const feeds = useSelector((state) => state.allFeedbacks);
  let phoneFeedbacks = feeds.filter((e)=> e.product === model)
  
  return (
    <div>
      {phoneFeedbacks.length?phoneFeedbacks.map((f)=>{
            return(
                <div>
                    <form type="text"
                        className='form-control'
                        placeholder='Mi producto me pareció...'
                        >
                          <div class="fw-lighter">

                            <p>{f.email}</p>
                          </div>
                          <div class="fst-normal">

                              <p>{f.comment}</p>
                          </div>
                    <div style={puntaje}>
                    <h3 >{f.points} ★</h3>  
                    </div>
                    <div class="container">
                      <span id="rateMe1"></span>
                       </div>
                                   
                    </form>
                </div>
            )
      }):null}
    </div>
  );
}
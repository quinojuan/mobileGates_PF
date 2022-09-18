import React from "react";
import {Link} from "react-router-dom"

import "./Cards.css"

export default function Cards({model, image, brand, price, inches, operative_system, capacity, id}) {
    // return (
    //     <div className="container">
    //         <div className="cards">
          
    //         <img src={image} alt='Img not found' width='200px' height='250px'></img>
    //         <h3>{model}</h3>
    //         <h5>{"$"+price}</h5>
    //         <h5>{brand}</h5>
            
    //     </div>
    //     </div>
    // )

    return(
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={image} class="card-img-top" alt="img not found"></img>
      <div class="card-body">
        <h5 class="card-title">{brand} {model}</h5>
        <h6 class="card-text">{inches+'" - '} {operative_system+' -'} {capacity+'GB'}</h6>
      </div>
      <div class="card-footer">
        <h3 class="text-muted">{"$"+price}</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={image} class="card-img-top" alt="img not found"></img>
      <div class="card-body">
      <h5 class="card-title">{brand} {model}</h5>
      <h6 class="card-text">{inches+'" - '} {operative_system+' -'} {capacity+'GB'}</h6>
      </div>
      <div class="card-footer">
      <h3 class="text-muted">{"$"+price}</h3>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <img src={image} class="card-img-top" alt="img not found"></img>
      <div class="card-body">
      <h5 class="card-title">{brand} {model}</h5>
      <h6 class="card-text">{inches+'" - '} {operative_system+' -'} {capacity+'GB'}</h6>
      </div>
      <div class="card-footer">
      <h3 class="text-muted">{"$"+price}</h3>
      </div>
    </div>
  </div>
</div>
    )
}
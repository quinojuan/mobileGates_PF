import React from "react";
import {Link} from "react-router-dom"

import "./Cards.css"

export default function Cards({model, image, brand, price, inches, operative_system, capacity, category, id}) {
    return (
         
        // <div class="card" style="width: 18rem;">
        //  <img src={image} class="card-img-top" alt='img not found'/>
        //    <div class="card-body">
        //     <h5 class="card-title">{brand}{model}</h5>
        //       <p class="card-text">{inches}{operative_system}{capacity}</p>
        //     <a href="#" class="btn btn-primary">{price}</a>
        // </div>
        // </div>




                
        <div class="card w-25 mx-auto d-block text-decoration-none">
                        <Link class= "text-decoration-none text-succes"
                          key={id}
                          to={`/products/${category.toLowerCase()}/${id}`}>
                             <img src={image} class="card-img-top" alt="img not found"></img>
                            
                              </Link>
                              <div class="card-body">
                                <h5 class="card-title text-decoration-none">{brand} {model}</h5>
                                <h6 class="card-text">{inches + '" - '} {operative_system + ' -'} {capacity + 'GB'}</h6>
                                  <div class="card-text">
                                    <h3>{"$" + price}</h3>
                                  </div>
                              </div>
                             </div>
                    
                 

// <div className="container">
//     <div className="cards">
//     <img src={image} alt='Img not found' width='200px' height='250px'></img>
//     <h3>{model}</h3>
//     <h5>{"$"+price}</h5>
//     <h5>{brand}</h5>
// </div>
// </div>
)
}
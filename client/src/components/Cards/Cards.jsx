import React from "react";
import {Link} from "react-router-dom" 

export default function Cards({model, image, brand}) {
    return (
        <div>
          
            <img src={image} alt='Image not found' width='200px' height='250px'></img>
            <h3>{model}</h3>
            <h5>{brand}</h5> 
        </div>
    )
}
import React from "react";
import {Link} from "react-router-dom"
import AddProducts from "../AddProducts/AddProducts"; 
import "./Cards.css"

export default function Cards({model, image, brand, price, id}) {
    return (
        <div className="container">
            <div className="cards">
          
            <img src={image} alt='Img not found' width='200px' height='250px'></img>
            <h3>{model}</h3>
            <h5>{"$"+price}</h5>
            <h5>{brand}</h5>
            
            <AddProducts
            id={id}
            /> 
        </div>
        </div>
    )
}
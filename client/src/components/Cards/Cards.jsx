import React from "react"; 

export default function Cards({model, image}) {
    return (
        <div>
            <img src={image} alt='Image not found' width='200px' height='250px'></img>
            <h3>{model}</h3> 
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";

import "./Cards.css";

export default function Cards({
  model,
  image,
  brand,
  price,
  inches,
  operative_system,
  capacity,
  category,
  id,
  stock
}) {
  function acomodarPrecio(precio) {
    let precioString = precio.toString();
    let contador = 0;
    let acumulador = [];
    let acumuladorInvertido = []
    for (let i = precioString.length - 1; i >= 0; i--) {
      contador++;
      if (contador === 3 && i > 0) {
        acumuladorInvertido.push(precioString[i]);
        acumuladorInvertido.push(".");
        contador = 0
      } else {
        acumuladorInvertido.push(precioString[i]);
      }
    }
    for (let i = acumuladorInvertido.length - 1; i >= 0; i--) {
      acumulador.push(acumuladorInvertido[i])
    }
    return acumulador.join("");
  }
  return (

    <div class="container">
      <div class="row">
        <div class="card-colums">
          <div class="card h-100 w-50 mx-auto bg-dark">
            <Link
              class="text-succes"
              key={id}
              to={`/products/${id}`}
            >
              <img src={image.includes("http") ? image : `data:image/jpeg;base64,${image}`} style={{ height: '220px' }} class="card-img-top img-fluid bg-light"
                alt="img not found"></img>
            </Link>
            {stock ?
              <button className="stock">EN STOCK</button> :
              <button className="sin-stock">SIN STOCK</button>
            }
            <div class="card-body text-light">
              <h5 class="card-title text-decoration-none">
                {model}
              </h5>
              <h6 class="lead">
                {inches + '" - '} {operative_system + ' -'} {capacity < 10 ? capacity + "TB" : capacity + "GB"}
              </h6>
              <div class="card-title">
                <h3>${acomodarPrecio(price)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

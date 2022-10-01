import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesById, getClean, getFeedbacks } from "../../redux/Actions";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AddProducts from "../AddProducts/AddProducts";
import { useNavigate } from "react-router-dom";
import loadingPng from "../../images/Loading.png";
import Feedback from "../Feedbacks/Feedbacks";
import Qas from "../Qas/Qas";
import { useAuth } from '../Context/authContext';

export default function DetailsPhone(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const myProducts = useSelector((state) => state.details);
  const [img, setImg] = useState("");
<<<<<<< HEAD
  const [count, setCount]= useState(1)
  const usuarioLogeado = useSelector(state=>state.loggedUser)
  const feedbacks = useSelector((state)=>state.allFeedbacks)
  
  console.log("USUARIO LOGEADO:", usuarioLogeado)
    function decrease(){
        setCount(count-1)
    }
    function increase(){
        setCount(count+1)
    }
=======
  const [count, setCount] = useState(1)
  const { user } = useAuth()
  function decrease() {
    setCount(count - 1)
  }
  function increase() {
    setCount(count + 1)
  }


  function decrease() {
    setCount(count - 1);
  }
  function increase() {
    setCount(count + 1);
  }
>>>>>>> 4ebeef4ae799361b6435616342d53edd42df4c90
  useEffect(() => {
    !Object.keys(myProducts).length && dispatch(getPhonesById(id));
    Object.keys(myProducts).length && setImg(myProducts.image);
  }, [dispatch, myProducts, id]);

  function handleBack() {
    dispatch(getClean());
    navigate("/home");
  }
<<<<<<< HEAD
  
  useEffect(()=>{
    dispatch(getFeedbacks())
  },[dispatch])
=======

>>>>>>> 4ebeef4ae799361b6435616342d53edd42df4c90

  function handleSelectImage(e) {
    e.preventDefault();
    setImg(e.target.src);
  }
  function acomodarPrecio(precio) {
    //console.log("precio:", precio);
    let precioString = precio.toString();
    let contador = 0;
    let acumulador = [];
    let acumuladorInvertido = [];
    for (let i = precioString.length - 1; i >= 0; i--) {
      contador++;
      if (contador === 3 && i > 0) {
        acumuladorInvertido.push(precioString[i]);
        acumuladorInvertido.push(".");
        contador = 0;
      } else {
        acumuladorInvertido.push(precioString[i]);
      }
    }
    for (let i = acumuladorInvertido.length - 1; i >= 0; i--) {
      acumulador.push(acumuladorInvertido[i]);
    }
    return acumulador.join("");
  }
  return (
    <div>
      <NavBar />
      {
        <div>
          <div
            className="container mt-5"
            style={{
              maxWidth: "540px",
              alignItems: "center",
              display: "flex",
              position: "relative",
            }}
          >
            <div
              class="card mb-3"
              style={{
                maxWidth: "540px",
                alignItems: "center",
                display: "flex",
                position: "relative",
              }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  {img ? (
                    <img
                      src={img}
                      alt="Not found"
                      width="200px"
                      height="250px"
                    ></img>
                  ) : (
                    <img
                      src={loadingPng}
                      alt="no loading img founded"
                      width="200px"
                      height="250px"
                    />
                  )}
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h1 class="card-title">{myProducts && myProducts.brand}</h1>
                    <h1 class="card-title">{myProducts && myProducts.model}</h1>
                    <h5 class="card-text">
                      Capacidad:{" "}
                      {myProducts && Number(myProducts.capacity) < 10
                        ? myProducts.capacity + "TB"
                        : myProducts.capacity + "GB"}
                    </h5>
                    <h5>
                      Sistema operativo:{" "}
                      {myProducts && myProducts.operative_system}
                    </h5>
                    <h5>CPU: {myProducts && myProducts.cpu}.</h5>
                    <h5>
                      Memoria RAM:{" "}
                      {myProducts &&
                        myProducts.ram?.map((e) => " " + e + "GB.")}
                    </h5>
                    <h5>Dimensiones: {myProducts && myProducts.size}</h5>
                    <h5>Tamaño: {myProducts && myProducts.inches}''.</h5>
                    <h5>
                      Camara principal: {myProducts && myProducts.main_camera}
                      MPx.
                    </h5>
                    <h5>
                      Camara frontal: {myProducts && myProducts.frontal_camera}
                      Mpx.
                    </h5>
                    <h5>
                      Precio:{" $"}
                      {myProducts.weight
                        ? acomodarPrecio(myProducts.price)
                        : null}
                    </h5>
                    <h5>
                      Peso:{" "}
                      {myProducts.weight
                        ? acomodarPrecio(myProducts.weight)
                        : null}
                      g.
                    </h5>
                    <h5>
                      Capacidad de la bateria:
                      {myProducts.battery
                        ? acomodarPrecio(myProducts.battery)
                        : null}
                      mAh.
                    </h5>

                    <h6 class="card-text">
                      {myProducts && myProducts.description}{" "}
                    </h6>

                    <h4> Otros colores: </h4>
                    {myProducts &&
                      myProducts.colors?.map((e) => (
                        <img
                          src={e}
                          alt="img not fund"
                          height="50px"
                          width="30px"
                          onClick={(e) => handleSelectImage(e)}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger" disabled={count <= 1} onClick={() => decrease()}>-</button>
            <span class="fs-3 px-3">{count}</span>
            <button type="button" class="btn btn-success" disabled={count >= myProducts.stock} onClick={() => increase()}>+</button>
            {console.log("cantidad de stock",myProducts.stock)}
          </div>
          <div class="mt-3">
          {myProducts.stock?
          <div>
            <h4>Stock disponible</h4>
            <span class="fs-3 px-3">{myProducts.stock}</span>
            <AddProducts id={myProducts.id} quantity={count} />
          </div>
<<<<<<< HEAD
          <hr></hr>
          <h2>Deje su reseña:</h2>
          <div className="dejarFeedback">
            <Feedback
            model = {myProducts?myProducts.model:"modelo inexistente"}
            email = {usuarioLogeado?usuarioLogeado.email:"email invalido"}
=======
          : <span class="fs-3 px-3">No hay stock disponible de este producto</span>
        }
          </div>
          <h4>Deje su reseña</h4>
          <div className="dejarFeedback">
            <Feedback
              model={myProducts ? myProducts.model : "modelo inexistente"}
              email={user ? user.email : "email invalido"}
>>>>>>> 4ebeef4ae799361b6435616342d53edd42df4c90
            />
          </div>
          <hr></hr>
          <h2>Preguntas sobre el producto:</h2>
          <div>
            <Qas
            model = {myProducts?myProducts.model:"modelo inexistente"}
            email = {usuarioLogeado?usuarioLogeado.email:"email invalido"}
            />
          </div>
          <hr></hr>
           <div>
            {feedbacks.length>0?feedbacks.map((e)=> { 
              return(
                <>
                <div>
                  <a>{e.title}</a>
                  <br/>
                  <a>de: {e.email}</a>
                  <br/>
                  <a>{e.points}</a>
                  <br/>
                  <a>Reseña: </a>
                  <br/>
                  <a>{e.comment}</a>
                </div>
                <br/>
                </>
              )
              })
            : null
          }
          </div> 
          <div>
            <button class="btn btn-dark" onClick={() => handleBack()}>
              Volver
            </button>
          </div>
          <Footer />
        </div>
      }
      {/* <div>
            <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/js/swiffy-slider.min.js" ></script>
            <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.5.3/dist/css/swiffy-slider.min.css" rel="stylesheet" ></link>
            
            <div className="swiffy-slider">
            <ul className="slider-container">
                <li><img src="https://source.unsplash.com/49b9l_29ceA/1600x900" style={{maxWidth: '100%', height: 'auto'}}></img></li>
                <li><img src="https://source.unsplash.com/nKAglN6HBH8/1600x900" style={{maxWidth: '100%', height: 'auto'}}></img></li>
                <li><img src="https://source.unsplash.com/E9ZwWcMGzj8/1600x900" style={{maxWidth: '100%', height: 'auto'}}></img></li>
            </ul>

            <button type="button" className="slider-nav"></button>
            <button type="button" className="slider-nav slider-nav-next"></button>

            <div className="slider-indicators">
                <button className="active"></button>
                <button></button>
                <button></button>
            </div>
</div>

    </div> */}
    </div>
  );
}

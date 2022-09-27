import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesById, getClean } from "../../redux/Actions";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AddProducts from "../AddProducts/AddProducts";
import { useNavigate } from "react-router-dom";
import loadingPng from "../../images/Loading.png";

export default function DetailsPhone(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const myProducts = useSelector((state) => state.details);
  const [img, setImg] = useState("");

  useEffect(() => {
    !Object.keys(myProducts).length && dispatch(getPhonesById(id));
    Object.keys(myProducts).length && setImg(myProducts.image);
  }, [dispatch, myProducts, id]);

  function handleBack() {
    dispatch(getClean());
    navigate("/home");
  }

  function handleSelectImage(e) {
    e.preventDefault();
    setImg(e.target.src);
  }
  return (
    <div>
      <NavBar/>
      {
        <div>
          <div
            className="container"
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
                      Precio:{" "}
                    {myProducts && myProducts.price > 999
                        ? "$" + parseFloat(myProducts.price / 1000).toFixed(3)
                        : "$" + myProducts.price} 
                    </h5>
                    <h5>Peso: {myProducts && myProducts.weight}g.</h5>
                    <h5>
                      Capacidad de la bateria:
                      {myProducts && myProducts.battery > 999
                        ? " " + parseFloat(myProducts.battery / 1000).toFixed(3)
                        : " " + myProducts.battery}
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
          <div>
            <AddProducts id={myProducts.id} />
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

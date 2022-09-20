import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesById, getClean } from "../../redux/Actions";
import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import loadingPng from "../../images/Loading.png";

export default function DetailsPhone(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPhonesById(id));
    dispatch(getClean());
  }, [dispatch]);
  const myProducts = useSelector((state) => state.details);
  console.log(myProducts);
  return (
    <div>
      {
        <div>
          <NavBar />
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
                  {myProducts.image ? (
                    <img
                      src={myProducts && myProducts.image}
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
                    <h1 class="card-title">{myProducts && myProducts.model}</h1>
                    {/*<h3 class="card-text">Categoria: {myProducts && myProducts.category}</h3>
                    <h3 class="card-text">Marca: {myProducts && myProducts.brand}</h3>*/}
                    <h5 class="card-text">
                      Capacidad: {myProducts && myProducts.capacity}
                    </h5>
                    <h6 class="card-text">
                      {myProducts && myProducts.description}{" "}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to="/home" class="btn btn-dark">
              Volver
            </Link>
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

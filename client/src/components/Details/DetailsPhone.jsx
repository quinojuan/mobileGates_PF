import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesById, getClean } from "../../redux/Actions";
import {Link, useParams} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function DetailsPhone(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPhonesById(id));
    return dispatch(getClean());
  }, [dispatch, id]);
  const myProducts = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loading);
  console.log(myProducts);
  const finalPrice = [];

  function precioFinal() {
    if (myProducts.price && myProducts.capacity) {
      for (let i = 0; i < myProducts.capacity.length; i++) {
        if (myProducts.capacity[i] !== "1") {
          finalPrice.push(
            myProducts.capacity[i] + "GB por $" + myProducts.price[i] + ". "
          );
        } else {
          finalPrice.push("1TB por $" + myProducts.price[i] + ". ");
        }
      }
      return finalPrice;
    } else {
      return "Loading...";
    }
  }
  return (
    <div>
      <Link to="/home">Back</Link>
      {!loading ? (
        <div>
            
            {
                
                    <div>
                        <NavBar/>
                        <h1>{myProducts&&myProducts.model}</h1>
                        <h3>Category: {myProducts&&myProducts.category}</h3>
                        <h3>Brand: {myProducts&&myProducts.brand}</h3>
                        <h5 >Capacity: { myProducts&&myProducts.capacity}</h5>
                        <img src={myProducts&&myProducts.image} alt="Not found" width="200px" height="250px"></img>
                        <h6>{myProducts&&myProducts.description} </h6>
                        <Link to="/home">Back</Link>
                        <Footer/>
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
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

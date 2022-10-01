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
import Feedback from "../Feedbacks/Feedbacks";
import { useAuth } from '../Context/authContext';
import './DetailsPhone.css'


const wrapper = {
  maxWidth: '1000px',
  width: '100%',
  border: '1px solid #333',
  margin: '30px auto',
  padding: '20px',
}
const wrapperContent = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}
const image = {
  maxWidth: '500px',
  width: '100%',
}

export default function DetailsPhone(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const myProducts = useSelector((state) => state.details);
  const [img, setImg] = useState("");
  const [count, setCount] = useState(1)
  const { user } = useAuth()

  const allProducts = useSelector(state => state.products)
  const myProductWithBrand = allProducts.filter((e)=> e.id == id)
 
  function decrease() {
    setCount(count - 1);
  }
  function increase() {
    setCount(count + 1);
  }
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

  let stock_quantity = myProducts.stock

  var isOutOfStock = false

  if (stock_quantity === 0) {
    isOutOfStock = true
  }

  function renderBrand (){
    return myProductWithBrand[0].brand? myProductWithBrand[0].brand : 'loading'
  }
  return (
    <div>
    <NavBar />
        <div style={wrapper}>
        
          <h2 class='text-black-50'>{renderBrand()} {myProducts.model}</h2>
  
          <hr />
          <div style={wrapperContent}>
          
                  {img ? (
                    <img
                    src={img}
                    alt="Not found"
                    style={image}
                    // width="200px"
                    // height="250px"
                    ></img>
                    ) : (
                      <img
                      src={loadingPng}
                      alt="no loading img founded"
                      // width="200px"
                      // height="250px"
                      />
                      )}
                {/* </div> */}
                <div className='p-3'>
                <h3 className='display-3'>${myProducts.price}</h3>
                <div>

            Stock:
            {isOutOfStock ? (
              <div className='out-stock-style'>
                <h4>{myProductWithBrand[0].stock}Sin Stock</h4>
              </div>
            ) : (
              <div className='in-stock'>
                <h4>Quedan {myProductWithBrand[0].stock} en stock</h4>
              </div>
            )}
          </div>
          <hr />
            <p className='lead'>{myProducts.description}</p>
                 
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-outline-dark" disabled={count <= 1} onClick={() => decrease()}>-</button>
            <span class="fs-3 px-3">{count}</span>
            <button type="button" class="btn btn-outline-dark" disabled={count >= myProducts.stock} onClick={() => increase()}>+</button>
          </div>
          <hr />
          <div class='flex-wrap'>
            <AddProducts id={myProducts.id} quantity={count} />
            </div>
          </div>
          </div>
          
          <hr/>
          <h4>Dejanos tu opinion</h4>
          
            <Feedback
              model={myProducts ? myProducts.model : "modelo inexistente"}
              email={user ? user.email : "email invalido"}
              />
          {/* </div> */}
          {/* <div>
            <button class="btn btn-dark" onClick={() => handleBack()}>
              Volver
            </button>
          </div> */}
              </div>
      
      <Footer />
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

<<<<<<< HEAD
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTabletsById, getClean } from "../../redux/Actions";
import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function DetailsTablet(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

    useEffect(()=>{
        dispatch(getTabletsById(id))
        dispatch(getClean())
    }, [dispatch])
    const myProducts=useSelector((state)=>state.details)
    console.log("esto es my products", myProducts)
    return(
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
        </div>
    )
}
=======
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTabletsById, getClean } from "../../redux/Actions";
import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function DetailsTablet(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

    useEffect(()=>{
        dispatch(getTabletsById(id))
        dispatch(getClean())
    }, [dispatch])
    const myProducts=useSelector((state)=>state.details)
    console.log("esto es my products", myProducts)
    return(
        <div>
           
            {
                
                <div>
                <NavBar />
                <div className="container" style={{ maxWidth: '540px', alignItems: 'center', display: 'flex', position: 'relative'}}>
                    <div class="card mb-3" style={{ maxWidth: '540px', alignItems: 'center', display: 'flex', position: 'relative'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={myProducts && myProducts.image} alt="Not found" width="200px" height="250px"></img>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h1 class="card-title">{myProducts && myProducts.model}</h1>
                                    <h3 class="card-text">Categoria: {myProducts && myProducts.category}</h3>
                                    <h3 class="card-text">Marca: {myProducts && myProducts.brand}</h3>
                                    <h5 class="card-text">Capacidad: {myProducts && myProducts.capacity}</h5>
                                    <h6 class="card-text">{myProducts && myProducts.description} </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/home" class="btn btn-dark">Volver</Link>
                </div>
                <Footer />
            </div>
            }
        </div>
    )
}
>>>>>>> 6a4c6d1f684fed0b01f115cfdbe11a43b556d83d

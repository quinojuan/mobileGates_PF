import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotebooksById, getClean } from "../../redux/Actions";
import { Link, useParams } from "react-router-dom";

export default function DetailsNotebook(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNotebooksById(id));
    return dispatch(getClean());
  }, [dispatch, id]);
  const myProducts = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loading);
  return (
    <div>
      <Link to="/home">Back</Link>

      {!loading ? (
        <div>
          <h1>{myProducts && myProducts.model}</h1>
          <h3>Category: {myProducts && myProducts.category}</h3>
          <h3>Brand: {myProducts && myProducts.brand}</h3>
          <h3>Price: {myProducts.price?myProducts.price.map(e=>"$"+e+". "):"Loading..."}</h3>
          <h3>Capacity: {myProducts.capacity?myProducts.capacity.map(e=>e+"Gb. "):"Loading..."}</h3>
          <img
            src={myProducts && myProducts.image}
            alt="Not found"
            width="200px"
            height="250px"
          ></img>
          <h6>{myProducts && myProducts.description} </h6>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhonesById, getClean } from "../../redux/Actions";
import { Link, useParams } from "react-router-dom";

export default function DetailsPhone(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPhonesById(id));
    return dispatch(getClean());
  }, [dispatch]);
  const myProducts = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loading);
  console.log(myProducts);
  return (
    <div>
      <Link to="/home">Back</Link>
      {!loading ? (
        <div>
          <h1>{myProducts && myProducts.model}</h1>
          <h3>Category: {myProducts && myProducts.category}</h3>
          <h3>Brand: {myProducts && myProducts.brand}</h3>
          <h3>
            Price:{" "}
            {myProducts.price
              ? myProducts.price.map((e) => "$" + e + ". ")
              : "Loading..."}
          </h3>
          <h3>
            Capacity:{" "}
            {myProducts.capacity
              ? myProducts.capacity.map((e) => e + "Gb. ")
              : "Loading..."}
          </h3>
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

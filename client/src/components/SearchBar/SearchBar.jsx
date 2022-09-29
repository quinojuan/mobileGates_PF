import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchName,
  getProductsByNameAndFilters,
  setSearch,
  searching
} from "../../redux/Actions/index";
import Swal from "sweetalert2";
import "./SearchBar.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function SearchBar({ setCurrentPage, setProductsPerPages, weAreInHome }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const filters = useSelector((state) => state.filters);
  const navigate = useNavigate();
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  useEffect(()=>{
    dispatch(getProductsByNameAndFilters(name.toLowerCase(), filters));
  },[dispatch])
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searching(true))
    if(!weAreInHome){
      dispatch(getProductsByNameAndFilters(name.toLowerCase(), filters));
      navigate("/home")
    }
    if (name.length !== 0) {
      dispatch(getProductsByNameAndFilters(name.toLowerCase(), filters));
      dispatch(setSearch(name.toLowerCase()));
    } else {
      Swal.fire("Tienes que ingresar un producto a buscar");
    }
    setCurrentPage(1);
  }
  return (
    // <div className="navbar bg-light">
    //   {weAreInHome?(<h2>Qué producto estas buscando?</h2>):null}
    //   <input class="form-control me-2"
    //     type="text"
    //     placeholder="Search..."
    //     onChange={(e) => handleInputChange(e)}
    //   />
    //   <button class="btn btn-dark" type="submit" onClick={(e) => handleSubmit(e)}>
    //     Search
    //   </button>
    // </div>

<nav class="navbar bg-dark">
<div class="container-fluid">
  <form class="d-flex" role="search">
    <input class="form-control me-2" type="search" placeholder="Buscar" onChange={(e) => handleInputChange(e)} aria-label="Search"/>
    <button class="btn btn-outline-light" type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
  </form>
</div>
</nav>
  );
}
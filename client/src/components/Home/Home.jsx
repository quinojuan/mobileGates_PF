import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getSort,
  setFilter,
  getProductsByNameAndFilters,
} from "../../redux/Actions/index";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Paginado from "../Paginated/Paginated";
import AddProducts from "../AddProducts/AddProducts";


import "./Home.css"

export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * productsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - productsPerPage;
  const currentProducts =
    allProducts && allProducts.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const search = useSelector((s) => s.search);
  //console.log(allProducts);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    !currentProducts.length && dispatch(getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    currentProducts.length && dispatch(getProductsByNameAndFilters(search, filters));
  }, [dispatch, filters]);
  const [orden, setOrden] = useState("");

    const dispatch = useDispatch()

    const allProducts = useSelector((state) => state.products)
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(9);
    const indexOfLastRecipe = currentPage * productsPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - productsPerPage;
    const currentProducts = allProducts && allProducts.slice(indexOfFirstRecipe, indexOfLastRecipe)
    console.log(allProducts)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    const [orden, setOrden] = useState("")

    function handleReload(e) {
        e.preventDefault()
        window.location.reload()
    }

    function changePage(pageNumber) {
        setCurrentPage(pageNumber)
    }
    function handleCategories(e) {
        e.preventDefault()
        dispatch(getFilterByCategories(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleRam(e) {
        e.preventDefault()
        dispatch(getFilterByRam(Number(e.target.value)))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleCapacity(e){
        e.preventDefault()
        dispatch(getFilterByCapacity(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleSort(e){
        e.preventDefault()
        dispatch(getSort(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
        <div className="home">
        
            <NavBar/>
        </div>
        <div>
            <button onClick={(e)=>handleReload(e)}>↻</button>
        </div>
        <div>
        <select onChange={(e)=>handleRam(e)}>
        <option value="disabled">Filter by RAM</option>
        <option value="2">2 GB</option>
        <option value="3">3 GB</option>
        <option value="4">4 GB</option>
        <option value="6">6 GB</option>
        <option value="8">8 GB</option>
        <option value="16">16 GB</option>
        <option value="32">32 GB</option>
        <option value="64">64 GB</option>
        </select>
        <select name="capacity" onChange={(e) => handleFilter(e)}>
          <option hidden>Almacenamiento</option>
          <option value="32">32 GB</option>
          <option value="64">64 GB</option>
          <option value="120">120 GB</option>
          <option value="128">128 GB</option>
          <option value="240">240 GB</option>
          <option value="256">256 GB</option>
          <option value="400">400 GB</option>
          <option value="480">480 GB</option>
          <option value="512">512 GB</option>
          <option value="1">1 TB</option>
        </select>
        <select name="category" onChange={(e) => handleFilter(e)}>
          <option hidden>Categoria</option>
          <option value="Notebooks">Notebooks</option>
          <option value="Tablets">Tablets</option>
          <option value="Phones">Celulares</option>
        </select>
        <select onChange={(e) => handleSort(e)}>
          <option hidden>Orden alfabético</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        </div>
        <div>
            <SearchBar
            setCurrentPage={setCurrentPage}
            setProductsPerPage={setProductsPerPage}
            />
        </div>
        <Paginado
            productsPerPage={productsPerPage}
            allProducts={allProducts?.length}
            paginado={paginado}
            changePage={changePage}
            currentPage={currentPage}

            />
            <div>
                {currentProducts && currentProducts.map(s => {
                    return (
                        <Link key={s.id} to={`/products/${s.category.toLowerCase()}/${s.id}`}>
                            <Cards model={s.model} image={s.image} brand={s.brand} id={s.id} category={s.category.toLowerCase()} />
                        </Link>
                    )
                })}
            </div>
            <hr />
            <Footer />
        </div>
    )
}

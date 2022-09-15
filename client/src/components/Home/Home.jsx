import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/Actions/index';
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Paginado from "../Paginated/Paginated";

import "./Home.css"

export default function Home() {

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
    
    function changePage(pageNumber){
        setCurrentPage(pageNumber)
    }

    return(
        <div className="home">
        
            <NavBar/>
            <SearchBar/>
        </div>
        <div>
            {allProducts&&allProducts.map(s=>{
                return(
                    <Link key={s.id} to={`/products/${s.category.toLowerCase()}/${s.id}`}>
                        <Cards model={s.model} image={s.image} brand={s.brand} id={s.id} category={s.category.toLowerCase()}/>
                    </Link>
                )
            })}
        </div>
        <hr />
        <Footer/>
        </div>
    )
}
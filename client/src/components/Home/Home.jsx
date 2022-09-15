import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/Actions/index';
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Paginado from "../Paginated/Paginated";

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
        <div>
        <div>
            <NavBar/>
        </div>
        <div>
        <select>
        <option value="disabled">Filter by RAM</option>
        <option value="ram2">2 GB</option>
        <option value="ram3">3 GB</option>
        <option value="ram4">4 GB</option>
        <option value="ram6">6 GB</option>
        <option value="ram8">8 GB</option>
        <option value="ram16">16 GB</option>
        <option value="ram32">32 GB</option>
        <option value="ram64">64 GB</option>
        </select>
        <select>
        <option value="disabled">Almacenamiento</option>
        <option value="GB32">32 GB</option>
        <option value="GB64">64 GB</option>
        <option value="GB120">120 GB</option>
        <option value="GB128">128 GB</option>
        <option value="GB240">240 GB</option>
        <option value="GB256">256 GB</option>
        <option value="GB400">400 GB</option>
        <option value="GB480">480 GB</option>
        <option value="TB1">1 TB</option>
        
        </select>
        <select>
        <option value="disabled">Categoria</option>
        <option value="notebooks">Notebooks</option>
        <option value="tablets">Tablets</option>
        <option value="celulares">Celulares</option>
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
            {currentProducts&&currentProducts.map(s=>{
                return(
                    <Link key={s.id} to={`/products/${s.category.toLowerCase()}/${s.id}`}>
                        <Cards model={s.model} image={s.image} brand={s.brand} id={s.id} category={s.category.toLowerCase()}/>
                    </Link>
                )
            })}
        </div>
        </div>
    )
}
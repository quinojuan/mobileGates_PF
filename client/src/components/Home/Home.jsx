import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/Actions/index';
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Home() {

    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)
    console.log(allProducts)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return(
        <div>
        <div>
            <NavBar/>
            <SearchBar/>
        </div>
        <div>
            {allProducts?.map(s=>{
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
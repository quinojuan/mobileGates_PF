import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/Actions/index';
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading"

export default function Home() {

    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return(
        <div>
            <h1>MóvilGates</h1>
        </div>
    )
}
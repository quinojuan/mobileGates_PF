import React from "react";
import { useDispatch } from 'react-redux';
import { searchName } from '../../redux/Actions/index'
import { useState } from "react";

export default function SearchBar({setCurrentPage, setProductsPerPage }) {

    const dispatch = useDispatch()
    const [name, setName]=useState("")
  
    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(name.length!==0){
            dispatch(searchName(name.toLowerCase()))
        } else {
            alert("Not found")
        }
        setCurrentPage(1)
        setName("")
    }

    return (
        <div>
            <h2>What are you looking for?</h2>
            <input type="text" placeholder="Search..." onChange={(e)=>handleInputChange(e)} /> 
            <button onClick={(e)=>handleSubmit(e)}>Search</button>
        </div>
    )

}
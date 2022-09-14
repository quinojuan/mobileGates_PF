import React from "react";
import { useDispatch } from 'react-redux';
import { searchName } from '../../redux/Actions/index'

export default function SearchBar() {

    const dispatch = useDispatch()
  
    const handleInputChange = (e) => {
        dispatch(searchName(e.target.value))
    }

    return (
        <div>
            <h2>Qué producto estas buscando?</h2>
            <input type="text" onChange={handleInputChange} placeholder="Buscá un producto..."/> 
        </div>
    )

}
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from '../../redux/Actions/index'
import "./SearchBar.css"

export default function SearchBar({ setCurrentPage, setProductsPerPages }) {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (name.length !== 0) {
            dispatch(searchName(name.toLowerCase()))
        } else {
            alert("You have to enter a word or your recipe dont exist")
        }
        setCurrentPage(1)
        setName("")

    }

    return (
        <div className="search-bar">
            <h2>Qué producto estas buscando?</h2>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => handleInputChange(e)}
            />
            <button className="btn2" type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )

}


// import React from "react";
// import { useDispatch } from 'react-redux';
// import { searchName } from '../../redux/Actions/index'
// import { useState } from "react";

// import "./SearchBar.css"

// export default function SearchBar({setCurrentPage, setProductsPerPage }) {

//     const dispatch = useDispatch()
//     const [name, setName]=useState("")
  
//     // function handleInputChange(e){
//     //     e.preventDefault();
//     //     setName(e.target.value)
//     // }
//     const info = (e) => {
//         dispatch(searchName(e.target.value))
//         setName(e.target.value)
//      }
//     function handleSubmit(e){
//         e.preventDefault()
//         if(name.length!==0){
//             dispatch(searchName(name.toLowerCase()))
//         } else {
//             alert("Not found")
//         }
//         setCurrentPage(1)
//         setName("")
//     }

//     return (
//         <div className="search-bar">
//             <h2>Qué producto estas buscando?</h2>
//             {/* <input type="text" placeholder="Search..." onChange={(e)=>handleInputChange(e)} />  */}
//             <input type="text" placeholder="Buscá un producto..." onChange={info} /> 
//             {/* <button onClick={(e)=>handleSubmit(e)}>Search</button> */}
//         </div>
//     )

// }
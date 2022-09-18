import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchName, getProductsByNameAndFilters, setSearch } from "../../redux/Actions/index";
//import Swal from "sweetalert2";
import "./SearchBar.css";

export default function SearchBar({ setCurrentPage, setProductsPerPages }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const filters = useSelector((state) => state.filters);

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name.length !== 0) {
      dispatch(getProductsByNameAndFilters(name.toLowerCase(), filters));
      dispatch(setSearch(name.toLowerCase()));
    } else {
     // Swal.fire("Tienes que ingresar un producto a buscar");
    }
    setCurrentPage(1);
  }

  return (
    <div >
      <h2>Qué producto estas buscando?</h2>
      <div className="search-bar">
      <input
        class= "form-control me-2 center" type="search" placeholder="Buscar" aria-label="Search"
        onChange={(e) => handleInputChange(e)}
      />
      </div>
      
      <button class="btn btn-outline-success btn-sm" type="submit" Search onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
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

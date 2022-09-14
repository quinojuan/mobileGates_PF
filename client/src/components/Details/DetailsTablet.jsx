// import React from "react";
// import { useEffect } from "react";
// import {useSelector, useDispatch} from "react-redux";
// import { getNotebooksById, getPhonesById, getTabletsById } from "../../redux/Actions";
// import {Link, useHistory, useParams} from "react-router-dom";

// export default function Details(props){
//     const dispatch= useDispatch()
//     const history=useHistory()
//     const {id}= useParams

//     useEffect(()=>{
//         dispatch(getTabletsById(props.matchs.params.id))
//     }, [dispatch])
//     const myProducts=useSelector((state)=>state.details)
//     return(
//         <div>
//             <Link to="/">Back</Link>
//             {
//                 myProducts && myProducts.length > 0 ?
//                     <div>
//                         <h1>{myProducts.model}</h1>
//                         <h3>Category: {myProducts.category}</h3>
//                         <h3>Dish types: {myProducts.brand}</h3>
//                         <h3> Colors: {myProducts.colors}</h3>
//                         <h5 >Capacity: { myProducts[0].capacity}</h5>
//                         <img src={myProducts.image} alt="Not found" width="200px" height="250px"></img>
//                         <h6>{myProducts.summary} </h6>
//                     </div> : <div><div><h4>Loading...</h4></div></div>
//             }
//         </div>
//     )
// }
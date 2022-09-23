// import React from "react";
// import { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { getPurchase, postPurchase } from "../../redux/Actions";
// import { useDispatch, useSelector } from "react-redux";
// import "./Create.css"
// import Swal from "sweetalert2";


// export default function formPurchase() {


//     // Validates 

//     function validate() {
//         let errors = {};
//         if (input.email === "") {
//             errors.email = "Email es requerido!";

//         } else if (input.email.length < 3) {
//             errors.email = "Minimo 3 letras."

//         } else if (!input.creditCard) {
//             errors.creditCard = "Credit card debe estar completo.";
            
//         }  
//          else if (input.creditCard.length >10 ) {
//             errors.creditCard = "Maximo 10 numeros.";

//         } else if (input.dni === "") {
//             errors.email = "Dni es requerido!";

//         } else if (input.dni.length>8) {
//             errors.dni = "Maximo 8 numeros."

//         } else if (input.adress === "") {
//             errors.adress = "Dirección requerida!"

//         } else if (input.birthday==="") {
//             errors.birthday = "Fecha de nacimiento es requerida."

//         } 
        
//         return errors;
//     }





//     // Validates 

//     const dispatch = useDispatch()
//     // const purchase = useSelector(state => state.purchase)((FALTA ACTION))
    
//     let history = useHistory();
//     const [errors, setErrors] = useState({})
//     const [input, setInput] = useState({
//         email: "",
//         creditCard: "",
//         dni: "",
//         adress: "",
//         birthday: "",
//     })

//     const handleChange = (e) => {

//         setInput({
//             ...input,
//             [e.target.email]: e.target.value
//         })
//         setErrors(validate({
//             ...input,
//             [e.target.value]: e.target.value
//         }))
//         //  console.log(input)
//     }

//     const handleSelect = (e) => {
//         setErrors(validate({
//             ...input,
//             [e.target.value]: e.target.value
//         }))
//         //  console.log(input)
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setErrors(validate(input));
//         const errorSave = validate(input);
//         if (Object.values(errorSave).length !== 0) {
//             alert("No pudimos realizar la compra, fijese los requisitos pedidos")
//         } else {
//             dispatch(postPurchase(input))
//             Swal.fire("Compra realizada")
//             setInput({
//                 email: "",
//                 creditCard: "",
//                 dni: "",
//                 adress: "",
//                 birthday: "",
//             })
//             history.push("/home")
//         }




//     }

//     useEffect(() => {
//         // dispatch(getPurchase()) ((creo que va getUsers))
//     }, [dispatch])


//     return (
//         <div >
//             <Link to="/home">
//                 <span>back</span>
//             </Link>

//             <form onSubmit={(e) => handleSubmit(e)} >

//                 <label>Email</label>
//                 <div>
//                     <input
//                         type="text"
//                         value={input.email}
//                         name="email"
//                         onChange={handleChange}
//                     />
//                     {
//                         errors.email && (
//                             <p >{errors.email}</p>
//                         )
//                     }
//                 </div>

//                 <label>Tarjeta de credito</label>
//                 <div>
//                     <input
//                         type="number"
//                         value={input.creditCard}
//                         name="creditCard"
//                         onChange={handleChange}
//                     />
//                     {
//                         errors.creditCard && (
//                             <p>{errors.creditCard}</p>
//                         )
//                     }
//                 </div>

//                 <label>DNI</label>
//                 <div>
//                     <input
//                         type="number"
//                         value={input.dni}
//                         name="dni"
//                         onChange={handleChange}
//                     />
//                     {
//                         errors.dni && (
//                             <p >{errors.dni}</p>
//                         )
//                     }
//                 </div>

//                 <label>Dirección</label>
//                 <div>

//                     <input
//                         type="text"
//                         value={input.adress}
//                         name="adress"
//                         onChange={handleChange}
//                     />
//                     {
//                         errors.adress && (
//                             <p>{errors.adress}</p>
//                         )
//                     }
//                 </div>

//                 <label>Fecha de nacimiento</label>
//                 <div>
//                     <input
//                         type="text"
//                         value={input.adress}
//                         name="adress"
//                         onChange={handleChange}
//                     />
//                     {
//                         errors.adress && (
//                             <p>{errors.adress}</p>
//                         )
//                     }

//                 </div>
//                 <button type="submit" onSubmit={handleSubmit}>Comprar</button>

//             </form>

        

//         </div>
//     )
// }

import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPurchase, postPurchase } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";


export default function FormPurchase() {


    // Validates 

    function validate() {
        let errors = {};
        if (!input.creditCard) {
            errors.creditCard = "Credit card debe estar completo.";
            
        }  
         else if (input.creditCard.length !==16 ) {
            errors.creditCard = "Deben ser 16 números.";

        } else if (input.dni === "") {
            errors.dni = "Dni es requerido!";

        } else if (input.dni.length>8) {
            errors.dni = "Maximo 8 numeros."

        } else if(!Number(input.dni)){
            errors.dni="Debe ser un numero"
        } 
        else if (input.adress === "") {
            errors.adress = "Dirección requerida!"

        } else if (input.birthday==="") {
            errors.birthday = "Fecha de nacimiento es requerida."

        } 
        
        return errors;
    }





    // Validates 
    const carts= useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    // const purchase = useSelector(state => state.purchase)
    
    let navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        email: "",
        creditCard: "",
        dni: "",
        adress: "",
        birthday: "",
    })

    const handleChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.value]: e.target.value
        }))
        //  console.log(input)
    }

    // const handleSelect = (e) => {
    //     setErrors(validate({
    //         ...input,
    //         [e.target.value]: e.target.value
    //     }))
    //     //  console.log(input)
    // }


    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(input));
        const errorSave = validate(input);
        if(!input.email){
            Swal.fire("Ingrese un email valido")
        } else if(input.creditCard.length!==16){
            Swal.fire("La tarjeta de credito debe tener 16 dígitos.")
        } else if(input.dni.length!==8 || input.dni.length!==7){
            Swal.fire("El DNI debe tener 7 u 8 digitos sin puntos.")
        } else if(!input.adress.length){
            Swal.fire("Debes completar tu dirección.")
        } else if(!input.birthday.length){
            Swal.fire("Debe completar con su fecha de nacimiento.")
        }
        if (Object.values(errorSave).length !== 0) {
            Swal.fire("No pudimos realizar la compra, fijese los requisitos pedidos")
        } else {
            dispatch(postPurchase(input))
            Swal.fire("Compra realizada")
            setInput({
                email: "",
                creditCard: "",
                dni: "",
                adress: "",
                birthday: "",
            })
            navigate("/home")
        }




    }

    useEffect(() => {
        dispatch(getPurchase()) 
    }, [dispatch])

    if(carts.length){
    return (
        <div>
        <NavBar/>
        <div >
            <Link to="/home">
                <span>back</span>
            </Link>

            <form onSubmit={(e) => handleSubmit(e)} >

                <label>Email</label>
                <div>
                    <input
                        type="email"
                        value={input.email}
                        name="email"
                        onChange={(e)=>handleChange(e)}
                    />
                    

                </div>

                <label>Tarjeta de credito</label>
                <div>
                    <input
                        type="text"
                        value={input.creditCard}
                        name="creditCard"
                        onChange={(e)=>handleChange(e)}
                    />
                    {
                        errors.creditCard && (
                            <p>{errors.creditCard}</p>
                        )
                    }
                </div>

                <label>DNI</label>
                <div>
                    <input
                        type="text"
                        value={input.dni}
                        name="dni"
                        onChange={(e)=>handleChange(e)}
                    />
                    {
                        errors.dni && (
                            <p >{errors.dni}</p>
                        )
                    }
                </div>

                <label>Dirección</label>
                <div>

                    <input
                        type="text"
                        value={input.adress}
                        name="adress"
                        onChange={(e)=>handleChange(e)}
                    />
                    {
                        errors.adress && (
                            <p>{errors.adress}</p>
                        )
                    }
                </div>

                <label>Fecha de nacimiento</label>
                <div>
                    <input
                        type="date"
                        value={input.birthday}
                        name="birthday"
                        onChange={(e)=>handleChange(e)}
                    />
                    {
                        errors.adress && (
                            <p>{errors.birthday}</p>
                        )
                    }

                </div>
                <div>
                    
                        {carts?.map((s)=>(<img src={s.image}/>))}
                    
                </div>
                <button type="submit" onSubmit={(e)=>handleSubmit(e)}>Comprar</button>

            </form>

        

        </div>
        </div>
        
    )
} else {
    return (
        <h1>Debes agregar mínimo un producto al carrito para realizar tu compra</h1>
        
    )
}
}
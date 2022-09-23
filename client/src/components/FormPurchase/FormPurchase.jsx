import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPurchase, postPurchase } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";


export default function FormPurchase() {




    





    const carts = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    // const purchase = useSelector(state => state.purchase)
    
    let navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [hayError,setHayError] = use(false);
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
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if(hayError){
            console.log(null);
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
                    {
                        errors.email && (
                            <p >{errors.email}</p>
                        )
                    }
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
        
    )
} else {
    return (
        <h1>Debes agregar mínimo un producto al carrito para realizar tu compra</h1>
    )
}
}

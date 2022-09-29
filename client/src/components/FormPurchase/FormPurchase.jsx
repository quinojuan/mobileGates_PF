import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPurchase, addInputPurchase } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import { useAuth } from "../Context/authContext";

export default function FormPurchase() {
  const { user } = useAuth();

  // Validates

  function validate() {
    let errors = {};
    if (!input.creditCard) {
      errors.creditCard = "Credit card debe estar completo.";
    } else if (input.creditCard.length !== 16) {
      errors.creditCard = "Deben ser 16 números.";
    } else if (input.dni === "") {
      errors.dni = "Dni es requerido!";
    } else if (input.dni.length > 8) {
      errors.dni = "Maximo 8 numeros.";
    } else if (!Number(input.dni)) {
      errors.dni = "Debe ser un numero";
    } else if (input.adress === "") {
      errors.adress = "Dirección requerida!";
    } else if (input.birthday === "") {
      errors.birthday = "Fecha de nacimiento es requerida.";
    }

    return errors;
  }
  // Validates
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // const purchase = useSelector(state => state.purchase)

  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    dni: "",
    adress: "",
    birthday: "",
    email: user.email,
    products: carts,
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.value]: e.target.value,
      })
    );
    //  console.log(input)
  };

  // const handleSelect = (e) => {
  //     setErrors(validate({
  //         ...input,
  //         [e.target.value]: e.target.value
  //     }))
  //     //  console.log(input)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors(validate(input));
    /*  const errorSave = validate(input);
        if(input.dni.length!==8 || input.dni.length!==7){
            Swal.fire("El DNI debe tener 7 u 8 digitos sin puntos.")
        } else if(!input.adress.length){
            Swal.fire("Debes completar tu dirección.")
        } else if(!input.birthday.length){
            Swal.fire("Debe completar con su fecha de nacimiento.")
        }
        if (Object.values(errorSave).length !== 0) {
            Swal.fire("No pudimos realizar la compra, fijese los requisitos pedidos")
        } else  */
    // dispatch(postPurchase(input))
    // Swal.fire("Compra realizada")
    setInput({
      dni: "",
      adress: "",
      birthday: "",
      email: user.email,
      products: carts,
    });
    dispatch(addInputPurchase(input));
    navigate("/check");
  };

  useEffect(() => {
    dispatch(getPurchase());
  }, [dispatch]);

  if (carts.length) {
    return (
      <div>
        <NavBar />
        <div>
          {/* <Link to="/home">
                <span >back</span>
            </Link> */}

          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <label>Email</label>
                <div>
                    <input
                        type="email"
                        value={input.email}
                        name="email"
                        onChange={(e)=>handleChange(e)}/>
                </div> */}
            <div className="list-group-item-secondary">
              <div className="jumbotron jumbotron-fluid text-center py-2">
                <h4 className="display-4"> Confirmación de Compra </h4>
                <hr />
                <p className="lead">
                  {" "}
                  Estos datos son necesarios para finalizar tu compra. Asegura
                  que sean correctos antes de confirmar{" "}
                </p>
              </div>
            </div>
            {/*  <div className='col-md-12 mb-2 mt-5'>
                <label>Tarjeta de credito</label>
                <div>
                    <input
                        type="text"
                        className='form-control w-50 mx-auto'
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
                    </div> */}
            <div className="col-md-12 mb-2">
              <label>DNI</label>
              <div>
                <input
                  type="text"
                  className="form-control w-50 mx-auto"
                  value={input.dni}
                  name="dni"
                  onChange={(e) => handleChange(e)}
                />
                {errors.dni && <p>{errors.dni}</p>}
              </div>
            </div>
            <div className="col-md-12 mb-2">
              <label>Dirección</label>
              <div>
                <input
                  type="text"
                  className="form-control w-50 mx-auto"
                  value={input.adress}
                  name="adress"
                  onChange={(e) => handleChange(e)}
                />
                {errors.adress && <p>{errors.adress}</p>}
              </div>
            </div>
            <div className="col-md-12 mb-2">
              <label>Fecha de nacimiento</label>
              <div>
                <input
                  type="date"
                  className="form-control w-50 mx-auto"
                  value={input.birthday}
                  name="birthday"
                  onChange={(e) => handleChange(e)}
                />
                {errors.adress && <p>{errors.birthday}</p>}
              </div>
            </div>
            {/* <div className='row container w-25'>
                        {carts?.map((s)=>(<img src={s.image}/>))}
                </div> */}
            <div className="sendEmail">
              <button
                className="btn btn-primary"
                type="submit"
                onSubmit={(e) => handleSubmit(e)}
              >
                Ir al metodo de pago
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <h3 class="alert-heading">
        Debes agregar mínimo un producto al carrito para realizar tu compra
      </h3>
    );
  }
}

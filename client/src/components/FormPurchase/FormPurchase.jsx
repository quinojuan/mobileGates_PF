import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPurchase, addInputPurchase } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";

const addCartButton = {
  color: "white",
  backgroundColor: "DodgerBlue",
  margin: "10px",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "8px",
  paddingBottom: "8px",
  borderRadius: "5px",
  fontSize: "15px",
};

export default function FormPurchase() {
  const logged = useSelector((state) => state.loggedUser);
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
    email: logged.email,
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
    const date = new Date();
    let fecha = input.birthday.toString();
    let day = Number(fecha.substr(8, 9));
    let month = Number(fecha.substr(5, 2));
    let year = Number(fecha.substr(0, 4));
    let actDay = date.getDate();
    let actMonth = date.getMonth() + 1;
    let actYear = date.getFullYear();
    let todoOk = true;
    function checkDate() {
      if (actYear - year > 16 && actYear - year < 122) {
        return true;
      } else if (actYear - year === 0) {
        if (actMonth - month > 0) {
          return true;
        } else if (actMonth - month === 0) {
          if (actDay - day > 0) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    todoOk = checkDate();
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
    if (!Number(input.dni)) {
      Swal.fire("El DNI solo debe estar compuesto de numeros");
    } else if (input.dni.length < 7 || input.dni.length > 8) {
      Swal.fire("INGRESE UN DNI VALIDO");
    } else if (!todoOk) {
      Swal.fire("INGRESE UNA FECHA VALIDA");
    } else {
      dispatch(addInputPurchase(input));
      setInput({
        dni: "",
        adress: "",
        birthday: "",
        email: logged.email,
        products: carts,
      });
      navigate("/check");
    }
  };
  console.log("ESTAMOS ENTRANDO AL PURCHASE");
  useEffect(() => {
    dispatch(getPurchase());
  }, [dispatch]);

  if (carts.length && logged.email) {
    return (
      <div>
        <NavBar />
        <div>
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
                <h4 className="display-4 mt-5"> Confirmación de Compra </h4>
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
            <div className="col-md-12 mb-2 mt-3">
              <label>DNI</label>
              <div>
                <input
                  type="text"
                  className="form-control w-25 mx-auto"
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
                  className="form-control w-25 mx-auto"
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
                  className="form-control w-25 mx-auto"
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
                class="btn btn-primary text-decoration-none text-light"
                style={addCartButton}
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
  } else if (!logged.email) {
    return (
      <div>
        <h3 class="alert-heading">
          Debes estar logeado para poder realizar compras
        </h3>
        <Link to="/home/login">
          <button>Ir al login</button>
        </Link>
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

import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import administrar from "../../images/administrar.png";
import { useEffect } from "react";
import { getPurchase, getUsers, getQas  } from "../../redux/Actions";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export default function AdminPages() {
  const dispatch = useDispatch();
  const { user, logout, loading } = useAuth();
  const logedUser = useSelector((state) => state.loggedUser);
  const usersAdmin = useSelector((state) => state.usersAdmins);
  const questions = useSelector((state) => state.qas)
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPurchase());
  }, [dispatch]);
  console.log("logedUser: ", logedUser);

  const mail = logedUser?.email
  let funcionAuxiliar = (email) => {
    if (
      usersAdmin.filter((e) => e.email?.toLowerCase() === email?.toLowerCase())
        .length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (funcionAuxiliar(mail)) {
    return (
      <div>
      <NavBar />
      <div class="container w-50 mt-5">
        <div class="d-grid gap-4 col-6 mx-auto h-20">
          <a href="/addphone" class="btn btn-success">Agregar un producto</a>
          <a href="/phonestable" class="btn btn-danger">Modificar un producto</a>
          <a href="/manageuser" class="btn btn-dark">Administrar usuarios</a>
          <a href="/allpurchases" class="btn btn-dark">Todas las compras</a>
          <a href="/managequestions" class="btn btn-dark">Preguntas de usuarios</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else if(logedUser) {
    return (
      <div>
        <h1> CARGANDO</h1>
        
      </div>
    );
  }
  else{
    return (
      <div>
        <h1> DEBE SER ADMINISTRADOR PARA INGRESAR AQUI</h1>
        <Link to="/home">
          <button>Click aqui para volver al home</button>
        </Link>
      </div>
    );
  }
}

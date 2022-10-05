import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import administrar from "../../images/administrar.png";
import { useEffect } from "react";
import { getPurchase, getUsers, getQas } from "../../redux/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export default function AdminPages() {
  const dispatch = useDispatch();
  const { user, logout, loading } = useAuth();
  const logedUser = useSelector((state) => state.loggedUser);
  const usersAdmin = useSelector((state) => state.usersAdmins);
  const questions = useSelector((state) => state.qas);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPurchase());
  }, [dispatch]);
  console.log("logedUser: ", logedUser);

  const mail = logedUser?.email;
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
        <div className="row p-5 w-100 mt-5" style={{ minHeight: "800px" }}>
          <div className="col-md-3 text-center">
            <h5>Productos</h5>
            <hr />
            <div className="h1 mb-4">
              <FontAwesomeIcon icon="fa-solid fa-mobile-retro" />
            </div>
            <Link to="/addphone">
              <button type="button" className="Sbutton ">
                Agregar Producto
              </button>
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <h5>Editar</h5>
            <hr />
            <div className="h1 mb-4">
              <FontAwesomeIcon icon="fa-solid fa-square-pen" />
            </div>
            <Link to="/phonestable">
              <button type="button" className="Sbutton ">
                Editar Producto
              </button>
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <h5>Usuarios</h5>
            <hr />
            <div className="h1 mb-4">
              <FontAwesomeIcon icon="fa-solid fa-user-pen" />
            </div>
            <Link to="/manageuser">
              <button type="button" className="Sbutton ">
                Ver Usuarios
              </button>
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <h5>Ordenes</h5>
            <hr />
            <div className="h1 mb-4">
              <FontAwesomeIcon icon="fa-solid fa-box-open" />
            </div>
            <Link to="/allpurchases">
              <button type="button" className="Sbutton ">
                Ver Ordenes
              </button>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h5>Preguntas</h5>
            <hr />
            <div className="h1 mb-4">
              <FontAwesomeIcon icon="fa-solid fa-file-circle-question" />
            </div>
            <Link to="/managequestions">
              <button type="button" className="Sbutton">
                Ver Preguntas
              </button>
            </Link>
          </div>
          {/* <div class="d-grid gap-4 col-6 mx-auto h-20">
          <a href="/addphone" class="btn btn-success mt-5">Agregar un producto</a>
          <a href="/phonestable" class="btn btn-danger">Modificar un producto</a>
          <a href="/manageuser" class="btn btn-dark">Administrar usuarios</a>
        </div> */}
          {/* <a href="/allpurchases" class="btn btn-dark">Todas las compras</a>
          <a href="/managequestions" class="btn btn-dark">Preguntas de usuarios</a> */}
        </div>

        <Footer />
      </div>
    );
  } else if (logedUser && !funcionAuxiliar(mail)) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>NECESITAS ESTAR LOGEADO Y SER ADMIN PARA ESTAR AQUI</h1>
        <Link to="/home">
          <button>IR AL INICIO</button>
        </Link>
      </div>
    )
  }
}

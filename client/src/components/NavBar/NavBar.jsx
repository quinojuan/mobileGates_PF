import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import {
  getProductsByNameAndFilters,
  getUsers,
  setSearch,
} from "../../redux/Actions";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../Loading/Loading";
import { handleReload } from "../Home/Home";
import { useState, useEffect } from "react";
import image from "../../images/mglogo.jpg";

const buttonStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  marginRight: "10px",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingTop: "7px",
  paddingBottom: "7px",
  borderRadius: "5px",
  fontSize: "15px",
};

export default function NavBar() {
  const logedUser = useSelector((state) => state.loggedUser);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [name, setName] = useState("");
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const usersAdmin = useSelector((state) => state.usersAdmins);
  const handleLogout = async () => {
    await logout();
    navigate("/home/login");
    document.location.reload();
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  function handleReload(e) {
    e.preventDefault();
    window.location.reload();
  }
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
      Swal.fire("Tienes que ingresar un producto a buscar");
    }
    setCurrentPage(1);
  }
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
    // console.log("ENTRANDO AL PRIMER IF");
    return (
      <nav className="container">
        <div className="navbar fixed-top navbar navbar-expand-md bg-dark">
          <div className="container-fluid">
            <Link
              to="/home"
              class="navbar-brand text-white"
              className="nav-link active text-white"
              aria-current="page"
            >
              Móvil Gates
            </Link>
            {/* <h1 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </h1> */}
            <SearchBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              weAreInHome={false}
            />
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  {/*  <a className="nav-link active text-white" aria-current="page" href="/home">Home</a> */}
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Quienes somos?</a>
                </li> */}
                <li className="nav-item">
                  <a
                    type="button"
                    className="nav-link active"
                    href="#"
                    style={buttonStyle}
                    onClick={() => navigate("/products/Cart")}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-cart-shopping"
                      style={{ color: "white" }}
                    />
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <div class="dropdown show">
                    <a
                      class="nav-link dropdown-toggle"
                      style={buttonStyle}
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={["fas", "user"]} />
                      {logedUser.displayName}
                    </a>
                    <div
                      class="dropdown-menu bg-dark"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {/* <a class="dropdown-item" href="#">Mi perfil</a> */}
                      <a class="dropdown-item text-light" href="/adminpages">
                        Panel del admin
                      </a>
                      <a class="dropdown-item text-light" href="/userpanel">
                        Panel del Usuario
                      </a>
                      <a
                        className="dropdown-item"
                        href="/home"
                        onClick={() => handleLogout()}
                      ></a>
                      <a
                        className="dropdown-item text-light"
                        href="#"
                        onClick={() => handleLogout()}
                      >
                        Cerrar sesión
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  } else if (Object.keys(logedUser).length) {
    console.log("entrando al 2do if");
    return (
      <nav className="container">
        <div className="navbar fixed-top navbar navbar-expand-md bg-dark">
          <div className="container-fluid">
            <Link
              to="/home"
              class="navbar-brand text-white"
              className="nav-link active text-white"
              aria-current="page"
            >
              Móvil Gates
            </Link>
            {/* <h1 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </h1> */}
            <SearchBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              weAreInHome={false}
            />
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  {/*  <a className="nav-link active text-white" aria-current="page" href="/home">Home</a> */}
                </li>
                {/* <li className="nav-item">
                <a className="nav-link active text-white" href="#">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">Quienes somos?</a>
              </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#"
                    onClick={() => navigate("/products/Cart")}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-cart-shopping"
                      className="h5 me-2"
                      style={{ color: "DodgerBlue" }}
                    />
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <div class="dropdown show">
                    <a
                      class="nav-link dropdown-toggle text-white"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <FontAwesomeIcon icon={["fas", "user"]} />
                      Hola, {logedUser.displayName}
                    </a>
                    <div
                      class="dropdown-menu bg-dark"
                      aria-labelledby="dropdownMenuLink"
                    >
                      {/* <a class="dropdown-item" href="#">Mi perfil</a> */}
                      <a class="dropdown-item text-light" href="/userpanel">
                        Panel del Usuario
                      </a>
                      {/*<a
                        className="dropdown-item"
                        href="/home"
                        onClick={()=>handleLogout()}
                      ></a>*/}
                      <a
                        className="dropdown-item text-light"
                        href="#"
                        onClick={() => handleLogout()}
                      >
                        Cerrar sesión
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    console.log("ENTRANDO AL 3er IF");
    return (
      <nav>
        <div className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white">Móvil Gates</a>
            <h1
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </h1>
            <SearchBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              weAreInHome={false}
            />
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">
                    Quienes somos?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="/home/login">
                    Ingresá
                  </a>
                </li>
                <li>|</li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    href="/home/createuser"
                  >
                    Registrate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

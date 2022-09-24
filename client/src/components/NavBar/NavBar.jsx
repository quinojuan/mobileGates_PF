import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css"
import { useAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { handleReload } from '../Home/Home'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { getProductsByNameAndFilters, setSearch } from '../../redux/Actions';
import Swal from 'sweetalert2';


export default function NavBar() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [name, setName] = useState("");
  const { user, logout, loading } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/home/')


  }
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
  if (loading) {
    return (
      <div><Loading /></div>
    )
  } else if (user) {
    return (
      <nav className='container'>
        <div className="navbar fixed-top navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link to='/home' class='navbar-brand text-white' className="nav-link active text-white" aria-current="page" >Móvil Gates</Link>
            {/* <h1 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </h1> */}
            <SearchBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              weAreInHome={false}
            />
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Quienes somos?</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#" onClick={() => navigate("/products/Cart")}>Carrito 🛒</a>
                </li>
                <li class="nav-item dropdown">
                  <div class="dropdown show">
                    <a class="nav-link dropdown-toggle text-white" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Hola, {user.email.split('@')[0]}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">Mi perfil</a>
                      <a class="dropdown-item" href="/addproducts">Panel del admin</a>
                      <a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar sesión</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <div className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" >Móvil Gates</a>
            <h1 className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </h1>
            <SearchBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              weAreInHome={false}
            />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">Quienes somos?</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="/home/login">Ingresá | Registrate</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }



}

import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getSort,
  setFilter,
  getProductsByNameAndFilters,
  getCart,
  getCategories,
  setLoading,
  getRams,
  getCapacity,
  getSortByPrice,
  getClean,
  getFeedbacks,
  getUsers,
  getQas,
  cleanSearch,
} from "../../redux/Actions/index";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import Paginado from "../Paginated/Paginated";
import AddProducts from "../AddProducts/AddProducts";
import Loading from "../Loading/Loading";
import "./Home.css";
import Swat from "sweetalert2";
import Carousel from "../Carousel/Carousel";
import { useAuth } from "../Context/authContext";
import { async } from "@firebase/util";

export default function Home() {
  const dispatch = useDispatch();
  const buscando = useSelector((state) => state.searching);
  const allProducts = useSelector((state) => state.products);
  const loggedUser = useSelector((state) => state.loggedUser);
  const allUsers = useSelector((state) => state.users);
  const filters = useSelector((state) => state.filters);
  const loading = useSelector((state) => state.loading);
  const brands = useSelector((state) => state.categories);
  const rams = useSelector((state) => state.rams);
  const capacity = useSelector((state) => state.capacities);
  const [firstTime, setFirstTime] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * productsPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - productsPerPage;
  const currentProducts =
    allProducts && allProducts.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const navigate = useNavigate();
  const { logout } = useAuth();
  const search = useSelector((s) => s.search);
  const [price, setPrice] = useState("");
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const validate = async () => {
    let user = allUsers?.find((u) => u.email === loggedUser.email);
    if (!user) return true;
    if (!user.active) {
      Swat.fire("Usuario baneado o inexistente", "", "warning").then(
        async () => {
          await logout();
          navigate("/home/login");
          document.location.reload();
        }
      );
    }
    return true;
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getCart());
    dispatch(getCategories());
    dispatch(getRams());
    dispatch(getCapacity());
    dispatch(getFeedbacks());
    dispatch(getQas());
    validate();
    !currentProducts.length && dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsByNameAndFilters(search, filters));
    dispatch(getClean());
  }, [dispatch, filters, search]);
  const [orden, setOrden] = useState("");

  useEffect(() => {
    currentProducts.length && setFirstTime(false);
  }, [currentProducts]);

  function handleReload(e) {
    e.preventDefault();
    window.location.reload();
  }
  function changePage(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function handleFilter(e) {
    dispatch(setLoading(true));
    dispatch(setFilter(e.target.value, e.target.name));
    setCurrentPage(1);

    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleSort(e) {
    e.preventDefault();
    dispatch(getSort(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleSortByPrice(e) {
    e.preventDefault();
    dispatch(getSortByPrice(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleLoading() {
    if (loading) {
      return (
        <div>
          <div>
            <Loading />
          </div>
        </div>
      );
    } else {
      if (!firstTime) {
        Swat.fire({
          title: "No se encontraron productos con su criterio de busqueda",
          confirmButtonText: "Entendido",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(cleanSearch());
            return window.location.reload();
          }
        });
      }
    }
  }
  function handleBuscando(e) {
    if (currentProducts)
      return (
        <div>
          <h1>Buscando resultados de: "{e}"</h1>
        </div>
      );
  }

  return (
    <div>
      <div className="home">
        <NavBar />
        {/* <SearchBar 
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				weAreInHome={true}
				/> */}
        <div>
          <Carousel />
        </div>
      </div>
      {/* { <div className="btn-reload">
				<button class="btn btn-dark" onClick={(e) => handleReload(e)}>
					Reiniciar busqueda ↻
				</button>
			</div> } */}
      <div class="btn-group w-100 mt-2">
        <select
          class="form-select bg-dark text-light me-2"
          aria-label="Default select example"
          name="ram"
          onChange={(e) => handleFilter(e)}
        >
          <option hidden>Memoria RAM</option>
          <option value="">Todos</option>
          {rams.map((s) => (
            <option key={s} value={s}>
              {s} GB
            </option>
          ))}
        </select>
        <select
          class="form-select bg-dark text-light me-2"
          aria-label="Default select example"
          name="capacity"
          onChange={(e) => handleFilter(e)}
        >
          <option hidden>Almacenamiento</option>
          <option value="">Todos</option>
          {capacity.map((s) =>
            s < 10 ? (
              <option key={s} value={s}>
                {s} TB
              </option>
            ) : (
              <option key={s} value={s}>
                {s} GB
              </option>
            )
          )}
        </select>
        <select
          class="form-select bg-dark text-light me-2"
          aria-label="Default select example"
          name="brand"
          onChange={(e) => handleFilter(e)}
        >
          <option hidden>Marca</option>
          <option value="">Todos</option>
          {brands?.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select
          class="form-select bg-dark text-light me-2"
          aria-label="Default select example"
          onChange={(e) => handleSort(e)}
        >
          <option hidden>Orden alfabético</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select
          class="form-select bg-dark text-light me-2"
          aria-label="Default select example"
          onChange={(e) => handleSortByPrice(e)}
        >
          <option hidden>Orden por precio</option>
          <option value="value">Mayor a menor precio</option>
          <option value="High to low">Menor a mayor precio</option>
        </select>
      </div>
      <div>
        {/* <SearchBar
          setCurrentPage={setCurrentPage}
          setProductsPerPage={setProductsPerPage}
        /> */}
      </div>
      <div class="mt-3">
        <Paginado
          productsPerPage={productsPerPage}
          allProducts={allProducts?.length}
          paginado={paginado}
          changePage={changePage}
          currentPage={currentPage}
        />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 justify-content-center">
        {buscando ? handleBuscando(search) : null}
        {!loading ? (
          currentProducts.length ? (
            currentProducts.map((s) => {
              return (
                <>
                  {/* <Link
										class="text-decoration-none"
										key={s.id}
										to={`/products/${s.id}`}
									> */}
                  {/* {console.log("este es mi current card", currentProducts)} */}
                  <Cards
                    model={s.model}
                    image={s.image}
                    brand={s.brand}
                    id={s.id}
                    inches={s.inches}
                    operative_system={s.operative_system}
                    capacity={s.capacity}
                    price={s.price[0]}
                    stock={s.stock}
                  />

                  {/* </Link> */}
                  {/* <AddProducts id={s.id} /> */}
                </>
              );
            })
          ) : (
            <div>
              <h1>{handleLoading()}</h1>
            </div>
          )
        ) : (
          <div>
            <h1>{handleLoading()}</h1>
          </div>
        )}
      </div>
      <hr />
      <Footer />
    </div>
  );
}

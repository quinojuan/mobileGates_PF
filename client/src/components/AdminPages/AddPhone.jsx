import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import {
  postPhone,
  getCapacity,
  getRams,
  getCategories,
} from "../../redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function AddProducts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capacity = useSelector((state) => state.capacities);
  const ram = useSelector((state) => state.rams);
  const brand = useSelector((state) => state.categories);

  const [selectedFile, setSelectedFile] = useState(); // IMAGEN
  const [preview, setPreview] = useState(); // IMAGEN
  const [base64, setBase64] = useState(); // en el proyecto es "image"

  const [newBrand, setNewBrand] = useState("");
  const [input, setInput] = useState({
    category: "Phones",
    model: "",
    brand: "",
    operative_system: "",
    size: "",
    cpu: "",
    image: "",
    description: "",
    inches: 0,
    main_camera: 0,
    frontal_camera: 0,
    weight: 0,
    battery: 0,
    ram: [],
    capacity: [],
    price: [],
  });
  ///////////////// CORRESPONDE AL PREVIEW DE LA IMAGEN /////////////////
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    setBase64(convertToBase64(selectedFile));

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const convertToBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      return setBase64(reader.result.split(",")[1]);
    };
  };

  //   const handleDispatch = () => {
  //     dispatch(saveImage(base64)); esta action no la estoy usando me parece... revisar bien
  //   };
  ///////////////// CORRESPONDE AL PREVIEW DE LA IMAGEN /////////////////

  useEffect(() => {
    dispatch(getCapacity());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRams());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function handleChange(e) {
    console.log(input);
    if (isNaN(e.target.value)) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  }
  function handleBrandChange(e) {
    setNewBrand(e.target.value);
  }

  function handleSelectCapacity(e) {
    if (!input.capacity.includes(e.target.value)) {
      // setInput({
      //     ...input,
      //     capacity: [...input.capacity, Number(e.target.value)]
      // })
      setInput({
        ...input,
        capacity: [Number(e.target.value)],
      });
    }
  }

  function handleSelectRAM(e) {
    if (!input.ram.includes(e.target.value)) {
      // setInput({
      //     ...input,
      //     ram: [...input.ram, Number(e.target.value)]
      // })
      setInput({
        ...input,
        ram: [Number(e.target.value)],
      });
    }
  }

  function handleSelectBrands(e) {
    if (!input.brand.includes(e.target.value)) {
      setInput({
        ...input,
        brand: e.target.value,
      });
    }
  }

  // function handlePrice(e) {
  //     // if (!input.price.includes(e.target.value)) {
  //     setInput({
  //              ...input,
  //             price: [...input.price, Number(e.target.value)]
  //           })
  //     // }
  //     console.log(input.price)
  // }

  function handlePanel() {
    navigate("/adminpages");
  }

  function handleSubmit(e) {
    input.price = [parseInt(input.price)];
    input.image = base64;
    if (newBrand) input.brand = newBrand;
    if (!input.brand.length) {
      e.preventDefault();
      return Swal.fire("Debe seleccionar al menos una marca del dispositivo");
    } else if (!input.model.length) {
      e.preventDefault();
      return Swal.fire("Debe ingresar el modelo del dispositivo");
      // } else if (input.image.length === 0) {
      //   e.preventDefault();
      //   return Swal.fire("Debe ingresar la URL de la imagen del dispositivo");
      // else if (!/https:\/\/[a-zA-Z./-]+/gm.test(input.image)) {
      //   e.preventDefault();
      //   return Swal.fire("Debe ingresar una URL válida");
    } else if (!input.operative_system.length) {
      e.preventDefault();
      return Swal.fire("Debe ingresar el sistema operativo del dispositivo");
    } else if (!input.size.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar el tamaño del dispositivo");
    } else if (!input.inches.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar las pulgadas del dispositivo");
    } else if (!input.main_camera.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar los pixeles de la cámara trasera");
    } else if (!input.frontal_camera.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar los pixeles de la cámara frontal");
    } else if (!input.weight.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar el peso del dispositivo");
    } else if (!input.ram.length) {
      e.preventDefault();
      return Swal.fire("Debes seleccionar al menos una memoria RAM");
    } else if (!input.capacity.length) {
      e.preventDefault();
      return Swal.fire(
        "Debes seleccionar al menos una capacidad de almacenamiento"
      );
    } else if (!input.battery.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar el tamaño de la bateria");
    } else if (!input.cpu.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar el modelo del procesador");
    } else if (!input.price.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar el precio del dispositivo");
    } else if (!input.description.length) {
      e.preventDefault();
      return Swal.fire("Debes ingresar la descripción del dispositivo");
    }
    dispatch(postPhone(input));
    console.log(input);
    Swal.fire("El dispositivo ha sido añadido con éxito!");
    console.log("creado con exito");
    setInput({
      category: "Phones",
      model: "",
      brand: "",
      operative_system: "",
      size: "",
      cpu: "",
      image: "",
      description: "",
      inches: 0,
      main_camera: 0,
      frontal_camera: 0,
      weight: 0,
      battery: 0,
      ram: [],
      capacity: [],
      price: [],
    });
    navigate("/home");
    document.location.reload();
  }

  return (
    <div>
      <NavBar />
      <div class="container w-50 mt-3">
        <h1>Agregar un dispositivo</h1>
        <form id="miForm" onSubmit={(e) => handleSubmit(e)}>
          <fieldset disabled>
            <div class="col">
              <label for="disabledTextInput" class="form-label">
                Categoria
              </label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                id="disabledTextInput"
                class="form-control"
                placeholder="Phones"
              ></input>
            </div>
          </fieldset>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">
                Marca
              </label>
              {input.brand === "NEW" ? (
                <input
                  type="text"
                  name="brand"
                  onChange={handleBrandChange}
                  class="form-control"
                ></input>
              ) : (
                <select
                  class="form-select"
                  onChange={(e) => handleSelectBrands(e)}
                  aria-label="Default select example"
                >
                  <option value="" hidden name="brand">
                    Elegí la marca
                  </option>
                  {brand?.map((el) => {
                    return (
                      <option value={el} key={el}>
                        {el}
                      </option>
                    );
                  })}
                  <option value="NEW">Nueva Marca</option>
                </select>
              )}
            </div>
            <div class="col">
              <label for="formFile" class="form-label">
                Modelo
              </label>
              <input
                type="text"
                name="model"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: S22 Ultra"
                aria-label="Last name"
              ></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">
                Sistema Operativo
              </label>
              <input
                type="text"
                name="operative_system"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: Android 10"
                aria-label="First name"
              ></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="customRange3" class="form-label">
                Capacidad de almacenamiento
              </label>
              <select
                class="form-select"
                onChange={(e) => handleSelectCapacity(e)}
                aria-label="Default select example"
              >
                <option value="" hidden name="capacity">
                  Elegí la capacidad
                </option>
                {capacity?.map((el) => {
                  return (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              {/* <ul style={{ listStyle: 'none' }}>
                                <li>
                                    {
                                        input.capacity.map(el =>
                                            <div class='mt-1'>
                                                <span class="badge text-bg-dark">
                                                    {capacity?.find(p => p === el)}
                                                    <h6>{el}
                                                    {console.log(el)}
                                                        <button type="button" onClick={() => handleDeleteCapacity(el)} class="btn-close btn-close-white" aria-label="Close"></button>
                                                    </h6>
                                                </span>
                                            </div>
                                        )
                                    }
                                </li>
                            </ul> */}
            </div>
            <div class="col">
              <label for="customRange3" class="form-label">
                Memoria RAM
              </label>
              <select
                class="form-select"
                onChange={(e) => handleSelectRAM(e)}
                aria-label="Default select example"
              >
                <option value="" hidden name="ram">
                  Elegí la memoria
                </option>
                {ram?.map((el) => {
                  return (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              {/* <ul style={{ listStyle: 'none' }}>
                                <li>
                                    {
                                        input.ram.map(el =>
                                            <div class='mt-1'>
                                                <span class="badge text-bg-dark">
                                                    {ram?.find(p => p === el)}
                                                    <h6>
                                                        {el}
                                                        <button type="button" onClick={() => handleDeleteRAM(el)} class="btn-close btn-close-white" aria-label="Close"></button>
                                                    </h6>
                                                </span>
                                            </div>
                                        )
                                    }
                                </li>
                            </ul> */}
            </div>
            <div class="col">
              <label for="customRange3" class="form-label">
                Tamaño de la pantalla
              </label>
              <input
                type="range"
                name="inches"
                onChange={handleChange}
                class="form-range"
                min="5.5"
                max="7"
                step="0.1"
                id="customRange3"
              ></input>
              <label for="customRange3" class="form-label">
                {input.inches + " pulgadas"}
              </label>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">
                Procesador
              </label>
              <input
                type="text"
                name="cpu"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: Exynos 2200"
                aria-label="First name"
              ></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">
                Tamaño
              </label>
              <input
                type="text"
                name="size"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: 12.38 x 5.86 x 0.76 cm"
                aria-label="Last name"
              ></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">
                Cámara frontal
              </label>
              <input
                type="text"
                name="frontal_camera"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: 32"
                aria-label="First name"
              ></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">
                Cámara trasera
              </label>
              <input
                type="text"
                name="main_camera"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: 10"
                aria-label="Last name"
              ></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">
                Peso
              </label>
              <input
                type="text"
                name="weight"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: 175"
                aria-label="Last name"
              ></input>
            </div>
            <div class="col">
              <label for="formFile" class="form-label">
                Bateria
              </label>
              <input
                type="text"
                name="battery"
                onChange={handleChange}
                class="form-control"
                placeholder="Por ejemplo: 4500"
                aria-label="Last name"
              ></input>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="formFile" class="form-label">
                Imagen principal
              </label>

              <input type="file" onChange={onSelectFile} />

              {selectedFile && (
                <img
                  style={{ width: 120, height: 120 }}
                  src={preview}
                  alt="img"
                />
              )}
              {/* ACÁ TENGO QUE AGREGAR LA PARTE DE PONER UNA IMATEN A UN CELUUUUU */}
              {/* <input
                type="text"
                name="image"
                onChange={handleChange}
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              ></input> */}
            </div>
          </div>
          {/* <div class="row mt-3">
                        <label for="formFile" class="form-label">Imagenes adicionales</label>
                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>
                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>
                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>
                        <div class="col">
                            <input type="text" name="colors" onChange={handleChange} class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                        </div>
                    </div> */}
          <div class="row mt-3">
            <div class="col">
              <div class="input-group mb-3">
                <input
                  type="text"
                  name="price"
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Por ejemplo: 250000"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                ></input>

                {/* <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(e) => handlePrice(e)}>Añadir precio</button> */}

                {/* <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        {
                                            input.price.map(el =>
                                                <div class='mt-1'>
                                                    {console.log('entro al map')}
                                                    {console.log(input.price)}
                                                    <span class="badge text-bg-dark">
                                                        {price?.find(p => p === el)}
                                                        <h6>
                                                            {el}
                                                            {console.log(el)}
                                                            <button type="button" onClick={() => handleDeletePrice(el)} class="btn-close btn-close-white" aria-label="Close"></button>
                                                        </h6>
                                                    </span>
                                                </div>
                                            )
                                        }
                                    </li>
                                </ul> */}
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row mt-1">
            <div class="col">
              <label for="exampleFormControlTextarea1" class="form-label">
                Añade una descripción
              </label>
              <input
                class="form-control"
                id="exampleFormControlTextarea1"
                name="description"
                onChange={handleChange}
                rows="3"
              ></input>
            </div>
          </div>
          <div class="mt-3">
            <button
              type="button"
              class="btn btn-success"
              onClick={(e) => handleSubmit(e)}
            >
              Añadir
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={(e) => handlePanel(e)}
            >
              Volver al Panel
            </button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

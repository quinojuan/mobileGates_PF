import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { getAllProducts , deletePhone, getUsers} from "../../redux/Actions/index"
import { useDispatch, useSelector} from 'react-redux';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function PhonesTable() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products)
    
    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getUsers())
    }, [dispatch])
     
    const handleDelete = (e) => {
        dispatch(deletePhone(e))
        document.location.reload()
    }

    return (
        <div>
            <NavBar />
            <div class="container w-50 mt-5">
                <h1>Administrar dispositivos</h1>
                <table class="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">ID</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((el) => (
                            <tr>
                                <th scope="row">{}</th>
                                <td>{el.model}</td>
                                <td>{el.id}</td>
                                <td>
                                    <div class="btn-group " role="group" aria-label="Basic mixed styles example">
                                        <Link to={`/modifyphone/${el.id}`}>
                                        <a href="#"  class="btn btn-warning me-2">Modificar</a>
                                        </Link>
                                        <button 
                                         onClick={() => handleDelete(el.id)
                                         /*    Swal({
                                              title: 'Eliminar',
                                              text: '¿Seguro desea eliminar este usuario?',
                                              icon: 'warning',
                                              buttons: ['No', 'Si'],
                                              dangerMode: true,
                                            }) */
                                          }
                                        type="button" class="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}
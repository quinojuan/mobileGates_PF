import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllUsers } from '../../redux/Actions';
import { deleteUser } from '../../redux/Actions';



export default function ManageUser() {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users)
  
  useEffect(() => {
      dispatch(getAllUsers());
  }, [dispatch]);
   
  const handleDelete = (e) => {
      dispatch(deleteUser(e));
      document.location.reload()
  }

  return (
      <div>
          <NavBar />
          <div class="container w-50 mt-5">
              <h1>Administrar usuarios</h1>
              <table class="table table-hover mt-5">
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Email</th>
                          <th scope="col">ID</th>
                          <th scope="col">Acción</th>
                      </tr>
                  </thead>
                  <tbody>
                      {users.map((el) => (
                          <tr>
                              <th scope="row">{}</th>
                              <td>{el.email}</td>
                              <td>{el.id}</td>
                              <td>
                                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                      <Link to={`/modifyuser/${el.id}`}>
                                      <a href="#"  class="btn btn-warning">Modificar</a>
                                      </Link>
                                      <button 
                                       onClick={() => handleDelete(el.id)
                                       
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
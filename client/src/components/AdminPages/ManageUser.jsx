import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getUsers, deleteUser } from '../../redux/Actions'



export default function ManageUser() {
  const allUsers = useSelector((state)=> state.users)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(allUsers, " all usersss")
  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])

  const handleDelete = (e) => {
    console.log(e, "acaso es el id?")
     dispatch(deleteUser(e))
     document.location.reload()
  }


  return (
    <div>
      <NavBar />
      <div class="mt-3">
        {allUsers.length?allUsers.map((u)=>{
          return(
          <div>
            <br/>
            {u.email}
            <button type="button" class="btn btn-success" onClick={()=>navigate(`/modifyuser/${u.id}`)}>Modificar Rol</button>
            <button type="button" class="btn btn-danger" onClick={()=>handleDelete(u.id)}>Eliminar Usuario</button>
          </div>
          )
        }):null}
        <hr/>
        <button type="button" class="btn btn-danger" onClick={()=>navigate("/adminpages")}>Volver al Panel</button>
      </div>

      <Footer />
    </div>
  )
}
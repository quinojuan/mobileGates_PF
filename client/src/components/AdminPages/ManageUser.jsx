import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsers, deleteUser, setAdmin, setActive } from '../../redux/Actions';

export default function ManageUser() {
	const allUsers = useSelector((state) => state.users);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	console.log(allUsers);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const handleDelete = (e) => {
		console.log(e, 'acaso es el id?');
		dispatch(deleteUser(e));
		document.location.reload();
	};

	const goBack = () => {
		navigate('/adminpages');
	};

	const handleCheckbox = (e) => {
		console.log(e);
		if (e.target.name === 'admin') {
			console.log('admin');
			dispatch(setAdmin(e.target.id));
		} else if (e.target.name === 'active') {
			console.log('active');
			dispatch(setActive(e.target.id));
		}
	};

	return (
		<div>
			<NavBar />
			<div class="container w-50 mt-5">
				<button class="btn btn-dark" onClick={goBack}>
					Volver atras
				</button>
				<h1>Administrar usuarios</h1>
				<table class="table table-hover mt-5">
					<thead>
						<tr>
							<th scope="col">Nombre</th>
							<th scope="col">Email</th>
							<th scope="col">Admin</th> {/* IS LOGGED USER SUPERADMIN? */}
							<th scope="col">Activo</th>
							<th scope="col">Verificado</th>
						</tr>
					</thead>
					<tbody>
						{allUsers.length ? (
							allUsers.map((user) => (
								<tr>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										{user.admin ? (
											<input
												id={user.id}
												onChange={handleCheckbox}
												name="admin"
												class="form-check-input"
												type="checkbox"
												checked
											/>
										) : (
											<input
												id={user.id}
												onChange={handleCheckbox}
												name="admin"
												class="form-check-input"
												type="checkbox"
											/>
										)}
									</td>
									{/*CHECKBOX ADMIN*/}
									<td>
										<input
											id={user.id}
											onChange={handleCheckbox}
											name="active"
											class="form-check-input"
											type="checkbox"
											checked={user.active}
										/>
									</td>
									{/* CHECKBOX ACTIVO */}
									<td>SI</td> {/* Verificado (USAR FIREBASE)*/}
								</tr>
							))
						) : (
							<td colSpan="4">No se encontró ningun usuario..</td>
						)}
					</tbody>
				</table>
			</div>
			{/* <button type="button" class="btn btn-success" onClick={()=>navigate(`/modifyuser/${u.id}`)}>Modificar Rol</button>
            <button type="button" class="btn btn-danger" onClick={()=>handleDelete(u.id)}>Eliminar Usuario</button> */}
			<Footer />
		</div>
	);
}

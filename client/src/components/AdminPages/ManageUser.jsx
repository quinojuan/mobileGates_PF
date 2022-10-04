import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsers, deleteUser, setAdmin, setActive } from '../../redux/Actions';
import Spinner from '../Spinner/Spinner';
import Swal from 'sweetalert2';

export default function ManageUser() {
	const allUsers = useSelector((state) => state.users);
	const loading = useSelector((state) => state.loading);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	console.log(allUsers);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const goBack = () => {
		navigate('/adminpages');
	};

	const handleCheckbox = (e) => {
		if (e.target.name === 'admin') {
			dispatch(setAdmin(e.target.id));
		} else if (e.target.name === 'active') {
			dispatch(setActive(e.target.id));
			Swal.fire(
				'Baneado',
				`Usuario con el ID ${e.target.id} baneado con éxito`,
				'warning'
			);
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
						{!loading ? (
							allUsers.length ? (
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
													email={user.email}
													disabled={!user.emailVerified}
													checked
												/>
											) : (
												<input
													id={user.id}
													onChange={handleCheckbox}
													name="admin"
													class="form-check-input"
													type="checkbox"
													email={user.email}
													disabled={!user.emailVerified}
												/>
											)}
										</td>
										<td>
											<input
												id={user.id}
												onChange={handleCheckbox}
												name="active"
												class="form-check-input"
												type="checkbox"
												email={user.email}
												checked={user.active}
											/>
										</td>
										<td>{user.emailVerified ? '✅' : '❌'}</td>
									</tr>
								))
							) : (
								<td colSpan="5">No se encontró ningun usuario...</td>
							)
						) : (
							<td colspan="5">
								<Spinner />
							</td>
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

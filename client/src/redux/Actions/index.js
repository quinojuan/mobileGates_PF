import axios from 'axios';
import Swal from "sweetalert2"
export function getAllProducts() {
	return async function (dispatch) {
		let json = await axios.get('http://localhost:3001/products');
		return dispatch({
			type: 'GET_PRODUCTS',
			payload: json.data,
		});
	};
}

export function searchName(payload) {
	return async function (dispatch) {
		try {
			var json = await axios.get(
				'http://localhost:3001/products?name=' + payload
			);
			return dispatch({
				type: 'SEARCH_NAME',
				payload: json.data,
			});
		} catch (error) {
			Swal.fire("El producto que buscaste no existe");
		}
	};
}

export function getPhonesById(id) {
	return async function (dispatch) {
		try {
			dispatch(setLoading(true));
			let json = await axios.get(`http://localhost:3001/products/phones/${id}`);
			dispatch({
				type: 'GET_PHONES_BY_ID',
				payload: json.data,
			});
			dispatch(setLoading(false));
		} catch (error) {
			console.log(error);
		}
	};
}
export function getTabletsById(id) {
	return async function (dispatch) {
		try {
			let json = await axios.get(
				`http://localhost:3001/products/tablets/${id}`
				);
				return dispatch({
					type: 'GET_TABLETS_BY_ID',
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function getNotebooksById(id) {
	return async function (dispatch) {
		try {
			let json = await axios.get(
				`http://localhost:3001/products/notebooks/${id}`
				);
				return dispatch({
					type: 'GET_NOTEBOOKS_BY_ID',
					payload: json.data,
				});
			} catch (error) {
				console.log(error);
		}
	};
}
export function getClean(payload) {
	return {
		type: 'GET_CLEAN',
		payload,
	};
}

// export function getFilterByCategories(payload) {
// 	return {
	// 		type: 'GET_FILTER_BY_CATEGORIES',
	// 		payload,
	// 	};
	// }
	// export function getFilterByRam(payload) {
		// 	return {
			// 		type: 'GET_FILTER_BY_RAM',
			// 		payload,
			// 	};
			// }
			export function getSort(payload) {
				return {
					type: 'GET_SORT',
					payload,
				};
			}
			// export function getFilterByCapacity(payload) {
				// 	return {
					// 		type: 'GET_FILTER_BY_CAPACITY',
					// 		payload,
					// 	};
					// }
					export const setFilter = (filter, filterName) => (dispatch) => {
						dispatch({
							type: 'SET_FILTER',
							payload: {
								filter,
								filterName,
							},
						});
					};
					export function setLoading(payload) {
						return {
							type: 'SET_LOADING',
							payload,
						};
					}
					export function addToCart(payload){
						return{
							type: "ADD_TO_CART",
							payload
						}
					}
					export function getCart(){
						return{
							type: "GET_CART",
						}
					}
					 export function deleteProductInCart(payload){
						console.log(payload, "LLEGUE action")
						return function(dispatch){
							dispatch({
								type: "DELETE_PRODUCT_IN_CART",
								payload
							}
							)
						}
					} 
				/* 	export const deleteProductInCart=(id, all=false)=>{
						all ?
						
						{type:"REMOVE_ALL_FROM_CART", payload:id} : 
						{type:"REMOVE_ONE_FROM_CART", payload: id};
					} */
					
export const getProductsByNameAndFilters =
(search, filters) => async (dispatch) => {
	if (!search) search = '';
	let filterString = '';
	for (const filter in filters) {
		filterString += '&' + filter + '=' + filters[filter];
	}
	//BUENA MANERA DE UTILIZAR EL AXIOS
	const resultado = await axios
	.get(
		'http://localhost:3001/products?' +
		'name=' +
		search.toLowerCase().trim() +
		filterString
		)
		//'http://localhost:3001/products?' +'name=' +search.toLowerCase().trim() +filterString
		//http://localhost:3001/products?name=+&ram=&category=Tablets&capacity= EJEMPLO
		.then((res) => res.data);
		dispatch({
			type: 'GET_PRODUCTS_BY_NAME_AND_FILTERS',
			payload: resultado,
		});
		//BUENA MANERA DE UTILIZAR EL AXIOS
	};
	export const getCategories = () => async (dispatch) => {
		const resultado = await axios('http://localhost:3001/categories').then(
			(res) => res.data
	);
	dispatch({
		type: 'GET_ALL_CATEGORIES',
		payload: resultado,
	});
};
<<<<<<< HEAD
import axios from 'axios'


export function getAllProducts(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/products');
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
=======
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
>>>>>>> db056447f9cde9855f6d88fb7e294115f26a6263
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

export function getPhonesById(id){
    return async function (dispatch){
        try{
            let json= await axios.get(`http://localhost:3001/products/phones/${id}`)
            return dispatch({
                type: "GET_PHONES_BY_ID",
                payload: json.data
        })
        } catch(error){
            console.log(error)
        }
    }
}
export function getTabletsById(id){
    return async function (dispatch){
        try{
            let json= await axios.get(`http://localhost:3001/products/tablets/${id}`)
            return dispatch({
                type:"GET_TABLETS_BY_ID",
                payload:json.data
            })
        } catch(error){
            console.log(error)
        }
       
    }
}
export function getNotebooksById(id){
    return async function (dispatch){
        try{
            let json= await axios.get(`http://localhost:3001/products/notebooks/${id}`)
            return dispatch({
                type:"GET_NOTEBOOKS_BY_ID",
                payload:json.data
        })
        } catch(error){
            console.log(error)
        }
    }
}
export function getClean(payload){
    return{
        type:"GET_CLEAN",
        payload
    }
}

<<<<<<< HEAD
export function getFilterByCategories(payload){
    return{
        type:"GET_FILTER_BY_CATEGORIES",
        payload
    }
=======
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
>>>>>>> db056447f9cde9855f6d88fb7e294115f26a6263
}
export function getFilterByRam(payload){
    return{
        type:"GET_FILTER_BY_RAM",
        payload
    }
}

export function getFilterByCapacity(payload){
    return{
        type:"GET_FILTER_BY_CAPACITY",
        payload
    }
}

export function getSort(payload){
    return{
        type:"GET_SORT",
        payload
    }
}

export function postUsers(payload) {
    return async function () {
        const createUser = await axios.post("http://localhost:3001/users", payload)
        return createUser;
    }
}



// export const getProductsByName=(search,filters)=> async dispatch =>{
//     let filterString='';
//     for (const filter in filters) {
//         filterString+='&'+filter+'='+filters[filter];
//     }
//     //BUENA MANERA DE UTILIZAR EL AXIOS
//     await axios.get("http://localhost:3001/products?"+'name='+search.toLowerCase()+filterString)
//     .then(res => dispatch ({
//         type:GET_PRODUCTS_BY_NAME,
//         payload: res
//     }))
//     .catch((err)=> dispatch ({
//         type:GET_ERROR,
//         payload: err.response,
//     }))
//     //BUENA MANERA DE UTILIZAR EL AXIOS
// }
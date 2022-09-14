import axios from 'axios'

export function getAllProducts(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/products');
<<<<<<< HEAD
=======
        let data=json.data
>>>>>>> 953c571420742732b46a0d10fff9c3cad8b808c2
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: data.allProducts
        })
    }
}

export function searchName(payload) {
    return async function (dispatch) {
         try {
            var json = await axios.get("http://localhost:3001/products?name=" + payload)
            return dispatch ({
                type: 'SEARCH_NAME',
                payload: json.data
            })
         } catch (error) {
             console.log(error)
             
        }
    }
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
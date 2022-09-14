import axios from 'axios'

export function getAllProducts(){
    return async function(dispatch){
        let json = await axios.get('http://localhost:3001/');
        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}
export function getPhonesById(id){
    return async function (dispatch){
        try{
            let json= await axios.get(`http://localhost:3001/products/phones/${id}`)
            return dispatch({
                type: "GET_PHONES_BY_ID",
                payload: json
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
                payload:json
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
                payload:json
        })
        } catch(error){
            console.log(error)
        }
    }
}
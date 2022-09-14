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
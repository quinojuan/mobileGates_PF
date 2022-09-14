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
const initialState = {
    products: [],
    details:[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            }
            case "GET_PHONES_BY_ID":
                return {
                    ...state,
                    details: action.payload
                }
                case "GET_TABLETS_BY_ID":
                    return {
                        ...state,
                        details:action.payload
                    }
                    case "GET_NOTEBOOKS_BY_ID":
                        return{
                            ...state,
                            details:action.payload
                        }
                        case "GET_CLEAN":
                            return{
                                ...state,
                                payload:[]
                            }


        case 'SEARCH_NAME':
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }

}



export default rootReducer;

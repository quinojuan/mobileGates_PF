const initialState = {
    products: [],
    details:[],
    allProducts:[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts:action.payload
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
            case "GET_FILTER_BY_CATEGORIES":
                const productsToFilterByCategory = state.allProducts;
                                    const categoryFilter = action.payload === "disabled" ?
                                    productsToFilterByCategory :
                                    productsToFilterByCategory?.filter(s => s.category.includes(action.payload))
                                    return {
                                        ...state,
                                        products : categoryFilter
                                    };
           
        default:
            return state;
    }

}



export default rootReducer;

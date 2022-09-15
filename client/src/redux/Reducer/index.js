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
            case "GET_FILTER_BY_RAM":
                    const allProducts = state.allProducts;
                    const filtByRam = action.payload === 'disabled' ?
                    allProducts :
                    allProducts.filter(el => el.ram.includes(action.payload))
            return {
                ...state,
                products: filtByRam
            };
            case "GET_FILTER_BY_CAPACITY":
                const alllProducts=state.allProducts;
                const filtByCap=action.payload === "disabled" ?
                alllProducts :
                alllProducts.filter(s=>s.capacity.includes(action.payload))
                return{
                    ...state,
                    products:filtByCap
                }
            
                case "GET_SORT":
                    let sortedArr = action.payload === 'A-Z' ?
                state.products.sort(function (a, b) {
                    if (a.model.toLowerCase() > b.model.toLowerCase()) {
                        return 1;
                    }
                    if (b.model.toLowerCase() > a.model.toLowerCase()) {
                        return -1;
                    }
                    return 0;
                }) :  // sino.....
                state.products.sort(function (a, b) {
                    if (a.model.toLowerCase() > b.model.toLowerCase()) {
                        return -1;
                    }
                    if (b.model.toLowerCase() > a.model.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                products: sortedArr
            }
            
           
        default:
            return state;
    }

}



export default rootReducer;

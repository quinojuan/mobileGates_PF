const initialState = {
<<<<<<< HEAD
	products: [],
	details: [],
	allProducts: [],
	loading: false,
	filters: {
		ram: '',
		category: '',
		capacity: '',
	},
	categories: [],
	cart: [],
	search: ""
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return {
				...state,
				products: action.payload,
				allProducts: action.payload,
			};
		case 'GET_PHONES_BY_ID':
			return {
				...state,
				details: action.payload,
			};
		case 'GET_TABLETS_BY_ID':
			return {
				...state,
				details: action.payload,
			};
		case 'GET_NOTEBOOKS_BY_ID':
			return {
				...state,
				details: action.payload,
			};
		case 'GET_CLEAN':
			return {
				...state,
				details: {},
			};
=======
    products: [],
    details: [],
    allProducts: [],
    users: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            }
        case "GET_PHONES_BY_ID":
            return {
                ...state,
                details: action.payload
            }
        case "GET_TABLETS_BY_ID":
            return {
                ...state,
                details: action.payload
            }
        case "GET_NOTEBOOKS_BY_ID":
            return {
                ...state,
                details: action.payload
            }
        case "GET_CLEAN":
            return {
                ...state,
                payload: []
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
                products: categoryFilter
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
            const alllProducts = state.allProducts;
            const filtByCap = action.payload === "disabled" ?
                alllProducts :
                alllProducts.filter(s => s.capacity.includes(action.payload))
            return {
                ...state,
                products: filtByCap
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

        case 'POST_USERS':
            return {
                ...state,
            }


        default:
            return state;
    }
>>>>>>> ec38c70efbd9405adfc47eb9ccfedfb5bc652c42

		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
			};
		case 'SEARCH_NAME':
			return {
				...state,
				products: action.payload 
			};
		case "CASE_SEARCH":
			return {
				...state,
				search: action.payload
			}
		// case 'GET_FILTER_BY_CATEGORIES':
		// 	const productsToFilterByCategory = state.allProducts;
		// 	const categoryFilter =
		// 		action.payload === 'disabled'
		// 			? productsToFilterByCategory
		// 			: productsToFilterByCategory?.filter((s) =>
		// 					s.category.includes(action.payload)
		// 			  );
		// 	return {
		// 		...state,
		// 		products: categoryFilter,
		// 	};
		// case 'GET_FILTER_BY_RAM':
		// 	const allProducts = state.allProducts;
		// 	const filtByRam =
		// 		action.payload === 'disabled'
		// 			? allProducts
		// 			: allProducts.filter((el) => el.ram.includes(action.payload));
		// 	return {
		// 		...state,
		// 		products: filtByRam,
		// 	};
		// case 'GET_FILTER_BY_CAPACITY':
		// 	const alllProducts = state.allProducts;
		// 	const filtByCap =
		// 		action.payload === 'disabled'
		// 			? alllProducts
		// 			: alllProducts.filter((s) => s.capacity.includes(action.payload));
		// 	return {
		// 		...state,
		// 		products: filtByCap,
		// 	};
		case 'SET_FILTER':
			return {
				...state,
				filters: {
					...state.filters,
					[action.payload.filterName]: action.payload.filter,
				},
			};
		case 'GET_PRODUCTS_BY_NAME_AND_FILTERS':
			return {
				...state,
				products: action.payload,
			};
		case 'GET_ALL_CATEGORIES':
			return {
				...state,
				categories: action.payload,
			};
		case 'GET_SORT':
			let sortedArr =
				action.payload === 'A-Z'
					? state.products.sort(function (a, b) {
							if (a.model.toLowerCase() > b.model.toLowerCase()) {
								return 1;
							}
							if (b.model.toLowerCase() > a.model.toLowerCase()) {
								return -1;
							}
							return 0;
					  }) // sino.....
					: state.products.sort(function (a, b) {
							if (a.model.toLowerCase() > b.model.toLowerCase()) {
								return -1;
							}
							if (b.model.toLowerCase() > a.model.toLowerCase()) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				products: sortedArr,
			};
		case 'ADD_TO_CART':
		    let purchase = action.payload
			//console.log(state.cart, "carrito redux")
			let myCartLS = JSON.parse(localStorage.getItem('cart')) || [];
			console.log(myCartLS, "MYCART LS")
			 if (!myCartLS.some((el) => el.id == purchase[0].id)) {
				myCartLS.push(purchase[0]);
				localStorage.setItem('cart', JSON.stringify(myCartLS));
			} 
			return {
				...state,
				cart: [...state.cart, purchase[0]],
			};
		case 'GET_CART':
			let cartLS = JSON.parse(localStorage.getItem('cart'));
			if (!cartLS) {
				cartLS = [];
			}
			return {
				...state,
				cart: [...state.cart, cartLS],
			};
		case 'DELETE_PRODUCT_IN_CART':
			let myDeletedProduct = JSON.parse(localStorage.getItem('cart'));
			let myCarty = myDeletedProduct.filter((el) => el.id != action.payload);
			localStorage.setItem('cart', JSON.stringify(myCarty));
			return {
				...state,
				cart: myCarty,
			};
		default:
			return state;
	}
}

export default rootReducer;
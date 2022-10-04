/* eslint-disable eqeqeq */
const initialState = {
	products: [],
	details: [],
	allProducts: [],
	users: [],
	loading: false,
	filters: {
		ram: '',
		capacity: '',
		brand: '',
	},
	brands: [],
	cart: [],
	search: '',
	rams: [],
	img: '',
	capacities: [],
	price: [],
	searching: false,
	inputPurchase: {},
	getCheckout: {},
	repeat: [],
	repetido: false,
	finalPrice: 0,
	purchases: [],
	feedback: {},
	allFeedbacks: [],
	qas: [],
	loggedUser: {},
    purchasesDetail: [],
	usersAdmins: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return {
				...state,
				products: action.payload,
				allProducts: action.payload,
				productsReady: true,
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
				details: [],
			};

		case 'SEARCH_NAME':
			return {
				...state,
				products: action.payload,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
			};
		case 'CASE_SEARCH':
			return {
				...state,
				search: action.payload,
			};
		case 'GET_IMG':
			return {
				...state,
				img: state.details.image,
			};
		case 'SEARCHING':
			return {
				...state,
				searching: true,
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
		case 'GET_CAPACITY':
			return {
				...state,
				capacities: action.payload,
			};
		case 'GET_RAMS':
			return {
				...state,
				rams: action.payload,
			};
		case 'SET_FILTER':
			return {
				...state,
				filters: {
					...state.filters,
					[action.payload.filterName]: action.payload.filter,
				},
			};
		case 'GET_SORT':
			let sortedArr =
				action.payload === 'A-Z'
					? state.products.sort(function(a, b) {
							if (a.model.toLowerCase() > b.model.toLowerCase()) {
								return 1;
							}
							if (b.model.toLowerCase() > a.model.toLowerCase()) {
								return -1;
							}
							return 0;
					  }) // sino.....
					: state.products.sort(function(a, b) {
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
		case 'GET_SORT_BY_PRICE':
			let sortedArr2 =
				action.payload === 'High to low'
					? state.allProducts.sort(function(a, b) {
							if (a.price[0] > b.price[0]) {
								return 1;
							}
							if (b.price[0] > a.price[0]) {
								return -1;
							}
							return 0;
					  }) // sino.....
					: state.allProducts.sort(function(a, b) {
							if (a.price[0] > b.price[0]) {
								return -1;
							}
							if (b.price[0] > a.price[0]) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				products: sortedArr2,
			};

		case 'ADD_TO_CART':
			console.log(action.payload, 'REDUCERRRR');
			let purchase = action.payload;
			let myCartLS = JSON.parse(localStorage.getItem('cart')) || [];
			console.log('MY CART LS:', myCartLS);
			if (!myCartLS.some((el) => el.id == purchase.phone.id)) {
				myCartLS.push(purchase);
				localStorage.setItem('cart', JSON.stringify(myCartLS));
			}
			return {
				...state,
				cart: [...state.cart, purchase],
			};
		case 'GET_CART':
			let cartLS = JSON.parse(localStorage.getItem('cart'));
			if (!cartLS) {
				cartLS = [];
			}
			return {
				...state,
				cart: cartLS,
			};

		case 'DELETE_PRODUCT_IN_CART':
			console.log(action.payload, 'reducer');
			let productsInLs = JSON.parse(localStorage.getItem('cart'));
			let myCarty = productsInLs.filter((el) => el.phone.id !== action.payload);
			//pensar la logica de ir sacando de a 1 quantity
			localStorage.setItem('cart', JSON.stringify(myCarty));

			return {
				...state,
				cart: myCarty,
			};
		case 'CLEAN_CART':
			let arrayClean = [];
			localStorage.setItem('cart', JSON.stringify(arrayClean));
			return {
				...state,
				cart: [],
			};

		case 'POST_USERS':
			return {
				...state,
			};
		case 'GET_USERS':
			let arreglo = action.payload.data;
			let filtrado = arreglo.filter(e=>e.admin===true)
			return {
				...state,
				users: action.payload.data,
				usersAdmins: filtrado
			};
		case 'CLEAR_CART':
			return {
				...state,
				cart: [],
			};
		case 'POST_PURCHASE':
			return {
				...state,
			};
		case 'POST_PHONE':
			return {
				...state,
			};
		case 'GET_PURCHASES':
			return {
				...state,
				purchases: [...action.payload],
			};
		case 'GET_PURCHASE_REPEAT':
			let repeat = state.cart.map((s) => s.id.includes(action.payload.id));
			if (repeat.includes((e) => (e = true))) {
				return {
					...state,
					repetido: true,
				};
			} else
				return {
					...state,
					repetido: false,
				};
				case "GET_PURCHASES_ID":
					return{
					  ...state,
					  purchasesDetail:action.payload
			
					}	
		case 'ADD_INPUT_PURCHASE':
			return {
				...state,
				inputPurchase: action.payload,
			};
		case 'PUT_PHONE':
			return {
				...state,
			};
		case 'GET_FEEDBACKS':
			console.log(action.payload);
			return {
				...state,
				allFeedbacks: action.payload.data,
			};

		case 'FINAL_PRICE':
			return {
				...state,
				finalPrice: action.payload,
			};
		case 'POST_FEEDBACK':
			return {
				...state,
				feedback: action.payload,
			};
		case 'PREVENT_CART_BUG':
			return { ...state, cart: [] };

		case 'GET_QAS':
			return {
				...state,
				qas: action.payload,
			};
	   

		case 'GET_USER_DATA':
			return {
				...state,
				loggedUser: action.payload,
			};

		case 'ADD_DISPLAY_NAME':
			return {
				...state,
				loggedUser: { ...state.loggedUser, displayName: action.payload.name }, // password: action.payload.password (ver si la necesito)
			};

		default:
			return state;
	}
}

export default rootReducer;

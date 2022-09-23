const initialState = {
  products: [],
  details: [],
  allProducts: [],
  users: [],
  loading: false,
  filters: {
    ram: "",
    capacity: "",
    brand: "",
  },
  brands: [],
  cart: [],
  search: "",
  rams: [],
  img: "",
  capacities: [],
  searching: false,
  purchases:[],
  repeat:[],
  repetido: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productsReady: true,
      };
    case "GET_PHONES_BY_ID":
      return {
        ...state,
        details: action.payload,
      };
    case "GET_TABLETS_BY_ID":
      return {
        ...state,
        details: action.payload,
      };
    case "GET_NOTEBOOKS_BY_ID":
      return {
        ...state,
        details: action.payload,
      };
    case "GET_CLEAN":
      return {
        ...state,
        details: [],
      };

    case "SEARCH_NAME":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "CASE_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "GET_IMG":
      return {
        ...state,
        img: state.details.image,
      };
    case "SEARCHING":
      return {
        ...state,
        searching: true,
      };
    case "GET_PRODUCTS_BY_NAME_AND_FILTERS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_ALL_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_CAPACITY":
      return {
        ...state,
        capacities: action.payload,
      };
    case "GET_RAMS":
      return {
        ...state,
        rams: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterName]: action.payload.filter,
        },
      };
    case "GET_SORT":
      let sortedArr =
        action.payload === "A-Z"
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
    case "GET_SORT_BY_PRICE":
      let sortedArr2 =
        action.payload === "High to low"
          ? state.allProducts.sort(function (a, b) {
              if (a.price[0] > b.price[0]) {
                return 1;
              }
              if (b.price[0] > a.price[0]) {
                return -1;
              }
              return 0;
            }) // sino.....
          : state.allProducts.sort(function (a, b) {
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
    case "ADD_TO_CART":
      console.log("añadiendo al carrito desde reducer:", action.payload);
      let purchase = action.payload;
      //console.log(state.cart, "carrito redux")
      let myCartLS = JSON.parse(localStorage.getItem("cart")) || [];
      console.log(myCartLS, "MYCART LS");
      if (!myCartLS.some((el) => el.id == purchase[0].id)) {
        myCartLS.push(purchase[0]);
        localStorage.setItem("cart", JSON.stringify(myCartLS));
      }
      return {
        ...state,
        cart: [...state.cart, purchase[0]],
      };
    case "GET_CART":
      let cartLS = JSON.parse(localStorage.getItem("cart"));
      if (!cartLS) {
        cartLS = [];
      }
      return {
        ...state,
        cart: cartLS,
      };
    case "DELETE_PRODUCT_IN_CART":
      //console.log(action.payload, "LLEGUE redux")
      let productsInLs = JSON.parse(localStorage.getItem("cart"));
      //console.log(productsInLs, "products in ls")
      let myCarty = productsInLs.filter((el) => el.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(myCarty));

      return {
        ...state,
        cart: myCarty,
      };

    case "POST_USERS":
      return {
        ...state,
      };
    case "CLEAR_CART":
      console.log("estamos en el case de clearCart")
      return {
        ...state,
        cart: [],
      };
      case "POST_PURCHASES":
        return{
          ...state
        }
      case "GET_PURCHASES":
        return{
          ...state,
          purchases:action.payload
        }
      case "GET_PURCHASE_REPEAT":
        let repeat=state.cart.map((s)=>s.id.includes(action.payload.id))
        if(repeat.includes(e=>e=true)){
          return {
            ...state,
            repetido: true 
          }
        } else return {
          ...state,
          repetido: false
        }
        
    default:
      return state;
  }
}

export default rootReducer;

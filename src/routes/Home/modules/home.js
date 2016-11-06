import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const CATEGORY_AGRICULTURE_FETCHED = 'CATEGORY_FETCHED'
export const CATEGORY_KEBUTUHAN_HARIAN_FETCHED = 'CATEGORY_KEBUTUHAN_HARIAN_FETCHED'
export const CATEGORY_PRODUK_TERPROSES_FETCHED = 'CATEGORY_PRODUK_TERPROSES_FETCHED'
export const CATEGORY_ERROR = "CATEGORY_ERROR"

export const ID_CATEGORY_AGRICULTURE = "580f22f209c1061ffaf78384";
export const ID_CATEGORY_KEBUTUHAN_HARIAN = "57bfab337937f8051ecf42aa";
export const ID_CATEGORY_PRODUK_TERPROSES = "57bebf04deee1aeb56ca20a9";

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const fetchCategoryAgriculture = (id) => {
  return (dispatch, getState) => {
    axios.get("http://localhost:7000/api/v1/categories/subs/"+ ID_CATEGORY_AGRICULTURE +"?offset=0&limit=5")
      .then((response) => {
        dispatch({type: CATEGORY_AGRICULTURE_FETCHED, payload: response.data.docs});
      })
      .then((err) => {
        dispatch({type: CATEGORY_ERROR, payload: err});
      })
  }
}

export const fetchCategoryKebutuhanHarian = (id) => {
  return (dispatch, getState) => {
    axios.get("http://localhost:7000/api/v1/categories/subs/"+ ID_CATEGORY_KEBUTUHAN_HARIAN +"?offset=0&limit=5")
      .then((response) => {
        dispatch({type: CATEGORY_KEBUTUHAN_HARIAN_FETCHED, payload: response.data.docs});
      })
      .then((err) => {
        dispatch({type: CATEGORY_ERROR, payload: err});
      })
  }
}

export const fetchCategoryProdukTerproses = (id) => {
  return (dispatch, getState) => {
    axios.get("http://localhost:7000/api/v1/categories/subs/"+ ID_CATEGORY_PRODUK_TERPROSES +"?offset=0&limit=5")
      .then((response) => {
        dispatch({type: CATEGORY_PRODUK_TERPROSES_FETCHED, payload: response.data.docs});
      })
      .then((err) => {
        dispatch({type: CATEGORY_ERROR, payload: err});
      })
  }
}

export const actions = {
  fetchCategoryAgriculture,
  fetchCategoryKebutuhanHarian,
  fetchCategoryProdukTerproses
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  categories1: [],
  categories2: [],
  categories3: [],
  error: null
}
export default function homeReducer (state = initialState, action) {
  switch (action.type) {
    case CATEGORY_AGRICULTURE_FETCHED: {
      return {...state, categories1: action.payload}
    }
    case CATEGORY_PRODUK_TERPROSES_FETCHED: {
      return {...state, categories2: action.payload}
    }
    case CATEGORY_KEBUTUHAN_HARIAN_FETCHED: {
      return {...state, categories3: action.payload}
    }
    case CATEGORY_ERROR: {
      return {...state, error: action.payload}
    }
  }

  return state;
}

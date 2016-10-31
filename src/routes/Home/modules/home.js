import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const CATEGORY = 'CATEGORY'

// ------------------------------------
// Actions
// ------------------------------------
/*export function category() {
  return {
    type    : CATEGORY,
    payload : {}
  }
}
*/
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const category = () => {
  return (dispatch, getState) => {
    axios.get("http://localhost:7000/api/v1/categories")
      .then((response) => {
        console.log("response", response);
      })

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  category
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CATEGORY] : (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

import { createStore, combineReducers } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

const initialState = {
  cart: {
    products: [],
  },
  user: {
    username: null,
  },
}

const bigReducer = combineReducers({ cart: cartReducer, user: userReducer })
// every sub-reducer is triggered at ANY action dispatching

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

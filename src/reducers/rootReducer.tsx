import { combineReducers } from 'redux'
import { appStatesReducer } from './appStates/appStatesSlice'
import { cartsReducer } from './carts/cartsSlice'
import { usersReducer } from './users/usersSlice'

const rootReducer = combineReducers({
  users: usersReducer,
  appStates: appStatesReducer,
  carts: cartsReducer
})

export default rootReducer
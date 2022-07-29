import { combineReducers } from 'redux'
import { filtersReducer } from './filters/filtersSlice'

const rootReducer = combineReducers({
  filters: filtersReducer
})

export default rootReducer
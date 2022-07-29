import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer
})
export default store
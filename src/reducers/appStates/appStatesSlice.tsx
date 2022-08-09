import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isDeleteCart: false,
  query: ''
}

const appStatesSlice = createSlice({
  name: "appStates",
  initialState: initialState,
  reducers: {
    changedDeleteCart(state, action) {
      const isDeleteCart = action.payload.isDeleteCart as boolean
      return {
        ...state,
        isDeleteCart: isDeleteCart
      }
    },
    changedUser(state, action) {
      const userId = Number(action.payload.userId)
      return {
        ...state,
        userId: userId
      }
    },
    searched(state, action) {
      const query = String(action.payload.query)
      return {
        ...state,
        query: query
      }
    }
  }
})

const { actions, reducer } = appStatesSlice
export const { changedDeleteCart, changedUser, searched } = actions
export const appStatesReducer = reducer
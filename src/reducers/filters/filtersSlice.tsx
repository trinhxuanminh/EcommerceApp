import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  query: ''
}

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    searched(state, action) {
      let query = String(action.payload.query)
      return {
        ...state,
        query: query
      }
    }
  }
})

const { actions, reducer } = filtersSlice
export const { searched } = actions
export const filtersReducer = reducer
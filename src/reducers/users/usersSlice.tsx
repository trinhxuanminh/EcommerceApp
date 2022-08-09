import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userId: NaN
}

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const userId = action.payload.userId
      return {
        ...state,
        userId: userId
      }
    },

    logOut(state, action) {
      return {
        ...state,
        userId: NaN
      }
    }
  }
})

const { actions, reducer } = usersSlice
export const { login, logOut } = actions
export const usersReducer = reducer
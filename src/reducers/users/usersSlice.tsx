import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userId: Number(null)
}

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    login(state, action) {
      const userId = Number(action.payload.userId)
      return {
        ...state,
        userId: userId
      }
    },

    logOut(state, action) {
      return {
        ...state,
        userId: Number(null)
      }
    }
  }
})

const { actions, reducer } = usersSlice
export const { login, logOut } = actions
export const usersReducer = reducer
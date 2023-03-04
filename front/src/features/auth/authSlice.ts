import { createSlice } from '@reduxjs/toolkit'

const initialState: {
  token: string | null
  isAuthenticated: boolean
  errorAuth: string | null
} = {
  token: null,
  isAuthenticated: false,
  errorAuth: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
      state.errorAuth = null
    },
    logout: (state) => {
      localStorage.removeItem('token')
      state.token = null
      state.isAuthenticated = false
    },
    setErrorAuth: (state, action) => {
      state.errorAuth = action.payload
    }
  }
})

export const authReducer = authSlice.reducer

export const { login, logout, setErrorAuth } = authSlice.actions

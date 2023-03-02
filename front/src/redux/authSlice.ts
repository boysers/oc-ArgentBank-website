import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isAuthenticated: false
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      localStorage.removeItem('token')

      state.token = ''
      state.isAuthenticated = false
    }
  }
})

export const authReducer = authSlice.reducer

export const { login, logout } = authSlice.actions

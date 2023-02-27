import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import bankAccount from '../datas/bankAccount.json'
import { wait } from '../utils'

export const fetchProfile = createAsyncThunk('profile/getProfile', async () => {
  await wait(1500)
  return {
    firstName: bankAccount.firstName,
    lastName: bankAccount.lastName,
    userName: bankAccount.userName
  }
})

const initialState = {
  firstName: '',
  lastName: '',
  userName: '',
  loading: false
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload
    },
    resetStateProfile: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.loading = false
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.userName = action.payload.userName
    })
  }
})

export const profileReducer = profileSlice.reducer

export const { updateUserName, resetStateProfile } = profileSlice.actions

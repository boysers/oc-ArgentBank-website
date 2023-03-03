import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from '../services/fetchProfile'
import { RootState } from './store'

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (_, { getState }) => {
    const { auth } = getState() as RootState

    const profile = await fetchProfile(auth.token)

    return { ...profile.body }
  }
)

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  userName: '',
  loading: false,
  errorMessage: ''
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
    builder.addCase(getProfile.pending, (state, action) => {
      state.loading = true
      state.errorMessage = ''
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.userName = action.payload.userName
    })
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false
      state.errorMessage = 'token error'
    })
  }
})

export const profileReducer = profileSlice.reducer

export const { updateUserName, resetStateProfile } = profileSlice.actions

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from './profileApi'

interface IInitialState {
  email: string | null
  firstName: string | null
  lastName: string | null
  userName: string | null
  loading: boolean
  errorMessage: string | null
}

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async () => {
    const profile = await fetchProfile()
    return { ...profile }
  }
)

const initialState: IInitialState = {
  email: null,
  firstName: null,
  lastName: null,
  userName: null,
  loading: false,
  errorMessage: null
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
      state.errorMessage = null
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

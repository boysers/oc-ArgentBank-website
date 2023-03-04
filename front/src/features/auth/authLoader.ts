import { json, LoaderFunction } from 'react-router-dom'
import { store } from '../../app/store'
import { getProfile } from '../profile/profileSlice'
import { login } from './authSlice'

export const authLoader: LoaderFunction = async () => {
  const token = localStorage.getItem('token')

  if (token) {
    store.dispatch((dispatch) => {
      dispatch(login(token))
    })
  }

  if (!store.getState().auth.isAuthenticated) {
    throw json(null)
  }

  store.dispatch(async (dispatch) => {
    await dispatch(getProfile())
  })

  return null
}

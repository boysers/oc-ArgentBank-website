import { json, LoaderFunction } from 'react-router-dom'
import { store } from '../../app/store'
import { login } from './authSlice'

export const authLoader: LoaderFunction = async () => {
  const token = localStorage.getItem('token')

  if (token) {
    store.dispatch((dispatch) => {
      dispatch(login(token))
    })
  }

  if (!store.getState().auth.isAuthenticated) throw json(null)

  return null
}

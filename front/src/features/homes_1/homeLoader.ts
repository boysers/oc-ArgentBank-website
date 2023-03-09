import { json, LoaderFunction } from 'react-router-dom'
import { store } from '../../app/store'

export const homeLoader: LoaderFunction = () => {
  const { isAuthenticated } = store.getState().auth

  if (isAuthenticated || localStorage.getItem('token')) throw json(null)

  return null
}

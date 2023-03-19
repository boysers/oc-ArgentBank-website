import { LoaderFunction } from 'react-router-dom'
import { store } from '../../app/store'
import { login } from '../auth'
import { getProfile } from '../profile'

export const homeLoader: LoaderFunction = () => {
  const token = localStorage.getItem('token')

  if (token) {
    store.dispatch((dispatch) => {
      dispatch(login(token))
    })

    store.dispatch(async (dispatch) => {
      await dispatch(getProfile())
    })
  }

  return null
}

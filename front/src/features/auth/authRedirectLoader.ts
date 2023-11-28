import { redirect } from 'react-router-dom'
import { store } from '../../app/store'

export async function authRedirectLoader() {
  const { isAuthenticated } = store.getState().auth

  if (isAuthenticated) {
    return redirect('/dashboard')
  }

  return null
}

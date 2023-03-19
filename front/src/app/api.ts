import { default as axios, CreateAxiosDefaults } from 'axios'
import { logout, setErrorAuth } from '../features/auth/authSlice'
import { store } from './store'

const config: CreateAxiosDefaults = {
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const api = axios.create(config)

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (config) => config,
  (error) => {
    store.dispatch((dispatch) => {
      if (error.response?.status === 401) {
        dispatch(setErrorAuth(error.response?.data.message))
        dispatch(logout())
      } else {
        dispatch(setErrorAuth('server error'))
      }
    })
    return Promise.reject(error)
  }
)

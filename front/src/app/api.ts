import { default as axios, CreateAxiosDefaults } from 'axios'

const config: CreateAxiosDefaults = {
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const api = axios.create(config)

// ============

export const fetchProfile = async (token: string) => {
  try {
    const response = await api.post(
      '/user/profile',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// ============

type DataLogin = { email: string; password: string }

export const postLogin = async (data: DataLogin) => {
  try {
    const response = await api.post('/user/login', data)
    return response?.data
  } catch (error) {
    console.error(error)
  }
}

// ============

type DataProfile = { userName: string }

export const modifyProfile = async (data: DataProfile, token: string) => {
  try {
    const response = await api.put('/user/profile', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

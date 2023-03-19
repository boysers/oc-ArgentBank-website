import { api } from '../../app/api'

export const postLogin = async (data: { email: string; password: string }) => {
  try {
    const response = await api.post('/user/login', data)
    return response?.data
  } catch (error) {
    return error
  }
}

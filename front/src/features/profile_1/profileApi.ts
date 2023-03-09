import { api } from '../../app/api'

export const fetchProfile = async () => {
  try {
    const response = await api.post('/user/profile', {})
    return response?.data.body
  } catch (error) {
    console.log(error)
    throw new Error('Error fetch profile')
  }
}

export const putProfile = async (data: { userName: string }) => {
  try {
    const response = await api.put('/user/profile', data)
    return response?.data
  } catch (error) {
    console.error(error)
  }
}

import { axios } from './axios'

export const fetchProfile = async (token: string) => {
  try {
    const response = await axios.post(
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

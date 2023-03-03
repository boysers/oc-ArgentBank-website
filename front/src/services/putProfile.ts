import { axios } from './axios'

type Data = { userName: string }

export const modifyProfile = async (data: Data, token: string) => {
  try {
    const response = await axios.put('/user/profile', data, {
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

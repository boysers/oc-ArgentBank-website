import { axios } from './axios'

type Data = { email: string; password: string }

export const postLogin = async <D = Data>(data: D) => {
  try {
    const response = await axios.post('/user/login', data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

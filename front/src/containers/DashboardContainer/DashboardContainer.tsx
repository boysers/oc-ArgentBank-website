import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from '../../hooks'
import { getProfile } from '../../redux/profileSlice'
import { login } from '../../redux/authSlice'
import { LoaderLayout, ProtectedLayout } from '../../layouts'
import { axios } from '../../services/axios'
import { AxiosError } from 'axios'

export const DashboardContainer: React.FC = () => {
  const { profile, auth } = useSelector((state) => state)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    if (auth.token) {
      const fetchData = async () => {
        await dispatch(getProfile())
      }
      fetchData()
    }
  }, [auth.token, dispatch])

  useEffect(() => {
    axios.interceptors.response.use(null, (error) => {
      if (error instanceof AxiosError) {
        console.warn(error, 'error')

        if (error.response?.status !== 401) return

        localStorage.removeItem('token')

        navigate('/signin')
      }
    })
  }, [navigate])

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(login(token))
      return
    }

    if (!auth.isAuthenticated) {
      navigate('/signin')
    }
  }, [auth.isAuthenticated, dispatch, navigate])
  return <>{profile.loading ? <LoaderLayout /> : <ProtectedLayout />}</>
}

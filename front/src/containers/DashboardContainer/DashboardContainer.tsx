import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from '../../hooks'
import { fetchProfile } from '../../redux/profileSlice'
import { login } from '../../redux/authSlice'
import { LoaderLayout, ProtectedLayout } from '../../layouts'

export const DashboardContainer: React.FC = () => {
  const { profile, auth } = useSelector((state) => state)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProfile())
    }
    fetchData()
  }, [dispatch])

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(login(token))
      return
    }

    if (!auth.isAuthenticated) {
      navigate('/signin')
    }
  }, [auth.isAuthenticated, navigate])
  return <>{profile.loading ? <LoaderLayout /> : <ProtectedLayout />}</>
}

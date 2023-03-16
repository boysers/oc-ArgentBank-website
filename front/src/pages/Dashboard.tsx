import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from '../app/hook'
import { getProfile } from '../features/profile'
import { LoaderLayout, RootLayout } from '../layouts'

export const Dashboard: React.FC = () => {
  const { profile, auth } = useSelector((state) => state)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(async (dispatch) => {
      await dispatch(getProfile())
    })
  }, [dispatch])

  useEffect(() => {
    if (!auth.isAuthenticated) {
      // navigate('/sign-in')
      navigate('/')
    }
  }, [auth.isAuthenticated, navigate])

  return <>{profile.loading ? <LoaderLayout /> : <RootLayout />}</>
}

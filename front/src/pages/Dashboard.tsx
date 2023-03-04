import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from '../app/hook'
import { LoaderLayout, RootLayout } from '../layouts'

export const Dashboard: React.FC = () => {
  const { profile, auth } = useSelector((state) => state)

  const navigate = useNavigate()

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/sign-in')
    }
  }, [auth.isAuthenticated, navigate])

  return <>{profile.loading ? <LoaderLayout /> : <RootLayout />}</>
}

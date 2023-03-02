import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeLayout } from '../../layouts'

export const HomeContainer: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard')
    }
  }, [navigate])

  return <HomeLayout />
}

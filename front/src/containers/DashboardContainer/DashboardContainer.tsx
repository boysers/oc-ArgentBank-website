import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../../redux/profileSlice'
import { AppDispatch, RootState } from '../../redux/store'
import { LoaderLayout, ProtectedLayout } from '../../layouts'
import { login } from '../../redux/authSlice'

export const DashboardContainer: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.profile)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(login('myFakeToken'))
      await dispatch(fetchProfile())
    }
    fetchData()
  }, [dispatch])
  return <>{loading ? <LoaderLayout /> : <ProtectedLayout />}</>
}

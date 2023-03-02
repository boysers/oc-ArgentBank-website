import { useDispatch as useDispatchReactRedux } from 'react-redux'
import { AppDispatch } from '../redux/store'

export const useDispatch = () => useDispatchReactRedux<AppDispatch>()

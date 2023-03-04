import {
  useDispatch as useDispatchReactRedux,
  useSelector as useSelectorReactRedux
} from 'react-redux'
import { AppDispatch, RootState } from '../app/store'

export const useDispatch = () => useDispatchReactRedux<AppDispatch>()

/**
 * Custom `useSelector` hook that provides type to the Redux root state object.
 *
 * @param selector - The selector function for select a slice of the root state object.
 * @returns The selected state.
 *
 * @example
 * const auth = useSelector((state) => state.auth);
 */
export const useSelector = <T>(selector: (state: RootState) => T) =>
  useSelectorReactRedux(selector)

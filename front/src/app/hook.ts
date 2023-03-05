import {
  useDispatch as useDispatchReactRedux,
  useSelector as useSelectorReactRedux
} from 'react-redux'
import { useLoaderData as useLoaderDataReactRouter } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'

/**
 * Custom `useDispatch` hook to access the redux `dispatch` function.
 * @returns Redux store's `dispatch` function
 *
 * @example
 * const dispatch = useDispatch()
 * dispatch(actionCreator("payload"))
 */
export const useDispatch = () => useDispatchReactRedux<AppDispatch>()

/**
 * Custom `useSelector` hook that provides type to the Redux root state object.
 *
 * @param selector - The selector function for `select` a slice of the root state object.
 * @returns The `selected` state.
 *
 * @example
 * const auth = useSelector((state) => state.auth);
 */
export const useSelector = <T>(selector: (state: RootState) => T) =>
  useSelectorReactRedux(selector)

/**
 * Custom `useLoaderData`  hook can that provides type, return the loader data for the nearest ancestor route loader.
 *
 * @returns {unknown}
 *
 * @example
 * const account = useLoaderData<ListItem>()
 */
export const useLoaderData = <T = unknown>(): T => {
  return useLoaderDataReactRouter() as T
}

import { Navigate, RouteObject } from 'react-router-dom'
import { DashboardContainer, HomeContainer } from '../containers'
import { AccountList } from '../features/accounts/AccountList'
import { SingleAccount } from '../features/accounts/SingleAccount'
import { logout, testLog } from '../features/auth/authSlice'
import { SignIn } from '../features/auth/SignIn'
import { Home } from '../features/home/Home'
import { Profile } from '../features/profile/Profile'
import { api } from './api'
import { store } from './store'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeContainer />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'signin',
        element: <SignIn />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardContainer />,
    loader: () => {
      api.interceptors.response.use(
        (response) => {
          console.log(response, 'dashboard : response interceptor')

          if (response.status === 200) {
            store.dispatch((dispatch) => {
              dispatch(testLog())
            })
          }

          return response
        },
        (error) => {
          console.log(error, 'dashboard : error interceptor')
          store.dispatch((dispatch) => {
            dispatch(logout())
          })
          // if (error instanceof AxiosError) { }
        }
      )

      return null
    },
    children: [
      {
        index: true,
        element: <Navigate to="profile" replace />
      },
      {
        path: 'profile',
        element: (
          <>
            <Profile />
            <AccountList />
          </>
        )
      },
      {
        path: 'account/:id',
        element: <SingleAccount />
      }
    ]
  }
]

import { Navigate, RouteObject } from 'react-router-dom'
import { Home, Profile, SignIn, SingleAccount } from './features'
import { DashboardContainer, HomeContainer } from './containers'

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
    children: [
      {
        index: true,
        element: <Navigate to="profile" replace />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'account/:id',
        element: <SingleAccount />
      }
    ]
  }
]

import { Navigate, RouteObject } from 'react-router-dom'
import { HomeLayout, ProtectedLayout } from './layouts'
import { Home, Profile, SignIn, SingleAccount } from './features'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
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
    element: <ProtectedLayout />,
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

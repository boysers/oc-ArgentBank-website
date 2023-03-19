import { Navigate, RouteObject } from 'react-router-dom'
import { SingleAccount, singleAccountLoader } from '../features/accounts'
import { authLoader, SignIn } from '../features/auth'
import { Home, homeLoader } from '../features/home'
import { RootLayout } from '../layouts'
import { Dashboard, ProfilePage } from '../pages'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    loader: homeLoader,
    errorElement: <Navigate to="/dashboard" />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    loader: authLoader,
    errorElement: <Navigate to="/sign-in" />,
    children: [
      {
        index: true,
        element: <Navigate to="profile" replace />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'account/:id',
        element: <SingleAccount />,
        loader: singleAccountLoader,
        errorElement: <Navigate to="/dashboard" />
      }
    ]
  }
]

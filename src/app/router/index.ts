import { createBrowserRouter } from 'react-router-dom'

import Login from '@/features/auth/pages/Login'
import DashboardPage from '@/features/dashboard/pages/Dashboard'
import { PrivateRoute } from '@/routes/PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
])
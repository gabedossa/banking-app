import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/auth-store'
import type { ReactNode } from 'react'

type PrivateRouteProps = {
  children: ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}

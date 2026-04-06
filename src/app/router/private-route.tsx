import { Navigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/auth-store'
import type { ReactNode } from 'react'

export function PrivateRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/" />
  }

  return children
}
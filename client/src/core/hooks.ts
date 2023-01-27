import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

export function useCurrentRoute() {
  const { pathname } = useLocation()
  const isCurrentRoute = useCallback(
    (_route: string, startsWith: boolean) =>
      startsWith ? pathname.startsWith(_route) : pathname === _route,
    [pathname]
  )
  return isCurrentRoute
}

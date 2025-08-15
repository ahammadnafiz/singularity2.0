'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RouterFix() {
  const router = useRouter()

  useEffect(() => {
    // Force refresh on navigation for static exports
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        window.location.reload()
      }
    }

    // Listen for popstate events (back/forward button)
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return null
}

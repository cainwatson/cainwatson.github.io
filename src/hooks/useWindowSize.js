import { useState, useEffect } from 'react'

const isClient = typeof window === 'object'
const getSize = () => ({
  width: isClient ? window.innerWidth : undefined,
  height: isClient ? window.innerHeightinnerWidth : undefined,
})

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

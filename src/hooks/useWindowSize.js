import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeightinnerWidth,
  })
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

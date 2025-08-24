import { useEffect, useState } from 'react'

export default function useFooterInView() {
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      {
        root: null, // viewport
        threshold: 0.1,
      }
    )

    observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return isFooterVisible
}

import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const alertClasses = {
  success: 'alert-success',
  error: 'alert-error',
  warning: 'alert-warning',
  info: 'alert-info',
}

export default function Alert({ message, type, onClose }) {
  const [isVisible, setisVisible] = useState(false)

  useEffect(() => {
    if (!message || !type) return

    setisVisible(true)
    // animation that last 4s
    const timer = setTimeout(() => {
      setisVisible(false)
    }, 4000)

    // remove alert from dom with passed down function
    const cleanup = setTimeout(() => {
      onClose()
    }, 4500) // wait for animation to finish

    return () => {
      clearTimeout(timer)
      clearTimeout(cleanup)
    }
  }, [message, type, onClose])

  if (!message || !type) return null

  const alertClass = `alert ${alertClasses[type]} fixed top-5 right-5 z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-x-0' : 'translate-x-[150%]'}`

  return (
    <div role="alert" className={alertClass} id="alert">
      <CheckCircleIcon className="h-5 w-6 stroke-2 text-current" />
      <span>{message}</span>
    </div>
  )
}

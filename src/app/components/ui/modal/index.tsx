import { useCallback, useEffect } from 'react'

interface Props {
  onClose: () => void
  isOpen: boolean
  children: React.ReactNode
  closeButton?: boolean
}

export const Modal = ({
  children,
  isOpen,
  onClose,
  closeButton = false,
}: Props) => {
  const handleEscapePress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    window.addEventListener('keydown', handleEscapePress)

    return () => {
      window.removeEventListener('keydown', handleEscapePress)
    }
  }, [handleEscapePress])

  if (!isOpen) return null
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
      <div className="bg-black bg-opacity-50 absolute top-0 left-0 bottom-0 right-0" onClick={onClose} />

      <div className="bg-white rounded-lg p-8 max-w-2xl w-full relative">
        {closeButton && (
          <button className="absolute top-2 right-2 text-gray-500 hover:text-black px-2 text-2xl" onClick={onClose}>
            &times;
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

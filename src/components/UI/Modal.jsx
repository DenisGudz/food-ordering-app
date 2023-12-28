import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

function Modal({children, open=false, className = "", onClose}) {
  const dialog = useRef()

  useEffect(() => {
    const modal = dialog.current
    if (open) {
      modal.showModal()
    }

    return () => {
      modal.close()
    }
  }, [open, dialog])


  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
  document.querySelector('#modal')
  )
}

export default Modal
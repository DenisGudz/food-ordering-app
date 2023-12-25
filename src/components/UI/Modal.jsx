import { useRef } from 'react'
import { createPortal } from 'react-dom'

function Modal({children, open, className = ""}) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    }
  }, [open])
  createPortal(
    <dialog ref={dialog} className={`modal ${className}`} open={open}>{children}</dialog>
  , document.querySelector('#modal'))
}

export default Modal
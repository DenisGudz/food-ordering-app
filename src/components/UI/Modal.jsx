import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

function Modal({children, open=false, className = ""}) {
  const dialog = useRef()

  useEffect(() => {
    const modal = dialog.current
    console.log(open && !dialog.current.hasAttribute('open'))
    if (open) {
      console.log(dialog.current)
      modal.showModal()
      console.log('showing modal')
    }

    return () => {
      modal.close()
    }
  }, [open, dialog])


  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
  document.querySelector('#modal')
  )
}

export default Modal
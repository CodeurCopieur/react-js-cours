import { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'

export default function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className='mx-auto block bg-blue-500 text-white px-4 py-2 rounded-md'
        onClick={() => setIsOpen(true)}
      >
        ouvrir la modal
      </button>

      {isOpen && createPortal(<ModalContent closeModal={() => setIsOpen(false)}/>, document.body)}
    </>
  )
}

import { useState } from 'react'
import React from 'react'
import SelfModal from './SelfModal'

const SelfModalUse = () => {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <SelfModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <>
            Hello, from Modal
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
        </>
    </SelfModal>
  )
}

export default SelfModalUse
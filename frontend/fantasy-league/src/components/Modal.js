import React, { useState } from 'react'

export default function Modal() {

    const [modal, setModal] = useState(false);

  return (
    <div>
        <button className='btn-modal'> onClick={toggleModal}</button>
    </div>
  )
}

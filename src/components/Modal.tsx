import React from 'react'

interface Props {
    open: boolean;
    children: JSX.Element | JSX.Element[];
    closeModal(): void;
}

const Modal = ({open,  children, closeModal} : Props): JSX.Element | null => ( 
   open ? <>
   <div className='modal-backdrop' onClick={() => closeModal()} />
   <div className='modal' >
   <button className='button exit-button' onClick={() => closeModal()}>X</button>
       {children}
   </div>
   </>: null
)

export default Modal;
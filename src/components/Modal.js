import Styles from './modules/Modal.module.css'

const Modal = ({open,  children, closeModal}) => ( 
   open && <>
   <div className={Styles.backdrop} onClick={closeModal} />
   <div className={Styles.modal}>
   <button className='button exit-button' onClick={closeModal}>X</button>
       {children}
   </div>
   </>
)

export default Modal;
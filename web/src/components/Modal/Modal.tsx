import Icon from '../Icon/Icon'
import Overlay from '../Overlay/Overlay'

interface ModalProps {
  children: JSX.Element
  handleClose: () => void
  status: string
}

const Modal = ({ children, handleClose, status }: ModalProps) => {
  return (
    <div className="center h-screen w-screen">
      <Overlay />
      <div
        className={`status-${status} relative w-full max-w-[735px] border-[6px] border-white px-20 py-12 text-white`}
      >
        <button className="absolute right-6 top-6" onClick={handleClose}>
          <Icon id="close" size={32} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal

import './Modal.css'

interface Props {
  children: React.ReactNode
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ children, setShowModal }: Props) {
    return(
        <div id="modal">
            <div className="fade" onClick={() => {setShowModal(false)}} ></div>
            <div className="modal">
                {children}
            </div>
        </div>
    )
}
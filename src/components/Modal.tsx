import './Modal.css'

interface Props{
    children: React.ReactNode
}

export default function Modal({children}: Props){
    return(
        <div id="modal">
            <div className="fade"></div>
            <div className="modal">
                <h2>Texto</h2>
                {children}
            </div>
        </div>
    )
}
/* eslint-disable react/prop-types */
import { XCircleIcon } from "@heroicons/react/solid";

function Modal({title,onOpen,open,children}) {
    if(!open) return null;

    return(
        <div>
            <div className="backdrop" onClick={()=>onOpen(false)}></div>
            <div className="modal">
                <div className="modal__header">
                    <h2 className="title">{title}</h2>
                    <XCircleIcon className="icon" onClick={()=>onOpen(false)}/>
                </div>
                <div className="modal_item">

                {children}
                </div>
            </div>
        </div>
    )
}
export default Modal;
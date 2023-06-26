import { CgClose } from "react-icons/cg";

function Overlay({ isOpen, onClose, children }) {
    return (
        <>
            {
                isOpen ? (
                     <div className="overlay">
                     <div className="overlay_background" onClick={onClose} />
                            <div className="overlay_container">
                                <div className="flex flex-col justify-between gap-5">
                                    <div className="overlay_header">
                                        <p className="text-xl font-bold leading-8">ADD NEW EXERCISE</p>
                                        <button className="overlay_close" onClick={onClose}>
                                            <CgClose size={ 30} /> 
                                        </button>
                                    </div>
                                    {children}
                                </div>
                            </div>
                        </div>
                ) 
                : null
            }
        </>
    )
}

export default Overlay;
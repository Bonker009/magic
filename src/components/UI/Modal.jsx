// eslint-disable-next-line react/prop-types
function Modal({ children, onClose }) {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50" onClick={onClose} />
            <dialog open className="bg-white top-6 rounded-lg p-4 sm:p-6 md:p-4 lg:p-10 xl:p-10 w-full max-w-xl z-50">
                {children}
            </dialog>
        </>
    );
}

export default Modal;
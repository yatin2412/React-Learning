import React, { useRef } from "react";
import ReactDOM from "react-dom";

const modalElement = document.getElementById("modal-root");

const SelfModal = ({isOpen, setIsOpen, children }) => {
  const modalRef = useRef(null);
  if (!isOpen) return <>
    <button onClick={() => setIsOpen(true)}>OpenModal</button>
  </>
  return ReactDOM.createPortal(
    <div
      // onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        ref={modalRef}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        {children}
      </div>
    </div>,
    modalElement,
  );
};

export default SelfModal;

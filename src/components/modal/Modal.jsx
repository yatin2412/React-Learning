import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  // ESC key close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // outside click
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={handleBackdropClick}
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
        zIndex: 1000
      }}
    >
      <div
        ref={modalRef}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px"
        }}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
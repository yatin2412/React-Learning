import React, { useState } from "react";
import Modal from "./Modal";

function ModalUse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Modal Example</h1>

      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2>Hello Modal</h2>
        <p>This is reusable modal content.</p>

        <button onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default ModalUse;
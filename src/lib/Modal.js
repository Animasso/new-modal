import React from "react";
import { useState } from "react";
function Modal(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>{props.textModal}</h2>
          <button className="close-modal" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;

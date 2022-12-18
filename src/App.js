import { useState } from "react";
import "./App.css";
import React from "react";

function App(props) {
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

export default App;

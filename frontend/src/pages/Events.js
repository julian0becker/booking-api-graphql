import React, { useState } from "react";
import Backdrop from "../components/Backdrop/Backdrop";
import Modal from "../components/Modal/Modal";
import "./Events.css";

export default function Events() {
  const [creating, setCreating] = useState(false);

  const startCreateEventHandler = () => {
    setCreating(true);
  };

  const modalConfirmHandler = () => {
    setCreating(false);
  };
  const modalCancelHandler = () => {
    setCreating(false);
  };

  return (
    <React.Fragment>
      {creating && <Backdrop />}
      {creating && (
        <Modal onCancel={modalCancelHandler} onConfirm={modalConfirmHandler} />
      )}
      <div className="events-control">
        <p>Share your own events!</p>
        <button className="btn" onClick={startCreateEventHandler}>
          Create Event
        </button>
      </div>
    </React.Fragment>
  );
}

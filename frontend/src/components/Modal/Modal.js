import React from "react";
import "./Modal.css";

export default function Modal(props) {
  return (
    <div className="modal">
      <header className="modal_header">
        <h1>Modal Title</h1>
      </header>
      <section className="modal_content">content</section>
      <section className="modal_actions">
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      </section>
    </div>
  );
}

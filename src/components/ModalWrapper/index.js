import React from "react";
import "./Modal.css";
function ModalWrapper({ children,close,isOpen,modalTitle="Create Blog Content" }) {
  return (
    <>
      <div className="modal" id="modal-one" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>{modalTitle}</h2>
            <button onClick={()=>close()}>x</button>
          </div>
          <div className="modal-body">
            <div>{children}</div>
          </div>
          <div className="modal-footer">
            <button >Modal Level Button</button>
          </div>
        </div>
      </div>
      <div className="wrap">
        <a href="#" className="btn btn-big">
          Add Content+
        </a>
      </div>
    </>
  );
}

export default ModalWrapper;

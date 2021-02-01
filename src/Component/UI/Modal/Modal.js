import React from 'react'

import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

function Modal(props) {
    return (
        <div>
           <Backdrop show={props.show} clicked={props.modalClosed} /> 

           <div
          className="modal"
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
          }}
        >
          <select>
              <option>aakash</option>
          </select>
        </div>
        </div>
    )
}

export default Modal

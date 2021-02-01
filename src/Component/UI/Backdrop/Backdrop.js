import React from 'react'

import "./Backdrop.css";

function Backdrop(props) {
    return (
        
            props.show ? <div className="modal-backdrop" onClick={props.clicked}></div> : null
        
    )
}

export default Backdrop

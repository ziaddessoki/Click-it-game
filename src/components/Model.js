import React from 'react';
import Modal from 'react-bootstrap/Modal'
// import './Modal.css';



function Model(props) {
  
    return (
        
      <div >
        <Modal className={Model} {...props}>
          <Modal.Header closeButton>
            <Modal.Title>Good Job!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you've made it to the next level</Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={props.onHide}>
              Close
            </button>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
//   render(<Model />);

  export default Model;
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import './Modal.css';





function modal(props) {

  let title = "Good Job!!";
  let body = "Woohoo, you've made it to the next level."

  if (props.loseModal){
    title = 'You Suck!!';
    body = "Better luck next time!!"
  }
    return (
        
      <div >
        <Modal  {...props}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
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

  export default modal;
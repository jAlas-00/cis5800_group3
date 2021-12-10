import React, { useState, useRef } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

function ProtectedPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [error, setError] = useState(false);
  const select = useRef(null);

  const [completion, setCompletion] = useState('null')

    function checkLibrary () {
        { completion != '123456789' ? alert('Library Not Found') : handleShow() }
    }

    return (
        <div className='container'>
            <h1>Enter Library ID:</h1>
            <Form.Control required onChange={e => setCompletion(e.target.value)}/>
            <Button size="lg" style={{ backgroundColor: '#668fbf', marginTop: '30px'}}
            onClick={checkLibrary}
            ref={select}
            > Submit </Button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome to NYC Public Library
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
        </Modal>

            <div style={{ marginBottom: '300px'}}></div>
        </div>
        
    )
}

export default ProtectedPage

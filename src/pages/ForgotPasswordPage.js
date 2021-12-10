import React, { useState } from 'react'
import { Form, Button, Modal} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

function ForgotPasswordPage() {
    const [email, setEmail] = useState('')
    const { forgotPassword } = useAuth()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className='container'>
<Form onSubmit={async e => {
            e.preventDefault()
            try {
              await forgotPassword(email)
              handleShow();
            } catch (error) {
              console.log(error.message)
              console.log(email)
            }
          }}>
    Forgot your password?
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter the Email used for your account</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
  </Form.Group>
  <Button style={{ backgroundColor: '#668fbf'}} variant="primary" type="submit">Submit</Button>
</Form>
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
          We sent an Email to Reset your Password
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
        </Modal.Footer>
        </Modal>
<div style={{ marginBottom: '250px'}}></div>
</div>
    )
}

export default ForgotPasswordPage

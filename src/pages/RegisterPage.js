import React, { useState } from 'react'
import { Stack, Container, Form, Button, Modal, Nav } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    //const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register } = useAuth()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container'>
            <Container>
                <Stack gap={3}>

                    <h2>Register</h2>

                    <Form onSubmit={
                            async e => {
                            e.preventDefault();
                            register(email, password).then(response => console.log(response))
                            handleShow();}}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                            <Button style={{ backgroundColor: '#668fbf'}} variant="primary" type="submit">Submit</Button>

                    </Form>
                </Stack>
            </Container>
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
          Welcome to SharedShelf
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              <Nav.Link href="/" style={{textDecoration: 'none', color: 'white'}}>Close</Nav.Link>
          </Button>
        </Modal.Footer>
        </Modal>
            <div style={{ marginBottom: '100px'}}></div>
    </div>
    )
}

export default RegisterPage

import React, { useState } from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button, NavDropdown, Offcanvas} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import '../styling/nav.css'

function NavbarComponent() {

    const { currentUser, logout } = useAuth()

    return (
      <>
  <Navbar className="Navbar" expand={false}>
    
  <Container fluid>
    <Navbar.Brand href="/"><img src='/images/nav_logo.png' alt='logo' style={{width: '200px', height: '90px'}}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" style={{backgroundColor: 'white'}}/>
    <Navbar.Offcanvas 
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Pages</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
      {!currentUser && <Nav.Link style={{color: '#668fbf', textDecoration: 'underline'}} href="/login">Login</Nav.Link>}
      {!currentUser && <Nav.Link style={{color: '#668fbf', textDecoration: 'underline'}} href="/register">Register</Nav.Link>}
      {!currentUser && <Nav.Link style={{color: '#668fbf', textDecoration: 'underline'}} href="/forgotpassword">Reset Password</Nav.Link>}

      {currentUser && <Nav.Link style={{color: 'black', textDecoration: 'underline'}} href="/protected-page">Library ID</Nav.Link>}
      {currentUser && <Nav.Link style={{color: 'black', textDecoration: 'underline'}} href="/profile">Profile</Nav.Link>}
      {currentUser && <Nav.Link style={{color: 'black', textDecoration: 'underline'}} href="/libraryusers">Library Users</Nav.Link>}
      {currentUser && <Nav.Link style={{color: 'black', textDecoration: 'underline'}} href="/catalog">Catalog</Nav.Link>}
      {currentUser && <Nav.Link style={{color: 'black', textDecoration: 'underline'}} href="/report">Reports</Nav.Link>}
      {currentUser && <Nav.Link style={{color: 'black', textDecoration: 'underline'}} href="/books">Search for Books</Nav.Link>}
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">Search</Button>
        </Form>
        {currentUser && <Button style={{marginTop: '20px'}}
        variant="danger" onClick={async e=> { e.preventDefault();logout()}}>Logout</Button>}
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</>
    )}

export default NavbarComponent

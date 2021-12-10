import { useState, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { Stack, Container, Form, Button, Nav, Toast} from 'react-bootstrap';
import useMounted from '../hooks/useMounted';

const LoginPage = () => {
  let history = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false) //for toast
  const { login, signInWithGoogle } = useAuth()

  const mounted = useMounted

return (
<div className='container'>       
<Container>
  <Stack gap={3}>
      <h1>Login</h1>

<Form onSubmit={async e => {
    e.preventDefault()
    if (!email || !password){
      window.alert("password or email missing")
      return
    }
    setIsSubmitting(true)
    login(email, password)
      .then(res => {
        console.log(res)
        history('/profile')
      })
      .catch(error => {
        window.alert("error")
        console.log(error.message)},
        // <Toast><Toast.Body>ERROR</Toast.Body></Toast>
      ).finally(()=> mounted.current && setIsSubmitting(false))
    // window.alert("submitted!")
    }}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control id='email' type="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit" style={{width: "300px", backgroundColor: '#668fbf'}}> Login</Button>
</Form>

<Button class="login-with-google-btn" variant="primary" type="submit" style={{width: "300px", backgroundColor: '#668fbf'}} onClick={() => 
  signInWithGoogle()
  .then(history('/'))
  .catch(error => console.log(error))}>
  Login With Google
</Button>

<Button variant="secondary" style={{width: "300px"}} >
  <Nav.Link href="/register" style={{textDecoration: 'none', color: 'white'}}>Don't have an Account? Register Now!</Nav.Link>
</Button>

    </Stack>
  </Container>
  </div>
    )
}

export default LoginPage

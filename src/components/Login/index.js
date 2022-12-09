import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    const updateEmail = (e) => {
        const input = e.target.value
        setEmail(input)
        // console.log(email)
    }

    const updatePassword = (e) => {
        const input = e.target.value
        setPassword(input)
        // console.log(password)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.post("http://127.0.0.1:5000/login", { "email": email, "password": password })
        console.log(result)
        if(result.status === 200){
            navigate('/')
        }
    }

  return (
    <div>
        Login Page
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={updateEmail} required/>
            </Form.Label>

            </Form.Group>
            <Form.Group>

            <Form.Label>Password
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={updatePassword} required/>
            </Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Sign in
            </Button>
        </Form>
        <div>No account? <NavLink to="/register">Register here!</NavLink></div>
    </div>
  )
}

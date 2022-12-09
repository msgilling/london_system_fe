import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const [ email, setEmail ] = useState('')
    const [ fullname, setFullname ] = useState('')
    const [ username, setUsername ] = useState('')
    // const [ age, setAge ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')

    const navigate = useNavigate()

    const updateEmail = (e) => {
        const input = e.target.value
        setEmail(input)
        // console.log(email)
    }
    const updateFullname = (e) => {
        const input = e.target.value
        setFullname(input)
    }
    const updateUsername = (e) => {
        const input = e.target.value
        setUsername(input)
    }
    // const updateAge = (e) => {
    //     const input = e.target.value
    //     setAge(input)
    // }

    const updatePassword = (e) => {
        const input = e.target.value
        setPassword(input)
        // console.log(password)
    }
    const updatePasswordConfirmation = (e) => {
        const input = e.target.value
        setPasswordConfirmation(input)
        // console.log(password)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.post("http://127.0.0.1:5000/sign-up", { "email": email, "name": fullname, "username": username, "password1": password, "password2": passwordConfirmation })
        console.log(result)
        if(result.status === 201){
            navigate('/')
        }
    }
    return (
        <div>Register page
        <Form>
            <Form.Group className="mb-3">
            <Form.Label>Email
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={updateEmail} required/>
            </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Full name
            <Form.Control type="email" placeholder="Enter full name" value={fullname} onChange={updateFullname} required/>
            </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Username
            <Form.Control type="username" placeholder="Enter username" value={username} onChange={updateUsername} required/>
            </Form.Label>
            </Form.Group>

            {/* <Form.Group className="mb-3" >
            <Form.Label>Age
            <Form.Control type="date" placeholder="Enter date of birth" value={age} onChange={updateAge} required/>
            </Form.Label>
            </Form.Group> */}

            <Form.Group>
            <Form.Label>Password
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={updatePassword} required/>
            </Form.Label>
            </Form.Group>

            <Form.Group>
            <Form.Label>Password Confirmation
            <Form.Control type="password" placeholder="Enter password confirmation" value={passwordConfirmation} onChange={updatePasswordConfirmation} required/>
            </Form.Label>

            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Sign up
            </Button>
        </Form>
        <div>Already got an account? <NavLink to="/login">Log in here!</NavLink></div>
    </div>
    )
}

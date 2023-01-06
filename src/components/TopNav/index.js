import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'

export default function TopNav() {
    return (
        <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
                    <Nav.Link to="/register" as={NavLink}>Register</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}

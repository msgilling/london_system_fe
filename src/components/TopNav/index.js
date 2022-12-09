import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TopNav() {
    return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul>
    </nav>
    )
}

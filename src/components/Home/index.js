import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <ul>
                <li><NavLink to="/game-list">Games List</NavLink></li>
                <li><NavLink to="/add-game">Add Game</NavLink></li>
                <li><NavLink to="/event-list">Events List</NavLink></li>
                <li><NavLink to="/add-event">Add an Event</NavLink></li>
            </ul>
        </div>
    )
}

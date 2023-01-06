import React from 'react'
import { Card } from "react-bootstrap"

export default function Game({game}) {
  return (
    <Card className="h-100">
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                <span className="fs-2">{game.name}</span>
            </Card.Title>
            <Card.Text>
                {game.description}
            </Card.Text>
        </Card.Body>
        {/* <h1>{game.name}</h1>
        <p>{game.description}</p> */}
        <Card.Img variant="top" src={game.image} height="200px"
            style={{ objectFit: "cover" }} />
    </Card>
  )
}

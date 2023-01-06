import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AddGame() {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ minAge, setMinAge ] = useState('')
  const [ year, setYear ] = useState('')
  const [ minPlayers, setMinPlayers ] = useState('')
  const [ maxPlayers, setMaxPlayers ] = useState('')
  const [ video, setVideo ] = useState('')
  const [ image, setImage ] = useState('')
  const [ genre, setGenre ] = useState('')

  const navigate = useNavigate()
  
  const updateName = (e) => {
    const input = e.target.value
    setName(input)
  }
  const updateDescription = (e) => {
    const input = e.target.value
    setDescription(input)
  }
  const updateMinAge = (e) => {
    const input = e.target.value
    setMinAge(input)
  }
  const updateYear = (e) => {
    const input = e.target.value
    setYear(input)
  }
  const updateMinPlayers = (e) => {
    const input = e.target.value
    setMinPlayers(input)
  }
  const updateMaxPlayers = (e) => {
    const input = e.target.value
    setMaxPlayers(input)
  }
  const updateVideo = (e) => {
    const input = e.target.value
    setVideo(input)
  }
  const updateImage = (e) => {
    const input = e.target.value
    setImage(input)
  }
  const updateGenre = (e) => {
    const input = e.target.value
    setGenre(input)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post("http://127.0.0.1:5000/games", { name, description, "min_age":minAge, year, "min_players":minPlayers, "max_players":maxPlayers, "video_link":video, image, genre })
    console.log(result)
    if(result.status === 201){
        navigate('/')
    }
  }
  
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Game Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Game Name" onChange={updateName} />
        <Form.Text className="text-muted">
          A descriptive name for the new game.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Game Description</Form.Label>
        <Form.Control as="textarea" rows={4}  onChange={updateDescription}/>
      </Form.Group>

      <InputGroup className="mb-3">
        <InputGroup.Text>Min age and year made</InputGroup.Text>
        <Form.Control type="number" step={1} max={18} placeholder="5"   onChange={updateMinAge}/>
        <Form.Control type="number" step={1} max={2023} placeholder="1999"   onChange={updateYear}/>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Min and max players</InputGroup.Text>
        <Form.Control type="number" step={1} max={8} placeholder="1" onChange={updateMinPlayers}/>
        <Form.Control type="number" step={1} max={8} placeholder="4" onChange={updateMaxPlayers}/>
      </InputGroup>

      <Form.Group className="mb-3">
        <Form.Label>Game Video</Form.Label>
        <Form.Control type="name" placeholder="Enter Game Video" onChange={updateVideo}/>
        <Form.Text className="text-muted">
          A link to a video explaining how to play.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Game Image</Form.Label>
        <Form.Control type="name" placeholder="Enter Game Image" onChange={updateImage}/>
        <Form.Text className="text-muted">
          give the image address that best suits the game for a thumbnail.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Select aria-label="Default select example" onChange={updateGenre}>
          <option>Open this select menu</option>
          <option value="Word game">Word game</option>
          <option value="Tile-based game">Tile-based game</option>
          <option value="Abstract strategy game">Abstract strategy game</option>
          <option value="Business simulation game">Business simulation game</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}

import React, {useState, useEffect} from 'react'
import { Game } from '../../components';
import { Col, Row } from "react-bootstrap"
import axios from 'axios';

export default function GameList() {
  const [ gameList, setGameList ] = useState([]);

  async function getGames() {
    const fetchAPI = "http://127.0.0.1:5000/games"
    try {
      const result = await axios.get(fetchAPI);
      console.log(result.data);
      setGameList(result.data)
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getGames();
  }, [])

  return (
    <div>
      {gameList ? 
      <Row md={2} xs={1} lg={3} className="g-3">
        {gameList.map((game) => (
          <Col><Game game={game}/></Col>
        ))}
      </Row> : <p>loading</p>}
    
    </div>
  )
}

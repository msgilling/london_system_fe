import './App.css';
import { Home, Login, Register, TopNav, BotNav } from './components'
import { AddEvent, AddGame, EventList, GameList } from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <TopNav/>
      {/* </header> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/add-event" element={<AddEvent/>}/>
        <Route path="/add-game" element={<AddGame/>}/>
        <Route path="/event-list" element={<EventList/>}/>
        <Route path="/game-list" element={<GameList/>}/>
      </Routes>
      <BotNav/>
    </div>
  );
}

export default App;

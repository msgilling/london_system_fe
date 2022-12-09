import './App.css';
import { Home, Login, Register, TopNav, BotNav } from './components'
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
      </Routes>
      <BotNav/>
    </div>
  );
}

export default App;

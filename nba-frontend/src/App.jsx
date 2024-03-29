import { useState, createContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import NavBar from './components/navbar.jsx'
import Team from './components/pages/team.jsx'
import Position from './components/pages/position.jsx'
import Home from './components/pages/home.jsx'
import Data from './components/pages/data.jsx'
import './App.css'
export const TeamContext = createContext(null);
function App() {
  const [currentTeam, setCurrentTeam] = useState([])
  return (
    <>
    <TeamContext.Provider value={{ currentTeam: currentTeam, setCurrentTeam: setCurrentTeam }}>
      <Router>
        <NavBar/>
        <Routes >
          <Route path='/' Component={Home}></Route>
          <Route path='/team' Component={Team}></Route>
          <Route path='/position' Component={Position}></Route>
          <Route path='/data' Component={Data}></Route>
        </Routes >
      </Router>
    </TeamContext.Provider>
      
    </>
    
  )
}

export default App

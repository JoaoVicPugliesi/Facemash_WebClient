import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './css/App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Rank } from './pages/Rank'
import { Contacts } from './pages/Contacts'

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/about' Component={About}/>
            <Route path='/rank' Component={Rank}/>
            <Route path='/contacts' Component={Contacts}/>
        </Routes>
    </Router>
  )
}

export default App

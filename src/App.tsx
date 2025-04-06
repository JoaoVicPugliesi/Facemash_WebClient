import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './css/App.css'
import { Home } from './pages/Home'

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={Home}/>
        </Routes>
    </Router>
  )
}

export default App

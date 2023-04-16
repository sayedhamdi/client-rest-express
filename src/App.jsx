import './App.css'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Users from './pages/Users'
import UserProfile from './pages/UserProfile'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/users" element={ <Users />} />
          <Route path="/users/:id" element={ <UserProfile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

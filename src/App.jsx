import { useState } from 'react'
import './index.css'
import { Auth } from './components/Auth'
import { Home } from './components/Home'


function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      {user ? <Home user={user} /> : <Auth setUser={setUser} />}
    </div>
  )
}

export default App

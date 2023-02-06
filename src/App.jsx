import { useState } from 'react'
import './App.css'
import { Auth } from './components/Auth'
import { Feed } from './components/Feed'
import { LeftSideBar } from './components/LeftSideBar'
import { Navbar } from './components/Navbar'
import Cookies from 'universal-cookie/cjs/Cookies'

const cookies = new Cookies()

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'))

  if (!isAuth) {
    return (
      <div className="App">
        <Auth />
      </div>
    )
  } else {
    return (
      <div className="app">
        <Navbar />
        <Feed />
        <LeftSideBar />

      </div>
    )
  }



}

export default App

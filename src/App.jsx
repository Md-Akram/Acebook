import Cookies from 'js-cookie'
import { useState } from 'react'
import './App.css'
import { Auth } from './components/Auth'
import { Feed } from './components/Feed'
import { LeftSideBar } from './components/LeftSideBar'
import { Navbar } from './components/Navbar'

function App() {
  const [isAuth, setIsAuth] = useState(Cookies.get('auth-token'))

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

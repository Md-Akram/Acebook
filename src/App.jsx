import { useState } from 'react'
import './App.css'
import { Auth } from './components/Auth'
import { Feed } from './components/Feed'
import { LeftSideBar } from './components/LeftSideBar'
import { Navbar } from './components/Navbar'

function App() {
  const [user, setUser] = useState()
  const [post, setPost] = useState()

  if (!user) {
    return (
      <div className="App">
        <Auth setUser={setUser} />
      </div>
    )
  } else {
    return (
      <div className="app">
        <Navbar />
        <Feed post={post} />
        <LeftSideBar setPost={setPost} />

      </div>
    )
  }



}

export default App

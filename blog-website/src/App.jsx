import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Post from './pages/Post'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/post/:slug" element={<post />}/>
    </Routes>
    </>
  )
}

export default App

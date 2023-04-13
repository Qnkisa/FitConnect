import { useState ,useRef} from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import {Routes,Route,BrowserRouter as Router,Link} from "react-router-dom"
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

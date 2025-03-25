import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from 'lucide-react';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Heder from './components/Heder';
import Help from './pages/Help';
import CreateListing from './pages/CreateListing';


function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
  <Heder/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-in' element={<Signin />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/about' element={<About />} />
    <Route path='/help' element={<Help />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/create-listing' element={<CreateListing />} />

    
  </Routes>
  </BrowserRouter>
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubscriptionPage from "./pages/subscriptionPage";
import HomePage from './pages/HomePage'
import DropinPage from './pages/DropinPage'
import GalleryPage from './pages/GalleryPage'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)


    return (
      <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subs" element={<SubscriptionPage />} />
        <Route path="/dropin" element={<DropinPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
        </Router>
       
      </>
    );
}

export default App

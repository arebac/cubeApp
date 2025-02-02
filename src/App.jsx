import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import DropinPage from './pages/DropinPage'
import GalleryPage from './pages/GalleryPage'
import Navbar from './components/Navbar';
import SubscriptionPage from './pages/SubscriptionPage';

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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)


    return (
      <>
        <Navbar />
        <div className='home-page'>
        <div className="header-right">
          <span>
          <span className="name">Joel Centeno</span><br />
          <span className="role">Head Trainer</span>
          </span>
        </div>
          <h1 className="styled-heading">
            "It's all about what you<br />
            <span>
              can <span className="highlight">achieve</span> with your
            </span>
            <br />
            <span className="highlight">body"</span>
          </h1>
        </div>
      </>
    );
}

export default App

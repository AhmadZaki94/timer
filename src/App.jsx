import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { Timer } from './components/Timer';

function App() {
  

  return (
    <div className="App">
      <Timer st = {5} sp = {30} />
    </div>
  )
}

export default App

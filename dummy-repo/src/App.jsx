import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Infrastructure Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>CPU Usage</h3>
          <p>27%</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>Memory Usage</h3>
          <p>3.4 GB</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h3>Running VMs</h3>
          <p>11</p>
        </div>
      </div>
    </div>
  );
}


export default App

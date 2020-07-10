import React from 'react';
import './App.css';
import Home from "./components/Home.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Display a poem here:
        </p>
      </header>
      <Home />
    </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import './App.css';
import ModelSelection from './components/ModelSelection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quinvent</h1>
      </header>
      <main>
        <ModelSelection />
      </main>
    </div>
  );
}

export default App;

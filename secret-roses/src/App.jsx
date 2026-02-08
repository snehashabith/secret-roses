import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './Homepage';
import Submission from './Submission';
import Display from './Display';
import Card from './Card';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/display" element={<Display />} />
        <Route path="/card" element={<Card />} />
        
      </Routes>
    </Router>
  )
}

export default App;

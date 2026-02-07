import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './Homepage';
import Submission from './Submission';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/submission" element={<Submission />} />
        {/*commenting out route
        <Route path="/display" element={<Display />} /> */}
      </Routes>
    </Router>
  )
}

export default App;

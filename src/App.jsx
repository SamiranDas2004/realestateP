import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/components/Subcomponents/Home"
import Project from './components/Subcomponents/Project';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project/>}/>
      </Routes>

  );
}

export default App;

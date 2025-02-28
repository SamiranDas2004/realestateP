import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Subcomponents/Home';
import Project from '../Projects/Project';

function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project/>}/>
      </Routes>
    </Router>
  );
}

export default CustomRoutes;

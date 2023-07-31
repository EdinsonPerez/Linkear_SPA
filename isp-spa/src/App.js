// En App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Cambiar 'Switch' por 'Routes'
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';

const App = () => {
  return (
    <Router>
      <Routes> {/* Cambiar 'Switch' por 'Routes' */}
      <Route exact path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes> {/* Cambiar 'Switch' por 'Routes' */}
    </Router>
  );
};

export default App;


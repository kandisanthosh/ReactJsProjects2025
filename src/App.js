import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import ReactUseStateComponentExample1 from './components/ReactUseStateComponentExample1';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
        <ReactUseStateComponentExample1></ReactUseStateComponentExample1>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import ReactUseStateComponentExample1 from './components/ReactUseStateComponentExample1';
import PersistedInput1 from './components/PersistedInput1';
import UserTable from './components/UserTable';
import SortableUserTable from './components/SortableUserTable';
import LiveUserTable from './components/LiveUserTable';

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
        <useEffectHook1></useEffectHook1>
        <PersistedInput1></PersistedInput1>
        <UserTable></UserTable>
        <SortableUserTable></SortableUserTable>
        <LiveUserTable></LiveUserTable>
      </div>
    </Router>
  );
};

export default App;

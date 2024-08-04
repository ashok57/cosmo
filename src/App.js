import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeProvider from './components/EmployeeContext';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';

const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
};

export default App;

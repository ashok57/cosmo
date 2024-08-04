import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.emp_id !== id));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;

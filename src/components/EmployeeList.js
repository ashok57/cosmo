import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from './EmployeeContext';

const EmployeeList = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div className="container">
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No Employees in the system</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.emp_id} className="list-item">
              <span>{employee.name}</span>
              <span className="employee-id">(ID: {employee.emp_id})</span>
              <button onClick={() => deleteEmployee(employee.emp_id)}>Delete</button>
              <Link to={`/employee/${employee.emp_id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add">Add Employee</Link>
    </div>
  );
};

export default EmployeeList;

import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EmployeeContext } from './EmployeeContext';

const EmployeeDetails = () => {
  const { employees } = useContext(EmployeeContext);
  const { id } = useParams();
  const employee = employees.find(emp => emp.emp_id === id);

  return (
    <div className="container">
      {employee ? (
        <div>
          <h1>{employee.name}</h1>
          <p>ID: {employee.emp_id}</p>
          <p>Address: {employee.address.line1}, {employee.address.city}, {employee.address.country}, {employee.address.zip}</p>
          <h2>Contact Methods</h2>
          <ul>
            {employee.contactMethods.map((method, index) => (
              <li key={index}>
                {method.contact_method}: {method.value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Employee not found</p>
      )}
      <Link to="/">Back to Employee List</Link>
    </div>
  );
};

export default EmployeeDetails;

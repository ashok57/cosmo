import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeContext';

const AddEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [name, setName] = useState('');
  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [contactMethods, setContactMethods] = useState([{ contact_method: '', value: '' }]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      emp_id: Date.now().toString(),
      address: { line1, city, country, zip },
      contactMethods,
    };
    addEmployee(newEmployee);
    navigate('/');
  };

  const handleContactChange = (index, event) => {
    const values = [...contactMethods];
    values[index][event.target.name] = event.target.value;
    setContactMethods(values);
  };

  const handleAddContactMethod = () => {
    setContactMethods([...contactMethods, { contact_method: '', value: '' }]);
  };

  return (
    <div className="container">
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" value={line1} onChange={(e) => setLine1(e.target.value)} required />
        </div>
        <div>
          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div>
          <label>Country</label>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div>
          <label>Zip Code</label>
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required />
        </div>
        <div>
          <label>Contact Methods</label>
          {contactMethods.map((contact, index) => (
            <div key={index}>
              <select name="contact_method" value={contact.contact_method} onChange={(e) => handleContactChange(index, e)} required>
                <option value="">Select</option>
                <option value="EMAIL">EMAIL</option>
                <option value="PHONE">PHONE</option>
              </select>
              <input type="text" name="value" value={contact.value} onChange={(e) => handleContactChange(index, e)} required />
            </div>
          ))}
          <button type="button" onClick={handleAddContactMethod}>Add Contact Method</button>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;

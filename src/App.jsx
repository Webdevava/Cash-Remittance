// src/App.js
import  { useState, useEffect } from 'react';
import './App.css';
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load data from local storage on app startup
    const storedData = JSON.parse(localStorage.getItem('cashDistributionData') || '[]');
    setData(storedData);
  }, []);

  const handleFormSubmit = (formData) => {
    // We'll store up to 5 entries in local storage
    const updatedData = [formData, ...data.slice(0, 4)];
    setData(updatedData);
    localStorage.setItem('cashDistributionData', JSON.stringify(updatedData));
  };

  const handleDelete = (index) => {
    // Remove the entry at the given index from the data array
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem('cashDistributionData', JSON.stringify(updatedData));
  };

  return (
    <div className="App">
      <h1>Daily Cash Remittance</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      <TableComponent data={data} onDelete={handleDelete} />
    </div>
  );
}

export default App;

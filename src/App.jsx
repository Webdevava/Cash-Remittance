// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';
import DownloadButton from './DownloadButton'; // Import the DownloadButton component

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load data from local storage on app startup
    const storedData = JSON.parse(localStorage.getItem('cashDistributionData') || '[]');
    setData(storedData);
  }, []);

  const handleFormSubmit = (formData) => {
    // Add the new entry to the data array
    const updatedData = [formData, ...data];
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
      <h1>Daily Cash Distribution Tracker</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      <TableComponent data={data} onDelete={handleDelete} />
      
      {/* Render the DownloadButton component */}
      <div className="download">
      <DownloadButton data={data} />
      </div>
    </div>
  );
}

export default App;

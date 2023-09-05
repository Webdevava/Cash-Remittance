// DownloadButton.js
import React from 'react';

function DownloadButton({ data }) {
  const exportToCSV = () => {
    const csvContent = "Date,Location,Time Out,Time In\n" +
      data.map(entry => `${entry.date},${entry.location},${entry.timeOut},${entry.timeIn}`).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cash_distribution.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();

    // Clean up
    window.URL.revokeObjectURL(url);
  };

  return (
    <button className='down-btn' onClick={exportToCSV}>Download CSV</button>
  );
}

export default DownloadButton;

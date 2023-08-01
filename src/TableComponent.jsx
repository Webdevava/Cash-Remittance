// src/TableComponent.js
import PropTypes from 'prop-types';

const TableComponent = ({ data, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div>
      <h2>Recent Activity</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Time Out</th>
            <th>Time In</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.location === 'Other' ? entry.otherLocation : entry.location}</td>
              <td>{entry.timeOut}</td>
              <td>{entry.timeIn}</td>
              <td>
                <button className='delete' onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      otherLocation: PropTypes.string, // Add this for custom location
      timeOut: PropTypes.string.isRequired,
      timeIn: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TableComponent;

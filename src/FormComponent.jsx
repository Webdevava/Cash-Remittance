// src/FormComponent.js
import { useState } from "react";
import PropTypes from "prop-types";

const FormComponent = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        date: "",
        location: "Mantha",
        timeOut: "",
        timeIn: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            date: "",
            location: "Mantha",
            timeOut: "",
            timeIn: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="date-input"
                type="date"
                name="date"
                value={formData.date}
                placeholder="Date"
                onChange={handleChange}
                required
            />
            
            {formData.location === "Other" ? (
                <input
                    type="text"
                    name="otherLocation"
                    value={formData.otherLocation}
                    onChange={handleChange}
                    placeholder="Enter custom location"
                    required
                />
            ) : (
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                >
                    <option value="Mantha">Mantha</option>
                    <option value="Ajanta">Ajanta</option>
                    <option value="Shahgad">Shahgad</option>
                    <option value="Other">Other</option>
                </select>
            )}
            <input
                className="timeout-input"
                type="time"
                name="timeOut"
                value={formData.timeOut}
                onChange={handleChange}
                placeholder="time Out"
                required
            />
            <input
                className="timein-input"
                type="time"
                name="timeIn"
                value={formData.timeIn}
                onChange={handleChange}
                placeholder="time In"
                required
            />
            <button type="submit" className="submit">
                Submit
            </button>
        </form>
    );
};

FormComponent.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;

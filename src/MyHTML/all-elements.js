import React, { useState } from 'react';
import "./myStyle.css"
const WebForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted: ' + JSON.stringify(formData));
  };

  const handleClear = () => {
    setFormData({});
  };

  return (
    <form id="webform" onSubmit={handleSubmit} className='form-container'>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          className="input-field"
          value={formData.firstName || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          className="input-field"
          value={formData.lastName || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <div>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            className="radio-button"
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            className="radio-button"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div className="form-group">
        <label>Interests:</label>
        <input
          id="coding"
          type="checkbox"
          name="interests"
          value="coding"
          className="checkbox"
          onChange={handleChange}
        />
        <label htmlFor="coding">Coding</label>
        <input
          id="music"
          type="checkbox"
          name="interests"
          value="music"
          className="checkbox"
          onChange={handleChange}
        />
        <label htmlFor="music">Music</label>
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1">Address Line 1:</label>
        <input
          id="addressLine1"
          type="text"
          name="addressLine1"
          className="input-field"
          value={formData.addressLine1 || ''}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <select
          id="city"
          name="city"
          className="dropdown"
          value={formData.city || ''}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          className="textarea"
          value={formData.notes || ''}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <button type="button" id="clearButton" className="clear-btn" onClick={handleClear}>
          Clear
        </button>
        <button type="submit" id="submitButton" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default WebForm;

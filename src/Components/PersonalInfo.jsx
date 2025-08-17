import React from "react";

const PersonalInfo = ({ userdata, handleInputChange, error }) => {
  return (
    <div>
      <h2>Step1: Personal Information</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleInputChange}
            value={userdata.name}
          />
          {error.name && <span className="error">{error.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleInputChange}
            value={userdata.email}
          />
          {error.email && <span className="error">{error.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={handleInputChange}
            value={userdata.phone}
          />
          {error.phone && <span className="error">{error.phone}</span>}
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;

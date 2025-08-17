import React from "react";

const AccInfo = ({ userdata, setUserdata, handleInputChange, error }) => {
  return (
    <div>
      <h2>Step 2: Account Information</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={handleInputChange}
            value={userdata.username}
          />
          {error.username && <span className="error">{error.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleInputChange}
            value={userdata.password}
          />
          {error.password && <span className="error">{error.password}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            onChange={handleInputChange}
            value={userdata.confirmPassword}
          />
          {error.confirmPassword && (
            <span className="error">{error.confirmPassword}</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default AccInfo;

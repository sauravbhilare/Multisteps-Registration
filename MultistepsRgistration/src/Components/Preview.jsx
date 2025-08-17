import React from "react";

const Preview = ({ userdata }) => {
  return (
    <div>
      <h2>Step 3: Preview & Submit</h2>
      <p className="helper-text">Review your information before submitting.</p>

      <div className="preview-section">
        <h3>Personal Information</h3>
        <div className="preview-item">
          <span className="preview-label">Name:</span>
          <span className="preview-value">{userdata.name}</span>
        </div>
        <div className="preview-item">
          <span className="preview-label">Email:</span>
          <span className="preview-value">{userdata.email}</span>
        </div>
        <div className="preview-item">
          <span className="preview-label">Phone:</span>
          <span className="preview-value">{userdata.phone}</span>
        </div>
      </div>

      <div className="preview-section">
        <h3>Account Information</h3>
        <div className="preview-item">
          <span className="preview-label">Username:</span>
          <span className="preview-value">{userdata.username}</span>
        </div>
        <div className="preview-item">
          <span className="preview-label">Password:</span>
          <span className="preview-value">
            {"•".repeat(userdata.password.length)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preview;

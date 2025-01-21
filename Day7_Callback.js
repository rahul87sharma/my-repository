import React, { useState } from "react";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);

  const employeeData = {
    name: "Ram Sharma",
    address: "123 Main Street, ABC",
    uid: "EMP12345",
    position: "Software Engineer",
    department: "IT",
  };

  const handleShowDetails = () => {
    setEmployee(employeeData);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Employee Details</h1>
      <button
        onClick={handleShowDetails}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Employee Details
      </button>

      {employee && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            maxWidth: "400px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Details:</h2>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Address:</strong> {employee.address}</p>
          <p><strong>UID:</strong> {employee.uid}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Department:</strong> {employee.department}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;

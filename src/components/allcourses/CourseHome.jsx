import React, { useState } from "react";
import "./Courses.css";

const AadhaarVerification = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [aadhaarFile, setAadhaarFile] = useState(null);

  const handleFileChange = (e) => {
    setAadhaarFile(e.target.files[0]);
  };

  const handleAadhaarChange = (e) => {
    setAadhaarNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for Aadhaar number (12 digits)
    const aadhaarPattern = /^[0-9]{12}$/;
    if (!aadhaarPattern.test(aadhaarNumber)) {
      alert("Please enter a valid 12-digit Aadhaar number.");
      return;
    }

    if (!aadhaarFile) {
      alert("Please upload your Aadhaar card.");
      return;
    }

    // Logic to submit Aadhaar number and file to the server
    console.log("Aadhaar Number:", aadhaarNumber);
    console.log("Aadhaar File Submitted:", aadhaarFile);
    alert("UIDAI API Aadhaar verification in progress !!");
  };

  return (
    <>
      <section className="aadhaar-verification padding">
        <div className="container">
          <form onSubmit={handleSubmit} className="aadhaar-form">
            <h2>Verify Your Aadhaar</h2>
            <p>Enter your Aadhaar number and upload your Aadhaar card document for verification.</p>

            <div className="aadhaar-field">
              <label htmlFor="aadhaar-number">Aadhaar Number (12 digits):</label>
              <input
                type="text"
                id="aadhaar-number"
                value={aadhaarNumber}
                onChange={handleAadhaarChange}
                maxLength="12"
                placeholder="Enter your Aadhaar number"
              />
            </div>

            <div className="aadhaar-field">
              <label htmlFor="aadhaar-file">Upload Aadhaar Card (PDF, JPG, PNG):</label>
              <input
                type="file"
                id="aadhaar-file"
                accept=".pdf, .jpg, .png"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Verify Aadhaar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AadhaarVerification;

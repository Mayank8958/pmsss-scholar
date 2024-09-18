import React, { useState } from "react";
import "./blog.css";

const DocumentSubmission = () => {
  const [documents, setDocuments] = useState({
    idProof: null,
    educationalCert: null,
    bankDetails: null,
  });

  const handleFileChange = (e, type) => {
    setDocuments({
      ...documents,
      [type]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!documents.idProof || !documents.educationalCert || !documents.bankDetails) {
      alert("Please upload all the required documents.");
      return;
    }

    console.log("Documents submitted:", documents);
    alert("AI Detection work in progress !!");
  };

  return (
    <>
      <section className="document-submission padding">
        <div className="container">
          <form onSubmit={handleSubmit} className="submission-form">
            <h2>Upload Your Documents</h2>
            <p>Ensure to upload all the required documents for verification.</p>

            <div className="document-field">
              <label htmlFor="idProof">Upload ID Proof (PDF, JPG, PNG):</label>
              <input
                type="file"
                id="idProof"
                accept=".pdf, .jpg, .png"
                onChange={(e) => handleFileChange(e, "idProof")}
              />
            </div>

            <div className="document-field">
              <label htmlFor="educationalCert">Upload Educational Certificates (PDF, JPG, PNG):</label>
              <input
                type="file"
                id="educationalCert"
                accept=".pdf, .jpg, .png"
                onChange={(e) => handleFileChange(e, "educationalCert")}
              />
            </div>

            <div className="document-field">
              <label htmlFor="bankDetails">Upload Bank Details (PDF, JPG, PNG):</label>
              <input
                type="file"
                id="bankDetails"
                accept=".pdf, .jpg, .png"
                onChange={(e) => handleFileChange(e, "bankDetails")}
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit All Documents
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default DocumentSubmission;

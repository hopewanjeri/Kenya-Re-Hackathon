import React, { useState } from 'react';

function App() {
  const [files, setFiles] = useState(null);
  const [quotationReady, setQuotationReady] = useState(false);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setQuotationReady(false); 
  };

  const handleUploadFiles = () => {
    if (files) {
      alert('Files uploaded successfully!');
    } else {
      alert('Please upload the proposal documents.');
    }
  };

  const handleGenerateQuotation = () => {
    if (files) {
      setQuotationReady(true);
      alert('Quotation generated successfully!');
    } else {
      alert('Please upload proposal documents first.');
    }
  };

  return (
    <div className="App" style={styles.appContainer}>
      <header style={styles.header}>
        <img 
          src="/logo.jpg" 
          alt="Company Logo" 
          style={styles.logo}
        />
        <h2 style={styles.title}>Professional Indemnity Quotation Generator</h2>
      </header>
      
      <form style={styles.form}>
        <label style={styles.label}>
          Upload Proposal Documents:
          <input 
            type="file" 
            multiple 
            onChange={handleFileChange} 
            style={styles.fileInput} 
            required 
          />
        </label>
        
        <div style={styles.buttonGroup}>
          <button 
            type="button" 
            style={styles.button} 
            onClick={handleUploadFiles}
          >
            Upload Proposals
          </button>
          
          <button 
            type="button" 
            style={styles.button} 
            onClick={handleGenerateQuotation}
            disabled={!files}
          >
            Generate Quotation
          </button>
        </div>
      </form>

      {files && (
        <div style={styles.fileList}>
          <h3>Files Uploaded:</h3>
          <ul>
            {Array.from(files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {quotationReady && (
        <div style={styles.quotationMessage}>
          <h3>Quotation is ready!</h3>
          <a href="/path/to/generated-quotation.pdf" download>
            Download Quotation PDF
          </a>
        </div>
      )}
    </div>
  );
}

// CSS in JS styles for a clean UI
const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  logo: {
    width: '100px',     
    height: 'auto',     
    marginRight: '15px',
    objectFit: 'contain'
  },
  title: {
    color: '#333',
  },
  form: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '0 auto',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#333',
    fontWeight: 'bold',
  },
  fileInput: {
    display: 'block',
    margin: '10px 0 20px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '48%', 
  },
  fileList: {
    marginTop: '20px',
  },
  quotationMessage: {
    marginTop: '30px',
    backgroundColor: '#e0ffe0',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default App;

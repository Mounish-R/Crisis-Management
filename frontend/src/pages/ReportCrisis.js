import React, { useState } from 'react';
import Header from '../components/Header';
import './ReportCrisis.css';

function ReportCrisis() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    severity: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/crises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setMessage('Crisis reported successfully!');
        setFormData({ title: '', location: '', severity: '', description: '' });
      } else {
        setMessage('Failed to report the crisis.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error reporting the crisis.');
    }
  };

  return (
    <div>
      <Header />
      <div className="report-container">
        <h2>Report a Crisis</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          <input type="text" name="severity" placeholder="Severity" value={formData.severity} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
    
  );
}

export default ReportCrisis;

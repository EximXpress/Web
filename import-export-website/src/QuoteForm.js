import React, { useState } from 'react';
import axios from 'axios';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', formData);
      alert('Request sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Failed to send. Try again.');
    }
  };

  return (
    <section style={{ padding: '4rem', textAlign: 'center' }}>
      <h2>Request a Quote</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto', marginTop: '2rem' }}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} /><br/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={inputStyle} /><br/>
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={inputStyle} /><br/>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required style={{...inputStyle, height: '120px'}} /><br/>
        <button type="submit" style={buttonStyle}>Send Request</button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#00b894',
  border: 'none',
  color: 'white',
  borderRadius: '5px',
  fontSize: '1rem'
};

export default QuoteForm;

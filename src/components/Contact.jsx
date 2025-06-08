// src/components/Contact.jsx
import React, { useState } from 'react'; // Import useState for form state

function Contact() {
  // State for individual form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // IMPORTANT: Prevents the browser's default form submission (which would reload the page)

    // In a real application, you would send this data to a backend server (e.g., using fetch or axios)
    console.log('Form Submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // For this example, we'll just show an alert and clear the form
    alert('Message sent (check console)!');

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>Have a question or feedback? Send me a message!</p>
      <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form's onSubmit event */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name} // Controlled component: input value is tied to state
            onChange={(e) => setName(e.target.value)} // Update state when input changes
            required // HTML5 validation
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
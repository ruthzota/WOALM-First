import React, { useState } from "react";
import './ContactForm.css'


const ContactForm = () => {
  const [ setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} className="form-contact" >
    <p>Contact Pan Africa Chemicals Ltd.</p>
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <di className="email">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </di>
      <div className="message">
        <label htmlFor="message">Message:</label>
        <input type="text" id="message" required />
      </div>
      <button type="submit">Submit</button>

    </form>
  );
};

export default ContactForm;
import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_ktdokbj';
    const templateId = 'template_b1reswo';
    const publicKey = 'LaIN5rz9G5S094rcH';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Bryce_Hadl',
        message: message,
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='emailForm' netlify>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
       type="text"
       placeholder="Enter Message Here"
          cols="20"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  )
}

export default Contact;

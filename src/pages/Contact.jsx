import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    const isEmailValid = emailRegex.test(email);

    if (!name) {
      setSubmitMessage("Please enter your name.");
      return;
    }

    if (!email) {
      setSubmitMessage("Please enter your email.");
      return;
    }

    if (!isEmailValid) {
      setSubmitMessage("Please enter a valid email address.");
      return;
    }

    if (!message) {
      setSubmitMessage("Please enter a message.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");

    setSubmitMessage(
      "Form functionality is not implemented at this time. To reach me, please email me at brycehadl11@gmail.com"
    );
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center">Contact</h1>
      <form className="form" onSubmit={handleFormSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            value={message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {submitMessage && (
          <div className="alert alert-primary mt-3" role="alert">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;

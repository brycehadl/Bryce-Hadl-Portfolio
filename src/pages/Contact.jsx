// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ktdokbj",
        "template_b1reswo",
        form.current,
        "LaIN5rz9G5S094rcH"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};




// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from 'axios';

// npm i @emailjs/browser

// const Contact = () => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Your EmailJS service ID, template ID, and Public Key
//     const serviceId = 'service_ktdokbj';
//     const templateId = 'template_b1reswo';
//     const publicKey = 'LaIN5rz9G5S094rcH';

//     // Create an object with EmailJS service ID, template ID, Public Key, and Template params
//     const data = {
//       service_id: serviceId,
//       template_id: templateId,
//       user_id: publicKey,
//       template_params: {
//         from_name: name,
//         from_email: email,
//         to_name: 'Bryce_Hadl',
//         message: message,
//       }
//     };

//     // Send the email using EmailJS
//     try {
//       const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
//       console.log(res.data);
//       setName('');
//       setEmail('');
//       setMessage('');
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <StyledContactForm>
//       <form onSubmit={handleSubmit} className='emailForm'>
//       <label>Name</label>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="name@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Message</label>
//         <textarea
//        type="text"
//        placeholder="Enter Message Here"
//           // cols="20"
//           // rows="10"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <input type="submit" value="Send" />
//       </form>
//     </StyledContactForm>
//   );
// };

export default Contact;

const StyledContactForm = styled.div`
  width: 400px;

  form {
    margin-top: 100px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      display: flex;
      align-items: center;
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      display: flex;
      align-items: center;
      top: 1px;
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
        align-items: center;
      }
    }

    label {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
    }

    input[type="submit"] {
      display: flex;
      // text-align: center;
      width: 100px;
      align-items: center;
      // margin-left: auto;
      // margin-right: auto;
      cursor: pointer;
      background: #04AA6D;
      color: white;
      border: none;
    }
  }
`;

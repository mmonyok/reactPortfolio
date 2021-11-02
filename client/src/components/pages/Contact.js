import React, { useState } from 'react';
import "../../assets/styles/Contact.css";
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  // State variables for the fields in the form or error messages with initial value set to empty.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const [status, setStatus] = useState("Submit");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Checks if the name field has been filled.
  function checkName(e) {
    if (e.target.value === '') {
      setNameError("*Name is required.");
    } else {
      setNameError('');
    }
  };
  // Checks if the email field has been filled with correct email format.
  function checkEmail(e) {
    if (e.target.value === '') {
      setEmailError("*Email is required.");
      return;
    } else if (!validateEmail(e.target.value)) {
      setEmailError('Incorrect email format.');
    } else {
      setEmailError('');
    }
  };
  // Checks if the message field has been filled.
  function checkMessage(e) {
    if (e.target.value === '') {
      setMessageError("*Message is required.");
    } else {
      setMessageError('');
    }
  };

  const handleFormSubmit = async (e) => {
    // Prevent default behavior of form submits.
    e.preventDefault();

    try {
      // Error messages for if any fields are left empty or email is entered wrong.
      if (!name || !email || !message) {
        setSubmitError("*All fields must be filled.")
        return;
      }
      if (!validateEmail(email)) {
        setSubmitError("Email format incorrect.")
        return;
      }
      setStatus("Sending...");

      let details = {
        name: name,
        email: email,
        message: message,
      };

      const response = await fetch("https://melodymonyok.herokuapp.com/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
      });

      const result = await response.json();
      setStatus("Email Sent.");
      alert(result.status);

      setName('');
      setEmail('');
      setMessage('');
      setNameError('');
      setEmailError('');
      setMessageError('');
      setSubmitError('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="my-2">
      <h1 className="ms-4 mb-4 font-heavy">Contact Melody</h1>
      <form className="form ms-5 w-25 border border-dark rounded-3 p-3 font">
        <input className="form-control"
          id="nameInput"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          onBlur={checkName}
          placeholder="*Your Name"
        />
        {nameError && (
          <div>
            <p className="ms-3 errorMsg">{nameError}</p>
          </div>
        )}
        <input className="form-control mt-3"
          id="emailInput"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          onBlur={checkEmail}
          placeholder="*Your Email"
        />
        {emailError && (
          <div>
            <p className="ms-3 errorMsg">{emailError}</p>
          </div>
        )}
        <input className="form-control mt-3"
          rows="4"
          id="messageInput"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          onBlur={checkMessage}
          placeholder="*Your Message"
        />
        {messageError && (
          <div>
            <p className="ms-3 mb-0 errorMsg">{messageError}</p>
          </div>
        )}
        <button className="btn btn-dark mt-3"
          type="submit" onClick={handleFormSubmit}>
          Submit</button>
        {submitError && (
          <div>
            <p className="ms-3 mt-2 mb-0 errorMsg">{submitError}</p>
          </div>
        )}
      </form>
    </div>
  );
};
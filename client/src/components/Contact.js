import React, { useState } from 'react';
import "../assets/styles/Contact.css";
import { validateEmail } from '../utils/helpers';
import { Modal } from 'react-bootstrap';

export default function Contact(props) {
  // State variables for the fields in the form or error messages with initial value set to empty.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

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
      setSubmitStatus("Sending Email...");

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
      setSubmitStatus(result.status);
      // This timer delays the closing of the modal, so the user can see that their email was sent successfully.
      function timeFunction() {
        setTimeout(function () {
          setName('');
          setEmail('');
          setMessage('');
          setNameError('');
          setEmailError('');
          setMessageError('');
          setSubmitError('');
          setSubmitStatus('');
          props.onHide()
        }, 1000);
      }
      // We only call the timer function if the email was sent successfully, so that the user sees the message there was an error, and the modal isn't closed on them.
      if (result.status === "Email sent successfully.") {
        timeFunction()
        return;
      } else {
        setSubmitStatus('');
        setSubmitError(result.status);
      };
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contact-form"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="font-heavy" id="contact-form">
          Contact Options
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="font text-center">
          <i className="far fa-envelope me-2"></i>
          <a href="mailto:monyokwebdev@gmail.com" className="contactLink" id="email">
            monyokwebdev@gmail.com
          </a>
        </h4>
        <h4 className="font text-center">
          <i className="fas fa-mobile-alt me-2"></i>
          <a href="tel:6124921528" className="contactLink">
            612-792-1528
          </a>
        </h4>
        <form className="form font text-center">
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
          <button className="btn btn-outline-dark mt-3 font-heavy"
            type="submit"
            onClick={handleFormSubmit}>
            Submit</button>
          {submitError && (
            <div>
              <p className="ms-3 mt-2 mb-0 errorMsg">{submitError}</p>
            </div>
          )}
          {submitStatus && (
            <div>
              <p className={`ms-3 mt-2 mb-0 ${submitStatus === "Sending Email..." ? "waitingStatus" : "sentStatus"} status`}>{submitStatus}</p>
            </div>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
};
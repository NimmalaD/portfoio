import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import CustomAlert from '../Alert/CustomAlert';

const ContactMe = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    note: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Thank you ${details.firstName}. Will reach out soon!`;
    setShowAlert(true);
    setAlertMessage(message);
    setDetails({
      firstName: '',
      lastName: '',
      email: '',
      note: ''
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='contact-me-container'>
      <div>
        <CustomAlert show={showAlert} onClose={() => setShowAlert(false)} message={alertMessage} variant={'info'} />
      </div>
      <div className='lets-connect'>
        <h2 className='h2-lets-connect'>Let's Connect!!</h2>
      </div>
      
        <form className={showForm ? 'fade-in' : ''} onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <input type='text' name='firstName' value={details.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label>Last Name</label>
            <input type='text' name='lastName' value={details.lastName || " "} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' value={details.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Leave a Note</label>
            <textarea name='note' value={details.note || " "} onChange={handleChange} required rows="4" />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
   
  );
}

export default ContactMe;

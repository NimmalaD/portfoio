import React, { useEffect, useState } from 'react';

import './ContactMe.css';
import CustomAlert from '../Alert/CustomAlert';

const ContactMe = () => {
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [details, setDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
      note: ''
    })

    const handleChange = (event) =>{
      const {name, value} = event.target;
      setDetails(prevDetails=>({...prevDetails, [name]: value }))
      console.log(details)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', details);
      const message = `Thank you ${details.firstName}. Will reach out soon!`
      setShowAlert(true)
      setAlertMessage(message)
      setDetails({
        firstName: '',
        lastName: '',
        email: '',
        note: ''
      })
      
    }
    useEffect(()=>{
      
    },[])

  return (
    <div className='contact-me-container'>
      <div>
        <CustomAlert show={showAlert} onClose={()=> setShowAlert(false)} message={alertMessage} variant={'info'}>
        </CustomAlert>
      </div>
        <div className='lets-connect'>
            <h2 className='h2-lets-connect'>Let's Connect!!</h2>
        </div>
      <form onSubmit={handleSubmit}>
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
          <input type='text' name='note' value={details.note || " "} onChange={handleChange} required rows="4" />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;

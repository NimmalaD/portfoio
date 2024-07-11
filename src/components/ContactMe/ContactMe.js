import React, { useEffect, useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
    const [details, setDetails] = useState({
      firstName: '',
      lastName: '',
      email: ''
    })

    const handleChange = (event) =>{
      const {name, value} = event.target;
      setDetails(prevDetails=>({...prevDetails, [name]: value }))
      console.log(details)
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', details);
      setDetails({
        firstName: '',
        lastName: '',
        email: ''
      })
    }
    useEffect(()=>{
      
    },[])

  return (
    <div className='contact-me-container'>
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
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;

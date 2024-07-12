import React, { useEffect, useState } from 'react';
import './CustomAlert.css';

const CustomAlert = ({ show, onClose, message, variant }) => {
  useEffect(()=>{
    if(show){
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  },[[show, onClose]])

  return (
    <div className={`custom-alert ${variant} ${show ? 'fade-in' : 'fade-out'}`}>
      <div className="custom-alert-header">
        <strong>Notification</strong>
      </div>
      <div className="custom-alert-body">
        {message}
      </div>
    </div>
  );
}

export default CustomAlert;

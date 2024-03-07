import React, { useState, useEffect } from 'react';
import './Success.scss'; // Import CSS file for styling

const Notification = ({ message, show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Hide the notification after 2 seconds

    return () => clearTimeout(timeout); // Cleanup timer on unmount
  }, [show]);

  return (
    <div className={`notification ${isVisible ? 'show' : ''}`}>
      <div className="notification-content" style={{ backgroundColor: 'green' }}>
        {message}
      </div>
    </div>
  );
};

export default Notification;

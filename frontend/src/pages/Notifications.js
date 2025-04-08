import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/notifications');
        const data = await res.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <Header />
      <div className="notifications-container">
        <h2>Disaster Notifications</h2>
        <ul>
          {notifications.length === 0 ? (
            <li>No notifications available.</li>
          ) : (
            notifications.map((note, index) => (
              <li key={index} className="notification-item">
                <h4>{note.title}</h4>
                <p>{note.message}</p>
                <span>{new Date(note.date).toLocaleString()}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
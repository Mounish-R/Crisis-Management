// Home.js
import React from 'react';
import Header from '../components/Header';
import './Home.css';

function Home() {
  return (
    <div>
      <Header />
      <div className="home-banner">
        <img src="/images/crisis-banner.jpg" alt="Crisis Aid Banner" />
      </div>
      <div className="home-content">
        <h2>Welcome to CrisisAid</h2>
        <p>
          CrisisAid is a platform to report, manage, and respond to natural and human-made disasters. 
          Stay informed with real-time updates, volunteer to help those in need, and explore critical resources across the country.
        </p>
        <div className="home-features">
          <div className="feature-box">
            <img src="/images/alert.png" alt="Alert Icon" />
            <h4>Real-time Alerts</h4>
            <p>Receive live notifications on nearby disasters.</p>
          </div>
          <div className="feature-box">
            <img src="/images/volunteer.png" alt="Volunteer Icon" />
            <h4>Volunteer & Help</h4>
            <p>Register as a volunteer and join relief efforts.</p>
          </div>
          <div className="feature-box">
            <img src="/images/map.png" alt="Map Icon" />
            <h4>Crisis Map</h4>
            <p>Track disaster zones across India on a dynamic map.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
    
# 🌐 Crisis Management System

A comprehensive web-based platform designed to improve the detection, management, and response to natural disasters and emergencies. This system integrates real-time data monitoring, automated alerts, and resource allocation to assist authorities and the public in handling crises effectively.

---

## 🚀 Key Features

- 🔍 **Real-time Monitoring**
  - Continuously tracks live data to identify early signs of crises (e.g., floods, earthquakes).

- 📢 **Automated Alert System**
  - Instantly notifies relevant authorities and users when a potential threat is detected.

- 📦 **Smart Resource Allocation**
  - Optimizes the distribution of aid and emergency resources based on real-time data.

- 🧭 **Volunteer Coordination**
  - Allows volunteers to register and participate in crisis response efforts.

- 🧠 **Data Analysis & Visualization**
  - Offers insightful analytics and visual dashboards for decision-makers.

- 🌐 **Admin Dashboard**
  - Secure backend panel for managing volunteer data and monitoring crisis reports.

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Others |
|----------|---------|----------|--------|
| React.js | Node.js | MongoDB  | Express.js, OpenWeatherMap API, Map APIs |

---

## 📂 Project Structure

Crisis-Management/
├── backend/
│   ├── models/
│   │   ├── Crisis.js
│   │   └── Volunteer.js
│   ├── node_modules/
│   ├── routes/
│   │   ├── crises.js
│   │   └── volunteers.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.css
│   │   │   └── Header.js
│   │   ├── pages/
│   │   │   ├── AdminDashboard.css
│   │   │   ├── AdminDashboard.js
│   │   │   ├── CrisisMap.css
│   │   │   ├── CrisisMap.js
│   │   │   ├── Dashboard.css
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.css
│   │   │   ├── Home.js
│   │   │   ├── ReportCrisis.css
│   │   │   ├── ReportCrisis.js
│   │   │   ├── Resources.css
│   │   │   ├── Resources.js
│   │   │   ├── Volunteer.css
│   │   │   ├── Volunteer.js
│   │   │   ├── VolunteerFeedback.css
│   │   │   ├── VolunteerFeedback.js
│   │   │   ├── Weather.css
│   │   │   └── Weather.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
│
└── README.md



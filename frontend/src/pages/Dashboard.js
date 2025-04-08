import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Dashboard() {
  const [approvedVolunteers, setApprovedVolunteers] = useState([]);

  useEffect(() => {
    const fetchApprovedVolunteers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/volunteers');
        const data = await res.json();

        // Filter only approved requests
        const approved = data.filter(vol => vol.status === 'Approved');
        setApprovedVolunteers(approved);
      } catch (err) {
        console.error('Error fetching approved volunteers:', err);
      }
    };

    fetchApprovedVolunteers();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-4">
        <h2>User Dashboard</h2>
        <p>Here are the approved volunteer requests:</p>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Crisis</th>
            </tr>
          </thead>
          <tbody>
            {approvedVolunteers.map((vol) => (
              <tr key={vol._id}>
                <td>{vol.name}</td>
                <td>{vol.email}</td>
                <td>{vol.phone}</td>
                <td>{vol.address}</td>
                <td>{vol.crisisName || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {approvedVolunteers.length === 0 && (
          <p>No approved volunteers yet.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;

// AdminContacts.jsx
import React, { useEffect, useState } from 'react';
import "./AdminContacts.css";


const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading]  = useState(true);
  const [error, setError]      = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/contacts', {
      headers: {
        
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading submissions…</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Admin: Contact Form Submissions</h2>
      {contacts.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Service</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c._id}>
                <td>{new Date(c.createdAt).toLocaleString()}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.contact}</td>
                <td>{c.company || '—'}</td>
                <td>{c.service || '—'}</td>
                <td>{c.comment || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContacts;

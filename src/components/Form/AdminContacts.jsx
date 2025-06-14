import React, { useEffect, useState } from 'react';
import "./AdminContacts.css";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://abhiyantrik.onrender.com/api/contacts', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
          }
        });
        
        if (!response.ok) throw new Error('Failed to fetch submissions');
        
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedAndFilteredContacts = React.useMemo(() => {
    let filteredContacts = contacts;
    
    if (searchTerm) {
      filteredContacts = contacts.filter(contact => 
        Object.values(contact).some(
          value => value && 
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    return [...filteredContacts].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [contacts, searchTerm, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedAndFilteredContacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedAndFilteredContacts.length / itemsPerPage);

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="admin-contacts-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-contacts-container">
        <div className="error-message">
          <p>Error loading submissions: {error}</p>
          <button onClick={() => window.location.reload()} className="refresh-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-contacts-container">
      <h2>Contact Form Submissions</h2>
      
      <div className="controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search submissions..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div className="submission-count">
          Showing {currentItems.length} of {sortedAndFilteredContacts.length} submissions
        </div>
      </div>
      
      {sortedAndFilteredContacts.length === 0 ? (
        <div className="no-results">
          {contacts.length === 0 ? 
            "No submissions yet." : 
            "No matching submissions found."}
        </div>
      ) : (
        <>
          <div className="table-container">
            <table className="submissions-table">
              <thead>
                <tr>
                  <th onClick={() => requestSort('createdAt')}>
                    Date {getSortArrow('createdAt')}
                  </th>
                  <th onClick={() => requestSort('name')}>
                    Name {getSortArrow('name')}
                  </th>
                  <th onClick={() => requestSort('email')}>
                    Email {getSortArrow('email')}
                  </th>
                  <th onClick={() => requestSort('contact')}>
                    Phone {getSortArrow('contact')}
                  </th>
                  <th onClick={() => requestSort('service')}>
                    Service {getSortArrow('service')}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(contact => (
                  <tr key={contact._id} onClick={() => setSelectedContact(contact)}>
                    <td>{formatDate(contact.createdAt)}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.contact || '—'}</td>
                    <td>{contact.service || '—'}</td>
                    <td>
                      <button 
                        className="view-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedContact(contact);
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
      
      {selectedContact && (
        <div className="modal-overlay" onClick={() => setSelectedContact(null)}>
          <div className="contact-details-modal" onClick={e => e.stopPropagation()}>
            <button 
              className="close-modal"
              onClick={() => setSelectedContact(null)}
            >
              ×
            </button>
            
            <h3>Submission Details</h3>
            
            <div className="detail-row">
              <span className="detail-label">Date:</span>
              <span className="detail-value">{formatDate(selectedContact.createdAt)}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Name:</span>
              <span className="detail-value">{selectedContact.name}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">
                <a href={`mailto:${selectedContact.email}`}>{selectedContact.email}</a>
              </span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">
                {selectedContact.contact || 'Not provided'}
              </span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Company:</span>
              <span className="detail-value">
                {selectedContact.company || 'Not provided'}
              </span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">Service:</span>
              <span className="detail-value">
                {selectedContact.service || 'Not specified'}
              </span>
            </div>
            
            <div className="detail-row full-width">
              <span className="detail-label">Message:</span>
              <p className="detail-value comment">
                {selectedContact.comment || 'No message provided'}
              </p>
            </div>
            
            <div className="modal-actions">
              <button className="reply-btn">
                Reply via Email
              </button>
              <button 
                className="close-btn"
                onClick={() => setSelectedContact(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
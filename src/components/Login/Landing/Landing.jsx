import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Landing.css';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const Landing = ({ contacts, loading }) => {
  if (loading) {
    return (
      <div style={{ display: 'block', marginLeft: '50%', marginTop: '25%' }}>
        <Spinner style={{ margin: 'auto', width: '4rem', height: '4rem' }} />
      </div>
    );
  }
  return (
    <div className="landingg row">
      {contacts.map((contact) => (
        <div className="col-md-4">
          <div className="status-card">
            <div className="data">
              <span className="key">NAME:</span>{' '}
              <span className="value">{contact.name}</span>
            </div>
            <div className="data">
              <span className="key">CONTACT:</span>{' '}
              <span className="value">{contact.contact_number}</span>
            </div>
            <div className="data">
              <span className="key">EMAIL:</span>{' '}
              <span className="value">{contact.email}</span>
            </div>
            <div className="data">
              <span className="key">SERVICE:</span>{' '}
              <span className="value">{contact.service_type}</span>
            </div>
            <div className="data">
              <span className="key">MESSAGE:</span>{' '}
              <span className="message">{contact.comment}</span>
            </div>
            <div className="status">
              <button className="btn btn-warning">
                Pending <i className="fas fa-clipboard"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Landing.prototype = {
  contacts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
  loading: state.contact.loading,
});

export default connect(mapStateToProps)(Landing);

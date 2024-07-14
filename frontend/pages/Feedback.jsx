import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isValidEmail = (email) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
};

const isValidPhoneNumber = (phoneNumber) => {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
};

const Feedback = ({ backgroundImageUrl }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveFeedback = () => {
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!isValidPhoneNumber(phonenumber)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    if (rating === 0) {
      toast.error('Please provide a rating.');
      return;
    }

    const data = {
      firstname,
      lastname,
      email,
      phonenumber,
      subject,
      message,
      rating,
    };

    setLoading(true);

    Axios.post('http://localhost:5555/feedback', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        toast.error('An error happened. Please check the console.');
        console.log(error);
      });
  };

  const styles = {
    container: {
      padding: '20px',
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      border: '2px solid #3498db',
      borderRadius: '10px',
      width: '600px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '15px',
    },
    formLabel: {
      display: 'block',
      fontSize: '16px',
      marginBottom: '5px',
      color: '#333',
    },
    formInput: {
      width: 'calc(100% - 20px)',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    formTextarea: {
      width: 'calc(100% - 20px)',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      height: '100px',
      resize: 'none',
    },
    ratingContainer: {
      display: 'flex',
    },
    ratingStar: {
      fontSize: '24px',
      cursor: 'pointer',
      color: '#ccc',
    },
    rated: {
      color: '#f39c12',
    },
    formActions: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    formButton: {
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      border: 'none',
    },
    saveButton: {
      backgroundColor: '#3498db',
      color: 'white',
    },
    cancelButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Create Feedback</h1>
        

        <div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>First Name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
              style={styles.formInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Last Name</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
              style={styles.formInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.formInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Phone Number</label>
            <input
              type="tel"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value.replace(/[^0-9]/g, ''))}
              style={styles.formInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={styles.formInput}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.formTextarea}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Rating</label>
            <div style={styles.ratingContainer}>
              {[...Array(5)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setRating(i + 1)}
                  style={{ ...styles.ratingStar, ...(rating > i && styles.rated) }}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div style={styles.formActions}>
            <button
              onClick={handleSaveFeedback}
              style={{ ...styles.formButton, ...styles.saveButton }}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Feedback'}
            </button>
            <Link to="/" style={{ ...styles.formButton, ...styles.cancelButton }}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Feedback;

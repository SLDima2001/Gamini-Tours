import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faCar,faEnvelope,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebook, FaInstagram,FaTiktok } from 'react-icons/fa';

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
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

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
    app: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#e0f7fa',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    headerStyle : {
      justifyContent: '',
      padding: '0px',
      backgroundColor:'#D3D3D3',
      color: 'black',
      position: '',
      width: '100%',
      top: '',
      left: '0',
      zIndex: '1000',
    },
    header1style : {
      justifyContent: 'center',
      padding: '0px',
      backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
      color: '',
      position: '',
      width: '100%',
      top: '',
      left: '0',
      transition: 'background-color 0.3s ease',
      zIndex: '',
      marginTop: '0px',
    },
    logoImgStyle: {
      height: '100px',
      marginTop: '0px',
    },
    h1: {
      fontSize: '4em',
      margin: '0',
      color: '#333',
      padding: '10px',
      borderRadius: '8px',
      display: 'inline-block',
      marginLeft: '-1600px',
    },
    para: {
      color: 'black',
      marginLeft: '-1600px',
    },
    loginButton: {
      marginLeft: '2000px',
      padding: '10px',
      marginTop: '-100px',
    },
    navbarStyle : {
      backgroundColor: '',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: '',
      top: '0',
      left: '0',
      width: '100%',
      height: '50px',
      padding: '10px 20px',
      transition: 'transform 0.3s ease',
      transform: isNavbarVisible ? 'translateY(0)' : 'translateY()',
      zIndex: '1000',
    },
    navbarStyle2 : {
      backgroundColor: 'white',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: '',
      top: '0',
      left: '0',
      width: '100%',
      height: '100px',
      padding: '10px 0px 0px  ',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s ease',
      transform: isNavbarVisible ? 'translateY(0)' : 'translateY()',
      zIndex: '1000',
    },
    
    linkStyle : {
      color: 'black',
      textDecoration: 'none',
      margin: '0 15px',
    },
    
    navLinksStyle : {
      display: 'flex',
      alignItems: 'center',
    },
    buttonContainerStyle : {
      display: 'flex',
      alignItems: 'center',
      gap: '10px', // Adds space between buttons
    },
    ul: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    li: {
      marginBottom: '20px',
    },
    a: {
      display: 'block',
      color: 'white',
      padding: '14px 16px',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease',
    },
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
      justifyContent: 'center',
    },
    ratingStar: {
    
      fontSize: '70px',
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
    footer: {
      padding: '20px',
      backgroundColor: '#0000FF',
      color: 'white',
      textAlign: 'left',
      marginTop: 'auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      position: 'relative',
    },
    footerSection: {
      marginBottom: '20px',
      flex: '1 1 200px',
    },
    footerSectionTitle: {
      borderBottom: '1px solid white',
      paddingBottom: '10px',
      marginBottom: '10px',
    },
    footerList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    footerListItem: {
      marginBottom: '10px',
    },
    socialLink: {
      color: 'white',
      textDecoration: 'none',
    },
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div style={styles.app}>
      <header style={styles.header1style} >
      <div style={styles.navbarStyle}>
      {/* Left Section: Logo */}
      <div>
        <h1 style={{ margin: '0', padding: '0', fontSize: '1em' }}>lahirutours@gmail.com</h1>
      </div>
      
      {/* Center Section: Navigation Links */}
      <div style={styles.navLinksStyle}>
       
      </div>
      
      {/* Right Section: Buttons */}
      <div style={styles.buttonContainerStyle}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" style={{  padding: '10px 20px', cursor: 'pointer' }} >
          <FaTiktok size={24}  />
  </a>

        {/* Add more buttons as needed */}
      </div>
    </div>

            
      </header>
      
      <section style={styles.headerStyle}>
      <div style={styles.navbarStyle2}>
  {/* Left Section: Logo */}
  <div>
  <img src="/Photos/logo.gif" alt="Logo" style={styles.logoImgStyle} />
  </div>
  
  {/* Center Section: Navigation Links */}
  <div style={styles.navLinksStyle}>
    <a href="/" style={styles.linkStyle}>Home</a>
    <a href="/About" style={styles.linkStyle}>About</a>
    <a href="/TourPackages" style={styles.linkStyle}>Tour Packages</a>
    <a href="/ContactUS" style={styles.linkStyle}>Contact</a>
    <a href="/feedback" style={styles.linkStyle}>FAQ</a>
  </div>
  <div style={{ marginRight: '10px',marginTop:'19px' }}> {/* Right-aligned content */}
  <Link to="/BookingForm" style={styles.bookbuttonstyle}>
          Book Now !
            </Link> 
  </div>
  
  
</div>
        
        
        
      </section>
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
      <footer style={styles.footer}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerSectionTitle}>Contact Information</h3>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}>Address: Galle Sri Lanka</li>
            <li style={styles.footerListItem}>Email: lahirowickramasinghe9@gmail.com</li>
            <li style={styles.footerListItem}>Phone: 0094-91-2267027</li>
            <li style={styles.footerListItem}>Cell: 0094-77-7614087</li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.footerSectionTitle}>Quick Links</h3>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}><a href="/" style={styles.socialLink}>Home</a></li>
            <li style={styles.footerListItem}><a href="/about" style={styles.socialLink}>About Us</a></li>
            <li style={styles.footerListItem}><a href="/TourPackages" style={styles.socialLink}>Tour Packages</a></li>
            <li style={styles.footerListItem}><a href="/gallery" style={styles.socialLink}>Gallery</a></li>
            <li style={styles.footerListItem}><a href="/contactus" style={styles.socialLink}>Contact Us</a></li>
            <li style={styles.footerListItem}><a href="/feedback" style={styles.socialLink}>Feedbacks</a></li>
          </ul>
        </div>
        <div style={styles.footerSection}>
          <h3 style={styles.footerSectionTitle}>Follow Us</h3>
          <ul style={styles.footerList}>
            <li style={styles.footerListItem}><a href="#" style={styles.socialLink}>Facebook</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.socialLink}>Twitter</a></li>
            <li style={styles.footerListItem}><a href="#" style={styles.socialLink}>Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Feedback;

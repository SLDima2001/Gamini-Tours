import React, { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faCar,faEnvelope,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebook, FaInstagram,FaTiktok } from 'react-icons/fa';
function ContactUS() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setsubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const handleChange = (e) => setPhone(e.target.value.replace(/[^0-9]/g, ''));

  const handleSubmit = async (event) => {
    event.preventDefault();
    window.location.reload();

    try {
      const response = await fetch(`http://localhost:5555/send-email/form1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error sending email: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();

        if (responseData.success) {
          alert('Email sent successfully!');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          window.location.reload(); // Reload the page
        } else {
          alert('Failed to send email.');
        }
      } else {
        const textResponse = await response.text();
        alert(textResponse);
      }
    } catch (error) {
      console.alert(error);
      alert('Successfully');
    }
  };
  
  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    
  };
  const textareaStyle = {
    width: '100%',
    padding: '20px',
    marginBottom: '25px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '300px',
  };
  const bookbuttonstyle = {
    display: isMobile ? 'none' : 'block', // Hide on mobile
    backgroundColor: '#4682B4',
      color: 'white',
      padding: '20px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.6em',
      marginTop: '0px',
      
    
  };
  const buttonStyle = {
    backgroundColor: '#4682B4',
    color: 'white',
    border: 'none',
    padding: '1px 50px',
    borderRadius: '',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize:'2em',
  };

  const labelStyle = {
    display: 'block',
      fontSize: '16px',
      marginBottom: '5px',
      color: '#333',
  };
  const inputStyle = {
    width: 'calc(100% - 20px)',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const headerStyle = {
    justifyContent: '',
    padding: '0px',
    backgroundColor:'#D3D3D3',
    color: 'black',
    position: '',
    width: '100%',
    top: '',
    left: '0',
    zIndex: '1000',
  };
  const header1style = {
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
  }

  const logoImgStyle = {
    height: '120px',
    width:'120px',
    marginTop: '0px',
  };

  const h1Style = {
    fontSize: '3em',
    margin: '0',
    padding: '10px',
    backgroundColor: '#fff', // White background for contrast
    borderRadius: '8px',
    display: 'inline-block',
  };

  const navbarStyle = {
    backgroundColor: '',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: '',
    top: '0',
    left: '0',
    width: '100%',
    height: '70px',
    padding: '10px 20px',
    transition: 'transform 0.3s ease',
    transform: isNavbarVisible ? 'translateY(0)' : 'translateY()',
    zIndex: '1000',
  };
  const navbarStyle2 = {
    fontSize:'20px',
    backgroundColor: 'white',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: '',
    top: '0',
    left: '0',
    width: '100%',
    height: '120px',
    padding: '10px 0px 0px  ',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease',
    transform: isNavbarVisible ? 'translateY(0)' : 'translateY()',
    zIndex: '1000',
  };

  
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 15px',
  };
  
  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Adds space between buttons
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const liStyle = {
    marginBottom: '20px',
  };

  const aStyle = {
    display: 'block',
    color: 'white',
    padding: '14px 16px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const tourPackagesStyle = {
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    
  };

  const packageStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '20%',
    boxShadow: '0 4px 8px rgba(10, 0, 0, 0.1)',
  };

  const packageImgStyle = {
    height: '150px',
    borderRadius: '50%',
  };

  const footerStyle = {
    padding: '20px',
    backgroundColor: '#4682B4',
    color: 'white',
    textAlign: 'left',
    marginTop: 'auto',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    position: 'relative',
  };

  const footerSectionStyle = {
    marginBottom: '20px',
    flex: '1 1 200px',
  };

  const footerSectionTitleStyle = {
    borderBottom: '1px solid white',
    paddingBottom: '10px',
    marginBottom: '10px',
  };

  const footerListStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };
  const footerListItemStyle = {
    marginBottom: '10px',
  };

  const socialLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  const h2Style = {
    fontSize: '4em',
    margin: '0',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  };
  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    border: '2px solid #3498db',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
    fontFamily: 'Arial, sans-serif',
    position: 'center',
    zIndex: '999',
    minHeight:'80vh',
    marginLeft:'',
    alignItems: 'center',
    backgroundSize: 'cover',
  };
  const wrapper={
    backgroundColor: '',
      border: '',
      borderRadius: '10px',
      width: '600px',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0)',
  }


  return (
    <div style={appStyle}>
      <header style={header1style} >
      <div style={navbarStyle}>
      {/* Left Section: Logo */}
      <div>
        <h1 style={{ margin: '0', padding: '0', fontSize: '2em' }}> <b> info@lahirutours.co.uk</b></h1>
      </div>
      
      {/* Center Section: Navigation Links */}
      <div style={navLinksStyle}>
       
      </div>
      
      {/* Right Section: Buttons */}
      <div style={buttonContainerStyle}>
      <a href="https://www.facebook.com/share/TLHsJswwmcxzvuiA/?mibextid=WC7FNe" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          <FaFacebook size={30} />
        </a>
        <a href="https://www.instagram.com/lahiru_tours_sri_lanka?igsh=azYyenZxaHZ6aW1y&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          <FaInstagram size={30} />
        </a>
        <a href="https://vm.tiktok.com/ZGevyQ8eB/" target="_blank" rel="noopener noreferrer" style={{  padding: '10px 20px', cursor: 'pointer' }} >
          <FaTiktok size={30}  />
  </a>

        {/* Add more buttons as needed */}
      </div>

    </div>

            
      </header>
      <section style={headerStyle}>
      <div style={navbarStyle2}>
  {/* Left Section: Logo */}
  <div>
  <img src="/src/Photos/logo.gif" alt="Logo" style={logoImgStyle} />
  </div>
  
  {/* Center Section: Navigation Links */}
  <div style={navLinksStyle}>
    <a href="/" style={linkStyle}>Home</a>
    <a href="/About" style={linkStyle}>About Us</a>
    <a href="/TourPackages" style={linkStyle}>Tour Packages</a>
    <a href="/ContactUS" style={linkStyle}>Contact</a>
    <a href="/feedback" style={linkStyle}>FAQ</a>
  </div>
  <div style={{ marginRight: '10px',marginTop:'19px' }}> {/* Right-aligned content */}
  <Link to="/BookingForm" style={bookbuttonstyle}>
          <b>Book Now</b>
            </Link> 
  </div>
  
  
</div>
        
        
        
      </section>
      
      <div style={tourPackagesStyle}>
        <div style={wrapper}>
      <form style={formStyle} onSubmit={handleSubmit}>
          <h2 style={h2Style}>Contact Us</h2>
          <label style={labelStyle} htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle} htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <label style={labelStyle} htmlFor="subject">Subject:</label>
          <textarea
            id="subject"
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
            style={inputStyle}
            required
          ></textarea>
          <label style={labelStyle} htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textareaStyle}
            required
          ></textarea>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>
      </div>
      
      <footer style={footerStyle}>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Relaxing</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>Hikkaduwa Beach</li>
            <li style={footerListItemStyle}>Galle fort</li>
            <li style={footerListItemStyle}>Negambo Beach</li>
            <li style={footerListItemStyle}>Peradeniya Botnical</li>
            <li style={footerListItemStyle}>Tangalla</li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Ancient Places</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>Sigiriya</li>
            <li style={footerListItemStyle}>Anuradhapura</li>
            <li style={footerListItemStyle}>Polonnaruwa</li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Become Our Friend</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}><a href="https://www.facebook.com/share/TLHsJswwmcxzvuiA/?mibextid=WC7FNe" style={socialLinkStyle}>Facebook</a></li>
            <li style={footerListItemStyle}><a href="https://www.instagram.com/lahiru_tours_sri_lanka?igsh=azYyenZxaHZ6aW1y&utm_source=qr" style={socialLinkStyle}>Instagram</a></li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Contact Us</h4>
          
          <p><u>
            info@lahirutours.co.uk<br />
            admin@lahirutours.co.uk <br />
            payment@lahirutours.co.uk <br />
            nipun_virajitha@lahirutours.co.uk <br />
            gamini@lahirutours.co.uk <br /></u>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUS;

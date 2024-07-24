import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faCar,faEnvelope,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebook, FaInstagram,FaTiktok } from 'react-icons/fa';


function About() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '', // Light blue background color
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure app takes up full viewport height
  };
  const bookbuttonstyle = {
    fontSize: '1.6em',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    padding: '20px 60px',
    borderRadius: '5px',
    cursor: 'hand',
    transition: 'background-color 0.3s ease',
    
    
  };

  const headerStyle = {
    justifyContent: 'center',
    padding: '0px',
    backgroundColor: '#ADD8E6',
    color: 'black',
    position: 'relative', // Ensure header content is relative to parent
  };

  const logoImgStyle = {
    height: '120px',
    width:'120px',
    marginTop: '0px',
  };

  const h1Style = {
    
    fontSize: '4em',
    margin: '0',
    color: '#333', // Darken the color for better visibility
    backgroundColor: '', // Light blue background color
    padding: '10px', // Add padding for better visual appearance
    borderRadius: '8px', // Rounded corners for the background
    display: 'inline-block', // Ensures the background spans the content width
    marginLeft: '-00px',
    
  };
  const paraStyle = {
    color: 'black',
    marginLeft: '00px',
  };


  const contactInfoStyle = {
    marginLeft: 'auto', // Pushes contact info to the right
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
    margin: '0', // Remove default margin
  };

  const liStyle = {
    marginBottom: '10px',
  };

  const aStyle = {
    display: 'block',
    color: 'white',
    padding: '14px 16px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const mainContentStyle = {
    flex: '1', // Allow main content to grow to fill remaining space
    padding: '20px',
    backgroundColor: '#ffffff',
    marginLeft: isNavbarVisible ? '200px' : '0', // Adjust main content margin when navbar is visible
    transition: 'margin-left 0.3s ease', // Add transition for smooth adjustment
  };

  const h2Style = {
    fontFamily:'Rockybilly',
    color: '#4CAF50',
    fontSize:'4em',
  };

  const pStyle = {
    fontFamily:'Great Vibes',
    fontSize: '2em',
    color: '#333',
  };

  const tourPackagesStyle = {
    padding: '20px',
    backgroundColor: '#e0f7fa',
  };

  const h3Style = {
    color: '#00796b',
  };

  const packageOptionsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
  };

  const packageStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const packageImgStyle = {
    height: '100px',
  };

  const h4Style = {
    marginTop: '10px',
    color: '#333',
  };

  const footerStyle = {
    padding: '20px',
    backgroundColor: '#4682B4',
    color: 'white',
    textAlign: 'left',
    marginTop: 'auto', // Pushes footer to the bottom
    width: '100%', // Ensure footer spans full width
    display: 'flex',
    justifyContent: 'space-between', // Spread out footer content
    flexWrap: 'wrap', // Allow wrapping for smaller screens
    position: 'relative', // Ensure footer content is relative to parent
  };

  const footerSectionStyle = {
    marginBottom: '20px',
    flex: '1 1 200px', // Allow each section to grow and shrink, minimum width 200px
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

  const socialMediaStyle = {
    display: 'flex',
    gap: '10px',
  };

  const socialLinkStyle = {
    color: 'white',
    textDecoration: 'none',
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


  
  return (
    <div style={appStyle}>
      <header style={header1style} >
      <div style={navbarStyle}>
      {/* Left Section: Logo */}
      <div>
        <h1 style={{ margin: '0', padding: '0', fontSize: '1em' }}>lahirutours@gmail.com</h1>
      </div>
      
      {/* Center Section: Navigation Links */}
      <div style={navLinksStyle}>
       
      </div>
      
      {/* Right Section: Buttons */}
      <div style={buttonContainerStyle}>
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
      <section style={headerStyle}>
      <div style={navbarStyle2}>
  {/* Left Section: Logo */}
  <div>
  <img src="/Photos/logo.gif" alt="Logo" style={logoImgStyle} />
  </div>
  
  {/* Center Section: Navigation Links */}
  <div style={navLinksStyle}>
    <a href="/" style={linkStyle}>Home</a>
    <a href="/About" style={linkStyle}>About</a>
    <a href="/TourPackages" style={linkStyle}>Tour Packages</a>
    <a href="/ContactUS" style={linkStyle}>Contact</a>
    <a href="/feedback" style={linkStyle}>FAQ</a>
  </div>
  <div style={{ marginRight: '10px',marginTop:'19px' }}> {/* Right-aligned content */}
  <Link to="/BookingForm" style={bookbuttonstyle}>
          Book Now !
            </Link> 
  </div>
  
  
</div>
        
        
        
      </section>
     
      <main style={mainContentStyle}>
        <h2 style={h2Style}>Lahiru Tours</h2>
        <p style={pStyle}>
        Thank you for choosing Lahiru Tours! We are excited to assist you in planning your perfect Sri Lankan adventure. Our team will promptly get back to you within 24 hours with a customized itinerary tailored to your interests and needs.
For any immediate questions or additional information, please feel free to contact us directly at info@lahirutours.co.uk.
We look forward to making your travel dreams come true!
Warm regards,
The Lahiru Tours Team
        
        </p>
      </main>
      
      <footer style={footerStyle}>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Relaxing</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Hikkaduwa Beach</a></li>
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Galle fort</a></li>
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Negambo Beach</a></li>
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Peradeniya Botnical</a></li>
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Tangalla</a></li>
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
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Facebook</a></li>
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Twitter</a></li>
            <li style={footerListItemStyle}><a href="#" style={socialLinkStyle}>Instagram</a></li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Contact Us</h4>
          <p>
            Email: info@lahirutours.com
            <br />
            Phone: 0094-91-2267027 | 0094-77-7614087
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;

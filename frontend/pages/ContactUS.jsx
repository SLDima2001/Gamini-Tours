import React, { useState } from 'react';

function ContactUS() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e0f7fa', // Light blue background color
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure app takes up full viewport height
  };

  const headerStyle = {
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#ADD8E6', // Light blue background color
    color: '#333', // Darken the color for better visibility
    position: 'relative', // Ensure header content is relative to parent
  };

  const logoImgStyle = {
    height: '80px',
    marginRight: '20px',
    borderRadius: '50%', // Rounded logo image
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
    backgroundColor: '#333',
    color: 'white',
    flex: '0 0 auto', // Allow navbar to grow and shrink as needed
    transition: 'transform 0.3s ease', // Adding transition for smooth auto-hide effect
    transform: isNavbarVisible ? 'translateX(0)' : 'translateX(-90%)', // Move navbar in/out of view
    position: 'fixed', // Fixed positioning to stick to the left
    left: '0',
    top: '30%',
    height: 'auto', // Full height of the viewport
    width: '200px', // Fixed width for the navbar
    overflowY: 'auto', // Enable scrolling if navbar content exceeds viewport height
    zIndex: '1000', // Ensure it's on top of other content
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
    backgroundColor: '#ffffff',
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
    backgroundColor: '#0000FF',
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

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <div>
          <img src="https://via.placeholder.com/150" alt="Logo" style={logoImgStyle} />
          <h1 style={h1Style}>Lahiru Tours</h1>
        </div>
      </header>
      <nav
        style={navbarStyle}
        onMouseEnter={toggleNavbar}
        onMouseLeave={toggleNavbar}
      >
        <ul style={ulStyle}>
          <li style={liStyle}><a href="/" style={aStyle}>Home</a></li>
          <li style={liStyle}><a href="/About" style={aStyle}>About</a></li>
          <li style={liStyle}><a href="/TourPackages" style={aStyle}>Tour Packages</a></li>
          <li style={liStyle}><a href="/Gallery" style={aStyle}>Gallery</a></li>
          <li style={liStyle}><a href="/ContactUS" style={aStyle}>Contact Us</a></li>
          <li style={liStyle}><a href="/Feedback" style={aStyle}>Feedbacks</a></li>
        </ul>
      </nav>
      <section style={tourPackagesStyle}>
        <h2 style={{ color: '#4CAF50' }}>Tour Packages</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ ...packageStyle, backgroundColor: '#FFC107' }}>
            <img src="https://via.placeholder.com/150" alt="Package 1" style={packageImgStyle} />
            <h3 style={{ color: '#333' }}>Package 1</h3>
            <p style={{ color: '#333' }}>Lorem ipsum dolor sit amet.</p>
          </div>
          <div style={{ ...packageStyle, backgroundColor: '#FF5722' }}>
            <img src="https://via.placeholder.com/150" alt="Package 2" style={packageImgStyle} />
            <h3 style={{ color: '#333' }}>Package 2</h3>
            <p style={{ color: '#333' }}>Consectetur adipiscing elit.</p>
          </div>
          <div style={{ ...packageStyle, backgroundColor: '#E91E63' }}>
            <img src="https://via.placeholder.com/150" alt="Package 3" style={packageImgStyle} />
            <h3 style={{ color: '#333' }}>Package 3</h3>
            <p style={{ color: '#333' }}>Sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </section>
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

export default ContactUS;

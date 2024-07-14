import React, { useState } from 'react';

function Home() {
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
    padding: '0px',
    backgroundColor: '#ADD8E6',
    color: 'black',
    position: 'relative', // Ensure header content is relative to parent
  };
  

  const logoImgStyle = {
    alignItems: 'center',
    height: '80px',
    marginRight: '50px',
  };

  const h1Style = {
    
    fontSize: '4em',
    margin: '0',
    color: '#333', // Darken the color for better visibility
    backgroundColor: '', // Light blue background color
    padding: '10px', // Add padding for better visual appearance
    borderRadius: '8px', // Rounded corners for the background
    display: 'inline-block', // Ensures the background spans the content width
    marginLeft: '-1600px',
    
  };
  const paraStyle = {
    color: 'black',
    marginLeft: '-1600px',
  };

  const contactInfoStyle = {
    marginLeft: 'auto', // Pushes contact info to the right
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
    margin: '0', // Remove default margin
  };

  const liStyle = {
    marginBottom: '20px',
  };
  const h12Style = {
    fontSize: '5em',
    margin: '0',
    color: '#333', // Darken the color for better visibility
     // Light blue background color
    padding: '10px', // Add padding for better visual appearance
    borderRadius: '8px', // Rounded corners for the background
    display: 'inline-block', // Ensures the background spans the content width
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
    color: '#4CAF50',
  };

  const pStyle = {
    fontSize: '1.2em',
    color: '#333',
  };

  const tourPackagesStyle = {
    padding: '20px',
    backgroundColor: '#e0f7fa',
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/09/27/13/37/srilanka-2792097_1280.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const h3Style = {
    color: '#00796b',
  };

  const packageOptionsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '150px 0',
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

  const h4Style = {
    marginTop: '10px',
    color: '#333',
  };

  const footerStyle = {
    padding: '20px',
    backgroundColor: '#0000FF',
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
  

  const loginButtonStyle = {
    marginLeft: '2000px', // Adjust as needed
    padding: '10px',
    marginTop:'-100px',
  };
  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };
  
  

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <div>
          <img src="https://via.placeholder.com/150" alt="Logo" style={logoImgStyle} />
          <h1 style={h1Style}>Lahiru Tours</h1>
           <p style={paraStyle}>Call Us: 0094-91-2267027 | 0094-77-7614087</p>
        </div>
        <div style={loginButtonStyle}>
    <button style={{ padding: '20px',  borderRadius: '10px', border: '5px solid #333' }}>Login</button>
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
          <li style={liStyle}><a href="#" style={aStyle}>Tour Packages</a></li>
          <li style={liStyle}><a href="/Gallery" style={aStyle}>Gallery</a></li>
          <li style={liStyle}><a href="/ContactUS" style={aStyle}>Contact Us</a></li>
          <li style={liStyle}><a href="/Feedback" style={aStyle}>Feedbacks</a></li>
        </ul>
      </nav>
      
      <section style={tourPackagesStyle}>
        <h1 style={h12Style}>Travel Discover Sri Lanka <br />& <br />Enjoy Your Self </h1>
        
        <div style={packageOptionsStyle}>
          <div style={packageStyle}>
            <a href=''>
              <img src="https://via.placeholder.com/150" alt="Galle Fort" style={packageImgStyle} />
              <h4 style={h4Style}>Galle Fort</h4>
            </a>
          </div>
          <div style={packageStyle}>
            <a href=''>
              <img src="https://via.placeholder.com/150" alt="Beaches" style={packageImgStyle}/>
              <h4 style={h4Style}>Beaches</h4>
            </a>
          </div>
          <div style={packageStyle}>
            <a href=''>
              <img src="https://via.placeholder.com/150" alt="Sigiriya" style={packageImgStyle} />
              <h4 style={h4Style}>Sigiriya</h4>
            </a>
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

export default Home;

import React, { useState } from 'react';

function About() {
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
    color: '#4CAF50',
  };

  const pStyle = {
    fontSize: '1.2em',
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
        </div>
        <div style={contactInfoStyle}>
          <p style={paraStyle}>Call Us: 0094-91-2267027 | 0094-77-7614087</p>
        </div>
        <button style={{ padding: '20px',  borderRadius: '10px', border: '5px solid #333' }}>Login</button>
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
      <main style={mainContentStyle}>
        <h2 style={h2Style}>Lahiru Tours</h2>
        <p style={pStyle}>
        Lahiru Tours, in partnership with Gamini, who has over 21 years of touring experience, explores the diverse beauty of Sri Lanka. As a specialist incoming tour operator, we offer tailor-made tours to suit your needs. Independently owned and operating since 1999, we pride ourselves on providing quick responses, accurate information, and reliable, friendly service with traditional Sri Lankan warmth. Our office is located in Hikkaduwa, Sri Lanka.
        
        </p>
      </main>
      <section style={tourPackagesStyle}>
        <h3 style={h3Style}>Here are Our Tour Packages</h3>
        <p style={pStyle}>
          We have very flexible and interesting packages for you. Those made to enjoy your days in Sri Lanka and relax. There are for very reasonable prices. We offer very comfortable hotels and meals for your preferable choice.
        </p>
        <div style={packageOptionsStyle}>
          <div style={packageStyle}>
            <a href='https://unsplash.com/photos/black-ford-mustang-gt-N9Pf2J656aQ'>
              <img src="https://via.placeholder.com/150" alt="Vans" style={packageImgStyle} />
              <h4 style={h4Style}>Vans</h4>
            </a>
          </div>
          <div style={packageStyle}>
            <a href="https://unsplash.com/photos/running-black-porsche-sedan-3ZUsNJhi_Ik">
              <img src="https://via.placeholder.com/150" alt="Cars" style={packageImgStyle} />
              <h4 style={h4Style}>Cars</h4>
            </a>
          </div>
        </div>
        <p style={pStyle}>
          We have both cars and vans. You can choose as you prefer. We recommend Cars for couples and vans for small groups. But always we give first place to your choice. Both kinds of vehicles are fully air-conditioned. We always try to give you a very comfortable and safe ride and stay. Hotels are very comfortable and the food is great. Their services are in high demand. We always try our best to give you a great and enjoyable holiday.
        </p>
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

export default About;

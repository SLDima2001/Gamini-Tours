import React, { useState } from 'react';

function TourPackages() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const packages = [
    { id: 1, name: '6 Days', imgSrc: 'https://via.placeholder.com/150', link: '/Days6', price: 100, description: 'Enjoy a 6-day tour exploring beautiful destinations.' },
    { id: 2, name: '8 Days', imgSrc: 'https://via.placeholder.com/150', link: '/Days8', price: 150, description: 'Experience an 8-day adventure filled with fun and excitement.' },
    { id: 3, name: '10 Days', imgSrc: 'https://via.placeholder.com/150', link: '/Days10', price: 200, description: 'Discover the wonders of a 10-day tour.' },
    { id: 4, name: '15 Days', imgSrc: 'https://via.placeholder.com/150', link: '/Days15', price: 300, description: 'A 15-day journey to explore the best sights and sounds.' },
    { id: 5, name: '18 Days', imgSrc: 'https://via.placeholder.com/150', link: '/Days18', price: 350, description: 'An 18-day tour to immerse yourself in rich culture and history.' },
    { id: 6, name: '20 Days', imgSrc: 'https://via.placeholder.com/150', link: '/Days20', price: 400, description: 'A 20-day expedition to experience everything.' },
  ];

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e0f7fa',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
  };

  const headerStyle = {
    justifyContent: 'center',
    padding: '0px',
    backgroundColor: '#ADD8E6',
    color: 'black',
    position: 'relative',
  };

  const logoImgStyle = {
    alignItems: 'center',
    height: '80px',
    marginRight: '50px',
  };

  const h1Style = {
    fontSize: '4em',
    margin: '0',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
    marginLeft: '-1600px',
  };

  const paraStyle = {
    color: 'black',
    marginLeft: '-1600px',
  };

  const navbarStyle = {
    backgroundColor: '#333',
    color: 'white',
    flex: '0 0 auto',
    transition: 'transform 0.3s ease',
    transform: isNavbarVisible ? 'translateX(0)' : 'translateX(-90%)',
    position: 'fixed',
    left: '0',
    top: '30%',
    height: 'auto',
    width: '200px',
    overflowY: 'auto',
    zIndex: '1000',
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

  const mainContentStyle = {
    flex: '1',
    padding: '20px',
    backgroundColor: '#ffffff',
    marginLeft: isNavbarVisible ? '200px' : '0',
    transition: 'margin-left 0.3s ease',
    position: 'relative',
  };

  const tourPackagesStyle = {
    padding: '20px',
    backgroundColor: '#e0f7fa',
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const packageOptionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '150px 0',
  };

  const packageStyle = (isHovered) => ({
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(10, 0, 0, 0.1)',
    margin: '10px',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    zIndex: isHovered ? '2' : '1',
    position: 'relative',
  });

  const blurredBackgroundStyle = {
    filter: 'blur(5px)',
    transition: 'filter 0.3s ease',
  };

  const packageImgStyle = {
    height: '150px',
    borderRadius: '10px',
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

  const socialMediaStyle = {
    display: 'flex',
    gap: '10px',
  };

  const socialLinkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handlePackageClick = (link) => {
    window.location.href = link;
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
          <li style={liStyle}><a href="#" style={aStyle}>Tour Packages</a></li>
          <li style={liStyle}><a href="/Gallery" style={aStyle}>Gallery</a></li>
          <li style={liStyle}><a href="/ContactUS" style={aStyle}>Contact Us</a></li>
          <li style={liStyle}><a href="/Feedback" style={aStyle}>Feedbacks</a></li>
        </ul>
      </nav>
      <main style={isNavbarVisible ? { ...mainContentStyle, ...blurredBackgroundStyle } : mainContentStyle}>
        <section style={tourPackagesStyle}>
          <div style={packageOptionsStyle}>
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                style={packageStyle(hoveredPackage === pkg.id)}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
                onClick={() => handlePackageClick(pkg.link)}
              >
                <a href={pkg.link}>
                  <img src={pkg.imgSrc} alt={pkg.name} style={packageImgStyle} />
                  <h4 style={h4Style}>{pkg.name}</h4>
                  <p>Price: ${pkg.price}</p>
                  {hoveredPackage === pkg.id && <p>{pkg.description}</p>}
                </a>
              </div>
            ))}
          </div>
        </section>
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
      </footer>
    </div>
  );
}

export default TourPackages;

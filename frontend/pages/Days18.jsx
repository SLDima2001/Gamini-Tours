import React, { useState } from 'react';

function Days18() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [additionalDescriptions, setAdditionalDescriptions] = useState({
    day1: false,
    day2: false,
    day3: false,
    day4: false,
    day5: false,
    day6: false,
  });

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f8ff',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#4682b4',
    color: 'white',
  };

  const logoImgStyle = {
    height: '60px',
  };

  const h1Style = {
    fontSize: '2em',
    margin: '0',
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
    padding: '20px 0',
    margin: '0',
  };

  const liStyle = {
    marginBottom: '20px',
  };

  const aStyle = {
    display: 'block',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const mainContentStyle = {
    flex: '1',
    padding: '20px 40px',
    marginLeft: isNavbarVisible ? '200px' : '0',
    transition: 'margin-left 0.3s ease',
  };

  const tourPackagesStyle = {
    backgroundColor: '',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
    marginBottom: '20px',
  };

  const packageStyle = {
    marginBottom: '40px',
  };

  const packageDescriptionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
    position: 'relative',
    textAlign: 'left',
  };

  const photoStyle = {
    width: '700px',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '10px',
    margin: '20px 0',
  };

  const additionalDescriptionStyle = {
    marginTop: '40px',
    textAlign: 'left',
  };

  const arrowButtonStyle = {
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1.5em',
    color: '#333',
    outline: 'none',
    marginBottom: '10px',
    transition: 'transform 0.3s ease',
  };

  const arrowButtonHoveredStyle = {
    transform: 'scale(1.1)',
  };

  const footerStyle = {
    padding: '20px 40px',
    backgroundColor: '#4682b4',
    color: 'white',
    textAlign: 'left',
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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

  const toggleAdditionalDescription = (day) => {
    setAdditionalDescriptions((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <img
          src="https://via.placeholder.com/150"
          alt="Logo"
          style={logoImgStyle}
        />
        <h1 style={h1Style}>Lahiru Tours</h1>
        <button
          onClick={toggleNavbar}
          style={{
            color: 'white',
            fontSize: '1.5em',
            backgroundColor: 'transparent',
            border: 'none',
          }}
        >
          ☰
        </button>
      </header>
      <nav style={navbarStyle} onMouseEnter={toggleNavbar} onMouseLeave={toggleNavbar}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="/" style={aStyle}>
              Home
            </a>
          </li>
          <li style={liStyle}>
            <a href="/About" style={aStyle}>
              About
            </a>
          </li>
          <li style={liStyle}>
            <a href="/TourPackages" style={aStyle}>
              Tour Packages
            </a>
          </li>
          <li style={liStyle}>
            <a href="/Gallery" style={aStyle}>
              Gallery
            </a>
          </li>
          <li style={liStyle}>
            <a href="/ContactUS" style={aStyle}>
              Contact Us
            </a>
          </li>
          <li style={liStyle}>
            <a href="/Feedback" style={aStyle}>
              Feedbacks
            </a>
          </li>
        </ul>
      </nav>
      <h1 style={h1Style}>6-Day Tour Package</h1>
      <main style={mainContentStyle}>
        <section style={tourPackagesStyle}>
          <div style={packageStyle}>
            <img
              src="https://via.placeholder.com/700x500"
              alt="Tour Image"
              style={{ ...photoStyle, alignSelf: 'flex-start' }}
            />
            <div style={{ ...packageDescriptionStyle, textAlign: 'left', alignItems: 'flex-start' }}>
              <div style={additionalDescriptionStyle}>
                <p>Day 1 - Arrival in Colombo</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day1 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day1')}
                >
                  {additionalDescriptions.day1 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day1 && (
                  <div>
                    <h4>Explore the vibrant city of Colombo upon your arrival.</h4>
                    <p>
                      Day 1 is dedicated to exploring the vibrant city of
                      Colombo upon your arrival. You'll be immersed in the
                      bustling streets, diverse culture, and historical
                      landmarks that define Sri Lanka's capital city. Enjoy a
                      blend of modern city life and colonial charm as you visit
                      local markets, historic sites, and indulge in authentic
                      Sri Lankan cuisine.
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 2 - Sigiriya and Anuradhapura</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day2 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day2')}
                >
                  {additionalDescriptions.day2 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day2 && (
                  <div>
                    <h4>Explore the ancient wonders of Sigiriya and Anuradhapura.</h4>
                    <p>
                      Day 2 is dedicated to exploring the ancient wonders of
                      Sigiriya and Anuradhapura. Your day will start with a
                      visit to the Sigiriya Rock Fortress, an ancient palace
                      built on a towering rock that offers breathtaking views
                      of the surrounding landscape. You'll climb to the top of
                      the rock and marvel at the ancient ruins and frescoes
                      that adorn its walls.
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 3 - Dambulla Cave Temple</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day3 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day3')}
                >
                  {additionalDescriptions.day3 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day3 && (
                  <div>
                    <h4>Visit the historic Dambulla Cave Temple.</h4>
                    <p>
                      Day 3 is dedicated to visiting the historic Dambulla Cave
                      Temple, a UNESCO World Heritage Site. The temple complex
                      is a series of caves that house a collection of ancient
                      Buddhist statues and vibrant murals. As you explore the
                      caves, you'll be captivated by the rich history and
                      cultural significance of this sacred site.
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 4 - Kandy</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day4 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day4')}
                >
                  {additionalDescriptions.day4 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day4 && (
                  <div>
                    <h4>Experience the cultural heart of Sri Lanka in Kandy.</h4>
                    <p>
                      Day 4 is dedicated to experiencing the cultural heart of
                      Sri Lanka in Kandy. You'll visit the sacred Temple of the
                      Tooth Relic, a significant religious site for Buddhists
                      around the world. The temple complex is located in the
                      heart of Kandy and is surrounded by lush gardens and
                      serene lakes, creating a peaceful atmosphere for visitors.
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 5 - Nuwara Eliya</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day5 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day5')}
                >
                  {additionalDescriptions.day5 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day5 && (
                  <div>
                    <h4>Discover the lush landscapes of Nuwara Eliya.</h4>
                    <p>
                      Day 5 is dedicated to discovering the lush landscapes of
                      Nuwara Eliya, known as "Little England" for its cool
                      climate and colonial architecture. You'll take a scenic
                      train ride through tea plantations and rolling hills,
                      witnessing the stunning natural beauty of the region.
                      In Nuwara Eliya, you'll visit a tea factory to learn
                      about the tea-making process and sample some of the
                      finest Ceylon tea.
                    </p>
                  </div>
                )}
              </div>
              <div style={additionalDescriptionStyle}>
                <p>Day 6 - Departure</p>
                <button
                  style={{
                    ...arrowButtonStyle,
                    ...(additionalDescriptions.day6 ? arrowButtonHoveredStyle : {}),
                  }}
                  onClick={() => toggleAdditionalDescription('day6')}
                >
                  {additionalDescriptions.day6 ? '▲ Hide Details' : '▼ Show Details'}
                </button>
                {additionalDescriptions.day6 && (
                  <div>
                    <h4>Conclude your tour with departure from Colombo.</h4>
                    <p>
                      Day 6 marks the conclusion of your tour as you depart
                      from Colombo. You'll have the opportunity to reflect on
                      the incredible experiences and memories you've made
                      during your journey through Sri Lanka. Depending on your
                      departure time, you may have some free time to explore
                      any last-minute attractions or indulge in some shopping
                      before heading to the airport.
                    </p>
                  </div>
                  
                )}
                
              </div>
              
            </div>
            
          </div>
          
        </section>
        
      </main>
      <footer style={footerStyle}>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Contact Us</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>Phone: 123-456-7890</li>
            <li style={footerListItemStyle}>Email: info@lahirutours.com</li>
            <li style={footerListItemStyle}>
              Address: 123 Main St, Colombo, Sri Lanka
            </li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Quick Links</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>
              <a href="/" style={socialLinkStyle}>
                Home
              </a>
            </li>
            <li style={footerListItemStyle}>
              <a href="/About" style={socialLinkStyle}>
                About
              </a>
            </li>
            <li style={footerListItemStyle}>
              <a href="/TourPackages" style={socialLinkStyle}>
                Tour Packages
              </a>
            </li>
            <li style={footerListItemStyle}>
              <a href="/Gallery" style={socialLinkStyle}>
                Gallery
              </a>
            </li>
            <li style={footerListItemStyle}>
              <a href="/ContactUS" style={socialLinkStyle}>
                Contact Us
              </a>
            </li>
            <li style={footerListItemStyle}>
              <a href="/Feedback" style={socialLinkStyle}>
                Feedbacks
              </a>
            </li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h4 style={footerSectionTitleStyle}>Follow Us</h4>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>
              <a href="#" style={socialLinkStyle}>
                Facebook
              </a>
            </li>
            <li style={footerListItemStyle}>
              <a href="#" style={socialLinkStyle}>
                Twitter
              </a>
            </li>
            <li style={footerListItemStyle}>
              <a href="#" style={socialLinkStyle}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Days18;

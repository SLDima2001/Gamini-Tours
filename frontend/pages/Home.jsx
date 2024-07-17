import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      console.error(error);
      alert('An error occurred while sending the email.');
    }
  };

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e0f7fa',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '150vh',
  };

  const headerStyle = {
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.5)',
    color: 'black',
    position: '',
    width: '100%',
    top: '0',
    left: '0',
    transition: 'background-color 0.3s ease',
    zIndex: '1000',
  };
  const header1style = {
    justifyContent: 'left',
    padding: '80px',
    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
    color: 'black',
    position: '',
    width: '100%',
    top: '0',
    left: '0',
    transition: 'background-color 0.3s ease',
    zIndex: '1000',
  }

  const logoImgStyle = {
    height: '80px',
    marginRight: '20px',
  };

  const h1Style = {
    fontSize: '2.5em',
    margin: '0',
    color: '#333',
    display: 'inline-block',
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
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    marginTop: '120px', // To compensate for fixed header height
  };

  const tourPackagesStyle = {
    flex: '5',
    backgroundColor: '',
    padding: '100px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
    maxWidth: '70%',
    transition: 'background-color 0.3s ease',
    
  };

  const h2Style = {
    fontSize: '2em',
    margin: '0',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  };
  const h12Style = {
    fontSize: '3em',
    margin: '0',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  };
  const h123Style = {
    fontSize: '2.3em',
    margin: '0',
    color: '#333',
    padding: '40px',
    display: 'inline-block',
  };
  const desstyle = {
    fontSize: '1.6em',
    margin: '0',
    color: '#333',
    padding: '40px',
    borderRadius: '8px',
    display: 'inline-block',

  }

  const packageOptionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '120px',
  };

  const packageStyle = {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
  };

  const packageImgStyle = {
    height: '200px',
    width: '350px',
    borderRadius: '10%',
    justifyContent: 'center',
  };

  const h42Style = {
    marginTop: '40px',
    color: '#333',
    backgroundColor:'#B0E0E6',
    textAlign: 'left',
    width: '80px',
    
  };

  const formStyle = {
    flex: '1',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '50%',
    fontFamily: 'Arial, sans-serif',
    position: 'fixed',
    top: '400px', // To align with the header
    right: '20px',
    zIndex: '999',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '100px',
  };

  const buttonStyle = {
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const bookbuttonstyle = {
    fontSize: '1.6em',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    padding: '20px 60px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',

  };
  const footerStyle = {
    padding: '20px',
    backgroundColor: '#0000FF',
    color: 'white',
    textAlign: 'center',
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

 
  return (
    <div style={appStyle}>
      <header  style={header1style}>
        <p>lahiruroursorg@gmail.com</p>
      </header> 

      <section style={headerStyle}>
        <img src="/Photos/Logo.jpg" alt="Logo" style={logoImgStyle} />
        <h1 style={h1Style}>Lahiru Tours</h1>
        <button onClick={toggleNavbar}></button>
      </section>
      

      <nav style={navbarStyle} onMouseEnter={toggleNavbar} onMouseLeave={toggleNavbar}>
        <ul style={ulStyle}>
          <li style={liStyle}><a href="/" style={aStyle}>Home</a></li>
          <li style={liStyle}><a href="/About" style={aStyle}>About</a></li>
          <li style={liStyle}><a href="/TourPackages" style={aStyle}>Tour Packages</a></li>
          <li style={liStyle}><a href="/Gallery" style={aStyle}>Gallery</a></li>
          <li style={liStyle}><a href="/ContactUs" style={aStyle}>Contact Us</a></li>
        </ul>
      </nav>

      <div style={mainContentStyle}>
        <div style={tourPackagesStyle}>
          <p style={h123Style}>Why Lahiru Tours</p>
          <p style={desstyle}>Lahiru Tours, in  who has over 21 years of touring experience, explores the diverse beauty of Sri Lanka. As a specialist incoming tour operator, we offer tailor-made tours to suit your needs. Independently owned and operating since 1999, we pride ourselves on providing quick responses, accurate information, and reliable, friendly service with traditional Sri Lankan warmth. Our office is located in Hikkaduwa, Sri Lanka</p>
          <h2 style={h12Style}>Tour Packages</h2>
          <div style={packageOptionsStyle}>


            <Link to="/Days6" style={packageStyle}>
            <h4>Sri Lanka 6 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1683647986987-bcd7c320f3a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 1" style={packageImgStyle} />
              <h4 style={h42Style}>Days 6</h4>
            </Link>

            <Link to="/Days8" style={packageStyle}>
            <h4>Sri Lanka 8 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1604293679030-7cfcd7174ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 2" style={packageImgStyle} />
              <h4 style={h42Style}>Days 8</h4>
            </Link>

            <Link to="/Days10" style={packageStyle}>
            <h4>Sri Lanka 10 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1562827246-cc429d3bcf6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 3" style={packageImgStyle} />
              <h4 style={h42Style}>Days 10</h4>
            </Link>

            <Link to="/Days12" style={packageStyle}>
            <h4>Sri Lanka 12 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1526785436213-c732dac778b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 4" style={packageImgStyle} />
              <h4 style={h42Style}>Days 12</h4>
            </Link>
            
            <Link to="/Days15" style={packageStyle}>
            <h4>Sri Lanka 15 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1580910531902-1112518b26ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzcmklMjBsYW5rYSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Package 5" style={packageImgStyle} />
              <h4 style={h42Style}>Days 15</h4>
            </Link>

            <Link to="/Days18" style={packageStyle}>
            <h4>Sri Lanka 18 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1527248709254-0f1a6b5d297a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxzcmklMjBsYW5rYSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Package 6" style={packageImgStyle} />
              <h4 style={h42Style}>Days 18</h4>
            </Link>

            <Link to="/Days182" style={packageStyle}>
            <h4>Sri Lanka 18 Days Tour <br />North &South Round Tour</h4>
              <img src="https://images.unsplash.com/photo-1684758404779-388d63ffafb4?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Package 7" style={packageImgStyle} />
              <h4 style={h42Style}>Days 18</h4>
            </Link>

            <Link to="/Days20" style={packageStyle}>
            <h4>Sri Lanka 20 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1697375877233-9d44fa4f68c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxzcmklMjBsYW5rYSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Package 8" style={packageImgStyle} />
              <h4 style={h42Style}>Days 20</h4>
            </Link>
            <p style={desstyle}>We offer both cars and vans to suit your preferences. We recommend cars for couples and vans for small groups, but your choice always comes first. All our vehicles are fully air-conditioned to ensure a comfortable and safe ride. Our partner hotels provide great comfort, excellent food, and high-standard services. We strive to deliver the best experience to ensure you have a highly satisfactory tour with us.

Tour PackagesWe offer flexible and engaging packages designed to help you enjoy and relax during your stay in Sri Lanka. Our packages are reasonably priced and include very comfortable hotels and meals tailored to your preferences.</p>
          </div>
          
          <Link to="/BookingForm" style={bookbuttonstyle}>
          Book Now !

            </Link>
        </div>

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
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle} htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={textareaStyle}
            required
          ></textarea>
          <button type="submit" style={buttonStyle}>Inquiry</button>
        </form>
      </div>

      <footer style={footerStyle}>
        <div style={footerSectionStyle}>
          <h3 style={footerSectionTitleStyle}>Contact Us</h3>
          <ul style={footerListStyle}>
            <li style={footerListItemStyle}>Phone: (123) 456-7890</li>
            <li style={footerListItemStyle}>Email: info@example.com</li>
          </ul>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={footerSectionTitleStyle}>Follow Us</h3>
          <div style={socialMediaStyle}>
            <a href="https://facebook.com" style={socialLinkStyle}>Facebook</a>
            <a href="https://twitter.com" style={socialLinkStyle}>Twitter</a>
            <a href="https://instagram.com" style={socialLinkStyle}>Instagram</a>
          </div>
        </div>
        <div style={footerSectionStyle}>
          <h3 style={footerSectionTitleStyle}>Address</h3>
          <p>123 Main Street, Anytown, USA</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

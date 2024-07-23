import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faCar,faEnvelope,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebook, FaInstagram,FaTiktok } from 'react-icons/fa';


function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setMessage] = useState('');
  const [isformvisible, setisformvisible] = useState(false);

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

  const props = useSpring({
    opacity: isformvisible ? 1 : 0,
    transform: isformvisible ? 'scale(1)' : 'scale(2)',
    config: { tension: 1200, friction: 200 },
  });
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
          subject,
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
          setsubject('');
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
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '150vh',
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
  };

  const logoImgStyle = {
    height: '100px',
    marginTop: '0px',
  };

  const h1Style = {
    fontSize: '3.5em',
    margin: '0',
    padding: '0px',
    color: '#333',
    display: 'inline-block',
  };
  const hStyle = {
    fontSize: '2.5em',
    margin: '0',
    color: '#333',
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
    height: '50px',
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
    height: '100px',
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
  
  const button1Style = {
    padding: '10px 20px',
    cursor: 'pointer',
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
    justifyContent: 'center',
    padding: '20px',
    marginTop: '50px', // To compensate for fixed header height
  };

  const tourPackagesStyle = {
    flex: '6',
    backgroundColor: '',
    padding: '50px',
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
  const h11style = {
    fontSize: '1em',
    textAlign: 'left',
    margin: '0',
    color: '#333',
    padding: '0px',
    borderRadius: '8px',
    display: 'relative',
    
  };
  const h11right = {
    fontSize: '1em',
    textAlign: 'left',
    margin: '0',
    color: '#333',
    padding: '0px',
    borderRadius: '8px',
    display: 'relative',
    
  };
  const h12Style = {
    fontFamily:'Great Vibes',
    fontSize: '4em',
    margin: '0',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  };
  const custopic = {
    fontSize: '3em',
    marginTop: '500px',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block',
  };
  const barstyle = {
    fontSize: '0.1em',
    margin: '0',
    width:'100%',
    color: '#oooo',
    backgroundColor:'#000',
    padding: '1px',
    display: 'inline-block',
    marginTop:'10px',
  };
  const bar1style = {
    fontSize: '0.1em',
    margin: '0',
    width:'100%',
    color: '#oooo',
    backgroundColor:'#000',
    padding: '1px',
    
    marginTop:'100px',
  };
  const desstyle = {
    fontFamily:'Vinque',
    fontSize: '2em',
    margin: '0px',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    maxWidth: '100%',
    marginTop:'100px',

    

  }

  const packageOptionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginLeft:'30px',
    
  };

  const packageStyle = {
    textAlign: 'center',
    backgroundColor: '',
    padding: '20px ',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 1, 1, 1)',
    width: '280px',
    borderColor:'#00008B',
  };

  const fbstyle= {
    height: '220px',
    width: '700px',
    borderRadius: '0px',
    justifyContent: 'center',
    padding: '60px',
    paddingTop: '100px',
    marginLeft: '30px',
  };
  const fb1style= {
    height: '0%',
    width: '100%',
    borderRadius: '0px',
    justifyContent: 'center',
    padding: '0px',
    paddingTop: '100px',
    marginLeft: '00px',
    
  };
  const fb2style= {
    height: '0%',
    width: '100%',
    borderRadius: '0px',
    justifyContent: 'center',
    padding: '0px',
    paddingTop: '100px',
    marginLeft: '00px',
    
  };
  
  

  const packageImgStyle = {
    height: '250px',
    width: '350px',
    padding:'',
    borderRadius: '5%',
    justifyContent: 'center',
  };

  const h42Style = {
    marginTop: '40px',
    color: '#333',
    backgroundColor:'#B0E0E6',
    textAlign: 'left',
    width: '60px',
    
  };

  const formStyle = {
    flex: '1',
    backgroundColor: '#B0E0E6',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
    maxWidth: '300px',
    fontFamily: 'Arial, sans-serif',
    position: 'fixed',
    top: '230px', // To align with the header
    bottom:'10px',
    display: isformvisible ? 'block' : 'none', // Show/hide based on state
    right: '20px',
    zIndex: '999',
    maxHeight:'100%',
    marginRight: '103px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
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
    minHeight: '120px',
  };

  const buttonStyle = {
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '',
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
    cursor: 'hand',
    transition: 'background-color 0.3s ease',
    
    
  };
  const hoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(0.5)',
  };
  
  
  const h1bookbuttonstyle = {
    fontSize: '1.9em',
    justifyContent: 'right',
    backgroundColor: '#00796b',
    color: 'white',
    border: 'none',
    padding: '30px 60px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 1.3s ease',
    marginRight: '-700px',

  };
  const footerStyle = {
    padding: '20px',
    backgroundColor: '#0000FF',
    color: 'white',
    textAlign: 'center',
    marginTop: '50%',
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
  const handleToggleForm = () => {
    setisformvisible(!isformvisible);
  };
  const iconStyle = {
    fontSize: '0.9em',  // Adjust the font size
    margin: '10px',   // Add margin around each icon
    color: '#007bff',  // Change the icon color
    marginRight: '-120px',
    marginTop:'-30px',
    gap:'10px',
  };
  const icon2Style = {
    color: 'white',
  margin: '0 10px',
  cursor: 'pointer',
  justifyContent: 'right',
  
  };
  const bannerstyle= {
    height: '500px',
    width: '100%',
    borderRadius: '0px',
  };
  const h0style = {
    fontSize: '2em',
    textAlign: 'center',
    margin: '100px',
    color: '#333',
    padding: '0px',
    borderRadius: '8px',
    display: 'relative',
    
  };
 
  const reviewstyle = {
    display: 'flex',    
    maxWidth: '60%',
    top:'100px',
    maxHeight: '1000px', // Adjust this value to your desired image height
    objectFit: 'cover', // Ensure the image covers the area
    marginTop:'500px',
    justifyContent: 'center',

    
  };

 
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
      
      <div>
        <img style={bannerstyle} src="https://images.unsplash.com/photo-1709054952657-10693ad8132c?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner Photo" />
      </div>
      

      

     

      <div style={mainContentStyle}>
        <div style={tourPackagesStyle}>
         
          <h2 style={h12Style}>Tour Packages</h2>
          <div style={packageOptionsStyle}>


            <Link to="/Days6" style={packageStyle}>
            <h4>Sri Lanka 6 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1683647986987-bcd7c320f3a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 1" style={packageImgStyle} />
              <h4 style={h42Style}>Days 6</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
                
            </Link>

            <Link to="/Days8" style={packageStyle}>
            <h4>Sri Lanka 8 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1604293679030-7cfcd7174ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 2" style={packageImgStyle} />
              <h4 style={h42Style}>Days 8</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
            </Link>

            <Link to="/Days10" style={packageStyle}>
            <h4>Sri Lanka 10 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1562827246-cc429d3bcf6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 3" style={packageImgStyle} />
              <h4 style={h42Style}>Days 10</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
            </Link>

            <Link to="/Days12" style={packageStyle}>
            <h4>Sri Lanka 12 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1526785436213-c732dac778b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHNyaSUyMGxhbmthJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D" alt="Package 4" style={packageImgStyle} />
              <h4 style={h42Style}>Days 12</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
            </Link>
            
            <Link to="/Days15" style={packageStyle}>
            <h4>Sri Lanka 15 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1580910531902-1112518b26ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzcmklMjBsYW5rYSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Package 5" style={packageImgStyle} />
              <h4 style={h42Style}>Days 15</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
            </Link>

            <Link to="/Days18" style={packageStyle}>
            <h4>Sri Lanka 18 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1527248709254-0f1a6b5d297a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxzcmklMjBsYW5rYSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Package 6" style={packageImgStyle} />
              <h4 style={h42Style}>Days 18</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
            </Link>

            <Link to="/Days182" style={packageStyle}>
            <h4>Sri Lanka 18 Days North &South Round Tour</h4>
              <img src="https://images.unsplash.com/photo-1684758404779-388d63ffafb4?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Package 7" style={packageImgStyle} />
              <h4 style={h42Style}>Days 18</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
            </Link>

            <Link to="/Days20" style={packageStyle}>
            <h4>Sri Lanka 20 Days Tour</h4>
              <img src="https://images.unsplash.com/photo-1697375877233-9d44fa4f68c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxzcmklMjBsYW5rYSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D" alt="Package 8" style={packageImgStyle} />
              <h4 style={h42Style}>Days 20</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="2x" />
              <FontAwesomeIcon  icon={faUtensils} size="2x" />
              <FontAwesomeIcon  icon={faCar} size="2x" />  
              </div>
            </Link> <br /><br />
            <p style={desstyle}>We offer both cars and vans to suit your preferences. We recommend cars for couples and vans for small groups, but your choice always comes first. All our vehicles are fully air-conditioned to ensure a comfortable and safe ride. Our partner hotels provide great comfort, excellent food, and high-standard services. We strive to deliver the best experience to ensure you have a highly satisfactory tour with us.

Tour PackagesWe offer flexible and engaging packages designed to help you enjoy and relax during your stay in Sri Lanka. Our packages are reasonably priced and include very comfortable hotels and meals tailored to your preferences.</p>
          </div>
          <br /><br /><br />
          <Link to="/BookingForm" style={{...bookbuttonstyle,':hover':hoverStyle}}>
          Book Now !
            </Link> 
            
            
            <div style={fb1style}>
            <h1 style={h0style}>Our Facbook Rewiews</h1>
              <Link to="" >
            
                  <img src="/Photos/ABC.png" alt='Facebook Review Page'/>
            
              </Link>
            
              <h1 style={h0style}>Our Facbook Rewiews</h1>
              
              <img src="/Photos/review.gif" alt="Our Customers Feedbacks" />
            </div>


            
           <div style={fbstyle}>

          <button
          onClick={handleToggleForm}
          style={{
            position: 'fixed',
            top: '200px',
            right: '00px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            zIndex: '1000',
          }}
        >
          
          {isformvisible ? <FontAwesomeIcon  icon={faEnvelopeOpen} size="2x" /> : <FontAwesomeIcon  icon={faEnvelope} size="2x" />} <br /> Contact US
        </button>
          <form style={formStyle}  onSubmit={handleSubmit}>
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
          <button type="submit" style={buttonStyle}>Inquiry</button>
        </form> 
            
            </div> 
           
        
        </div>
        
       
        

        
      </div>
      
      
      

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

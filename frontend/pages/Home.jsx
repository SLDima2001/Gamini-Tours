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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width:'100%',
    
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
    height: '120px',
    width:'120px',
    marginTop: '0px',
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
    width: 'auto',
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
    width: 'auto',
    height: '120px',
    padding: '10px 0px 0px  ',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
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
    gap: '0px', // Adds space between buttons
  };
  
  




  const mainContentStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    marginTop: '50px', // To compensate for fixed header height
    width:'auto',
  };

  const tourPackagesStyle = {
    flex: '6',
    backgroundColor: '',
    padding: '50px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
    maxWidth: '90%',
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
    fontFamily:'Great Vibes',
    fontSize: '4em',
    margin: '0',
    color: '#4682B4',
    padding: '20px',
    borderRadius: '40px',
    display: 'inline-block',
    border:'2px solid blue',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)',
  };
  const desstyle = {
    fontFamily:'Vinque',
    fontSize: '1.2em',
    margin: '0px',
    color: '#333',
    padding: '10px',
    borderRadius: '8px',
    maxWidth: 'auto',
    marginTop:'100px',

    

  }

  const packageOptionsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginTop:'40px',
    //border:'2px solid blue',
    padding:'50px',
    //boxShadow: '0px 4px 8px rgba(0, 0, 0, 1)',
    borderRadius:'30px',
    marginBottom:'50px',
  };

  const packageStyle = {
    textAlign: 'center',
    fontSize:'15px',
    backgroundColor: '',
    padding: '20px ',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 1, 1, 1)',
    width: isMobile ? '100%' : 'auto', // Adjust width for mobile and PC views
    height:'auto',
    borderColor:'',
  };

  const fbstyle= {
    height: '220px',
    width: '700px',
    borderRadius: '0px',
    justifyContent: 'center',
    padding: '0px',
    paddingTop: '100px',
    marginLeft: '',
    display:''
  };
  const fb1style= {
    height: '0%',
    width: 'auto',
    borderRadius: '0px',
    justifyContent: 'center',
    padding: '0px',
    paddingTop: '100px',
    display:'inline-block'
    
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
    backgroundColor:'',
    textAlign: 'left',
    width: '60px',
    
  };

  const formStyle = {
    flex: '1',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '',
    border: '2px solid #3498db',
    boxShadow: '0 4px 8px rgba(1, 1, 1, 1)',
    maxWidth: 'auto',
    fontFamily: 'Arial, sans-serif',
    position: 'fixed',
    top: '180px', // To align with the header
    bottom:'10px',
    display: isformvisible ? 'block' : 'none', // Show/hide based on state
    right: '20px',
    zIndex: '999',
    maxHeight:'auto',
    marginRight: '103px',
    '@media (max-width: 768px)': {
      display: 'none',
    },
    '@media (max-height: auto)': {
      display: 'none',
    },
    
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
    backgroundColor: '#4682B4',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
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
  const bookbuttonstyle2 = {
    display: '',
    backgroundColor: '#4682B4',
      color: 'white',
      padding: '20px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.6em',
      marginTop: '0px',
      
    
  };
  const hoverStyle = {
    backgroundColor: '#0056b3',
    transform: 'scale(1)',
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

  const handleToggleForm = () => {
    setisformvisible(!isformvisible);
  };
  const iconStyle = {
    fontSize: '1.0em',  // Adjust the font size
    margin: '20px',   // Add margin around each icon
    color: '#007bff',  // Change the icon color
    marginRight: '-120px',
    marginTop:'-20px',
    gap:'10px',
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
 
  const pricestyle = {
   fontSize:'1.4em',

    
  };
  
 
  return (
    <div style={appStyle}>
      <div style={header1style} >
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

            
      </div>
      

      <div style={headerStyle}>
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
  <div style={{ marginRight: '',marginTop:'',width:'auto' }}> {/* Right-aligned content */}
  <Link to="/BookingForm" style={bookbuttonstyle}>
  <b>Book Now</b>
            </Link> 
  </div>
  
  
</div>
        
        
        
      </div>
      
      <div>
        <img style={bannerstyle} src="/src/Photos/banner.gif" alt="Banner Photo" />
      </div>
      

      

     

      <div style={mainContentStyle}>
        <div style={tourPackagesStyle}>

          
         <p style={{fontSize:'1em',fontFamily:'Agraham',width:'auto'}}><b>
          
          <p style={{fontSize:'2em',}}>Welcome to Lahiru Tours</p></b><br />
<p>At Lahiru Tours, we pride ourselves on being more than just a travel agency. As a family-run business, we bring a personal touch and heartfelt dedication to every journey we plan. Our passion for travel and commitment to exceptional customer service stem from our deep love for Sri Lanka, and we are eager to share its wonders with you.</p>

<p><br /><b>Our Story </b><br />
Lahiru Tours was founded in <b>1996</b> by Gamini with the vision of providing unique, memorable travel experiences that highlight the rich culture, history, and natural beauty of Sri Lanka. As Gamini’s family, we have explored every corner of this beautiful island, gaining insights and knowledge that we now use to create perfect travel itineraries for our guests.</p>

<br /></p>
         
          <h2 style={h12Style}><b>Tour Packages</b></h2>
          <div style={packageOptionsStyle}>

            <a style={packageStyle} href="/Days6">
            
            <h4>Sri Lanka 6 Days Tour</h4> <br />
            
              <img src="/src/Photos/Day6.gif" alt="Package 1" style={packageImgStyle} />
              
              <h4 style={h42Style}>Days 6</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              
              </div>  <h1 style={pricestyle}>Price £1,488 P\P</h1>
            
            </a>

            <a style={packageStyle} href="/Days8">
            
            <h4>Sri Lanka 8 Days Tour</h4><br />
              <img src="/src/Photos/Day8.gif" alt="Package 2" style={packageImgStyle} />
              <h4 style={h42Style}>Days 8</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              </div><h1 style={pricestyle}>Price £2,049 P\P</h1>
            
            </a>

            <a style={packageStyle} href="/Days10">
            <h4>Sri Lanka 10 Days Tour</h4><br />
              <img src="/src/Photos/Day10.gif" alt="Package 3" style={packageImgStyle} />
              <h4 style={h42Style}>Days 10</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              </div><h1 style={pricestyle}>Price £2,514 P\P</h1>
            </a>


            <a style={packageStyle} href="/Days12">
            
            <h4>Sri Lanka 12 Days Tour</h4><br />
              <img src="/src/Photos/Day12.gif" alt="Package 4" style={packageImgStyle} />
              <h4 style={h42Style}>Days 12</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              </div><h1 style={pricestyle}>Price £3,016 P\P</h1>
            
            </a>



            <a style={packageStyle} href="/Days15">
           
            <h4>Sri Lanka 15 Days Tour</h4><br />
              <img src="/src/Photos/Day15.gif" alt="Package 5" style={packageImgStyle} />
              <h4 style={h42Style}>Days 15</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              </div><h1 style={pricestyle}>Price £3,701 P\P</h1>
            
            </a>


            <a style={packageStyle} href="/Days18">
           
            <h4>Sri Lanka 18 Days Tour</h4><br />
              <img src="/src/Photos/Day18.gif" alt="Package 6" style={packageImgStyle} />
              <h4 style={h42Style}>Days 18</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              </div><h1 style={pricestyle}>Price £4,425 P\P</h1>
           
            </a>


            <a style={packageStyle} href="/Days182">
            
            <h4>Sri Lanka 18 Days North &South Round Tour</h4>
              <img src="/src/Photos/Day18n.gif" alt="Package 7" style={packageImgStyle} />
              <h4 style={h42Style}>Days 18</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              </div><h1 style={pricestyle}>Price £4,595 P\P</h1>
           
            </a>


            <a style={packageStyle} href="/Days20">
            
            <h4>Sri Lanka 20 Days Tour</h4><br />
              <img src="/src/Photos/Day20.gif" alt="Package 8" style={packageImgStyle} />
              <h4 style={h42Style}>Days 20</h4>
              <div style={iconStyle}>
              <FontAwesomeIcon  icon={faBed} size="1x" />
              <FontAwesomeIcon  icon={faUtensils} size="1x" />
              <FontAwesomeIcon  icon={faCar} size="1x" />  
              </div><h1 style={pricestyle}>Price £4,883 P\P</h1>
            
            </a>
            </div>
            <div style={{fontSize:'2em',fontSmooth:'100px',backgroundColor:'',color:'#4682B4'}}>
            Special Discount for Couples! <a style={{color:'#4682B4',fontSize:'1em'}} href="/TourPackages"><u>For more Info</u></a>

            </div><br />

            <div><br /><br />
            <p><p style={{fontSize:'30px'}}> <b> Why Choose Lahiru Tours?</b></p><br />
            <p style={{fontSize:'1.2em'}}>
<b>Personal Touch:</b> As a family-run business, we treat every guest as an extension of our family. This means you receive personalized service and attention to detail that larger companies can't offer. <br />
<b>Expert Knowledge:</b> Our extensive local knowledge allows us to craft unique itineraries that showcase the best of Sri Lanka. Whether it's hidden gems or popular landmarks, we ensure your experience is authentic and enriching.<br />
<b>Passionate Team:</b> Our team consists of family members and close friends who share a passion for travel and hospitality. We are committed to providing warm, friendly, and professional service to make your trip unforgettable.<br />
<b>Customized Experiences:</b> We understand that every traveler is unique. That's why we offer tailor-made tours that cater to your interests, preferences, and pace. Whether you're seeking adventure, relaxation, or cultural immersion, we design the perfect trip for you.<br />
<b>Sustainable Tourism:</b> As locals, we are committed to preserving the natural beauty and cultural heritage of Sri Lanka. We support eco-friendly practices and promote responsible tourism to ensure that future generations can enjoy the wonders of our island.</p><br />
<h1><b><p style={{fontSize:'30px'}}>Our Services</p></b></h1>
<p style={{fontSize:'1.2em'}}><b>Custom Tours:</b> Personalized itineraries designed to suit your interests and needs. <br />
<b>Cultural Excursions:</b> Explore Sri Lanka’s rich history and heritage with knowledgeable guides.<br />
<b>Adventure Trips:</b> From surfing and hiking to wildlife safaris, experience thrilling adventures.<br />
<b>Family Vacations:</b> Fun and engaging activities for travelers of all ages.<br />
<b>Luxury Travel:</b> Enjoy the finest accommodations and exclusive experiences. <br /><br />
Join the Lahiru Tours Family
Embark on a journey with Lahiru Tours and discover the true essence of Sri Lanka. Let our family take care of yours, and create memories that will last a lifetime. We look forward to welcoming you to our beautiful island and providing you with an exceptional travel experience.</p>

<br /><p style={{fontSize:'1.3em'}}>Contact Us Today

Lahiru Tours – Where Family, Passion, and Adventure Meet!</p></p>
            </div>
            
             <br /><br />
            <p style={desstyle}>We offer both cars and vans to suit your preferences. We recommend cars for couples and vans for small groups, but your choice always comes first. All our vehicles are fully air-conditioned to ensure a comfortable and safe ride. Our partner hotels provide great comfort, excellent food, and high-standard services. We strive to deliver the best experience to ensure you have a highly satisfactory tour with us.

Tour PackagesWe offer flexible and engaging packages designed to help you enjoy and relax during your stay in Sri Lanka. Our packages are reasonably priced and include very comfortable hotels and meals tailored to your preferences.</p>
          



          <br /><br /><br />
          <div>
          <Link to="/BookingForm" style={{...bookbuttonstyle2,':hover':hoverStyle}}>
          Book Now !
            </Link> 
            </div>
            
            <div style={fb1style}>
              
            <h1 style={{h0style , fontSize:'3em',top:'50px'}}>Our Facbook Rewiews</h1>
              <Link to="https://www.facebook.com/profile.php?id=100054495458742&mibextid=ZbWKwL" >
            
                  <img src="/src/Photos/FB.png" alt='Facebook Review Page'/>
            
              </Link>
              
              
            <br /><br /><br /><br /><br /><br /><br /><br />
              <h1 style={{h0style , fontSize:'3em',top:'50px'}}>Our Facbook Rewiews</h1>
              
              <img style={{width:'100%'}} src="/src/Photos/review.gif" alt="Our Customers Feedbacks" />
              
            </div>
    

            
           <div style={fbstyle}>

          <button
          onClick={handleToggleForm}
          style={{
            position: 'fixed',
            top: '200px',
            right: '00px',
            backgroundColor: '#4682B4',
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
           </u>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

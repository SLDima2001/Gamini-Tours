import React, { useState, useEffect } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    selectedPackage: '',
    persons: 1,
    fromDate: '',
    toDate: '',
  });

  const [packages, setPackages] = useState([
    { id: 1, name: '6 Days', price: 100 },
    { id: 2, name: '8 Days', price: 150 },
    { id: 3, name: '10 Days', price: 200 },
    { id: 4, name: '12 Days', price: 250 },
    { id: 5, name: '15 Days', price: 300 },
    { id: 6, name: '18 Days', price: 350 },
    { id: 7, name: '18 Days', price: 350 },
    { id: 8, name: '20 Days', price: 400 },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [timePeriod, setTimePeriod] = useState('');

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e0f7fa',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const headerStyle = {
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#ADD8E6',
    color: 'black',
  };

  const logoImgStyle = {
    height: '80px',
    marginRight: '20px',
  };

  const h1Style = {
    fontSize: '2em',
    margin: '0',
    color: '#333',
  };

  const paraStyle = {
    color: 'black',
  };

  const contactInfoStyle = {
    marginLeft: 'auto',
  };

  const mainContentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: '1',
    padding: '20px',
    backgroundColor: '#ffffff',
  };

  const formContainerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0)',
    backgroundColor: '#f3f3f3',
    fontSize: '1.3em',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    fontSize: '1em',
  };

  const buttonStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  };

  const summaryStyle = {
    maxWidth: '300px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    fontSize: '1.3em',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Implement your backend API endpoint for handling form submission
      const response = await fetch(`http://localhost:5555/send-email/form2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book tour');
      }

      // Optionally handle success response
      alert('Booking successful!');
    } catch (error) {
      console.error('Error booking tour:', error);
      // Handle error, show message to user, etc.
      alert('Failed to book tour. Please try again later.');
    }
  };

  const calculateTotal = () => {
    const selectedPackage = packages.find(
      (pkg) => pkg.id === parseInt(formData.selectedPackage)
    );
    if (!selectedPackage) return 0;
    return selectedPackage.price * formData.persons;
  };

  const calculateTimePeriod = () => {
    if (formData.fromDate && formData.toDate) {
      const fromDate = new Date(formData.fromDate);
      const toDate = new Date(formData.toDate);
      const diffTime = Math.abs(toDate - fromDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTimePeriod(`${diffDays} Days`);
    } else {
      setTimePeriod('');
    }
  };

  const incrementPersons = () => {
    setFormData({
      ...formData,
      persons: formData.persons + 1,
    });
  };

  const decrementPersons = () => {
    if (formData.persons > 1) {
      setFormData({
        ...formData,
        persons: formData.persons - 1,
      });
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [formData.selectedPackage, formData.persons]);

  useEffect(() => {
    calculateTimePeriod();
  }, [formData.fromDate, formData.toDate]);

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/path_to_your_logo.jpg" alt="Logo" style={logoImgStyle} />
          <div>
            <h1 style={h1Style}>Booking Form</h1>
            <p style={paraStyle}>Book your dream tour today!</p>
          </div>
        </div>
        <div style={contactInfoStyle}>
          <p>Contact us: info@yourcompany.com | +123 456 7890</p>
        </div>
      </header>

      <div style={mainContentStyle}>
        <div style={formContainerStyle}>
          <h2>Book Your Tour</h2>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
            <select
              name="selectedPackage"
              value={formData.selectedPackage}
              onChange={handleInputChange}
              style={inputStyle}
              required
            >
              <option value="">Select Package</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} - ${pkg.price}
                </option>
              ))}
            </select>
            <div>
              <label>Number of Persons: </label>
              <button type="button" onClick={decrementPersons} style={buttonStyle}>
                -
              </button>
              <span style={{ fontSize: '1.5em', margin: '0 10px' }}>{formData.persons}</span>
              <button type="button" onClick={incrementPersons} style={buttonStyle}>
                +
              </button>
            </div>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              min={getTodayDate()}
              style={inputStyle}
              required
            />
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleInputChange}
              min={formData.fromDate || getTodayDate()}
              style={inputStyle}
              required
            />
            <button type="submit" style={buttonStyle}>
              Book Now
            </button>
          </form>
        </div>
        <div style={summaryStyle}>
          <h3>Summary</h3>
          <p>Package: {formData.selectedPackage}</p>
          <p>Persons: {formData.persons}</p>
          <p>From: {formData.fromDate}</p>
          <p>To: {formData.toDate}</p>
          <p>Time Period: {timePeriod}</p>
          <br />
          <p>Total Amount: ${totalAmount}</p>
        </div>
      </div>

      <footer style={{ padding: '20px', backgroundColor: '#0000FF', color: 'white' }}>
        <div style={{ marginBottom: '20px' }}>
          <h4>Contact Us</h4>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h4>Follow Us</h4>
          <p>Facebook | Twitter | Instagram</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>123 Your Street, Your City, Your Country</p>
        </div>
      </footer>
    </div>
  );
}

export default BookingForm;

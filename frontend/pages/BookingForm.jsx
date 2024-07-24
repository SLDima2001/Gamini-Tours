import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Stripe public key
const stripePromise = loadStripe("pk_test_51Pbr4uRtnVjVgi99iHowxWO26RwsmU19YoADm3iOdfGyPWb9a5whZprGuPv6xv5ssLLddiASMhGKq9YQJu5moFhC004UuUwkRR");

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
    { id: 7, name: '18 Days North &South', price: 370 },
    { id: 8, name: '20 Days', price: 400 },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [timePeriod, setTimePeriod] = useState('');

  // Styles
  const styles = {
    app: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#e0f7fa',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    header: {
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#ADD8E6',
      color: 'black',
    },
    logoImg: {
      height: '80px',
      marginRight: '20px',
    },
    h1: {
      fontSize: '2em',
      margin: '0',
      color: '#333',
    },
    para: {
      color: 'black',
    },
    contactInfo: {
      marginLeft: 'auto',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: '1',
      padding: '20px',
      backgroundColor: '#ffffff',
    },
    formContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '',
      fontSize: '1.3em',
      border: '2px solid #3498db',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      boxSizing: 'border-box',
      fontSize: '1em',
      border: '2px solid #3498db',
    },
    button: {
      backgroundColor: '#333',
      color: 'white',
      padding: '15px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1em',
      marginTop: '10px',
      transition: 'background-color 0.3s ease',
    },
    summary: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '',
      fontSize: '1.3em',
      marginBottom:'20%',
      marginRight:'30%',
      border: '2px solid #3498db',

    },
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const makePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5555/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ totalAmount }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5555/send-email/form2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book tour');
      }

      alert('Booking successful!');
      await makePayment();
    } catch (error) {
      console.alert('Error booking tour:', error);
      alert('Booking failed!');
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

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [formData.selectedPackage, formData.persons]);

  useEffect(() => {
    calculateTimePeriod();
  }, [formData.fromDate, formData.toDate]);

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/Photos/logo.gif" alt="Logo" style={styles.logoImg} />
          <div>
            <h1 style={styles.h1}>Booking Form</h1>
            <p style={styles.para}>Book your dream tour today!</p>
          </div>
        </div>
        <div style={styles.contactInfo}>
          <p></p>
        </div>
      </header>

      <div style={styles.mainContent}>
        <div style={styles.formContainer}>
          <h2>Book Your Tour</h2>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
            <select
              name="selectedPackage"
              value={formData.selectedPackage}
              onChange={handleInputChange}
              style={styles.input}
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
              <button type="button" onClick={decrementPersons}>-</button>
              <span>{formData.persons}</span>
              <button type="button" onClick={incrementPersons}>+</button>
            </div>
            <label>From Date: </label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              min={getTodayDate()}
              style={styles.input}
              required
            />
            <label>To Date: </label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleInputChange}
              min={getTodayDate()}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Book Now
            </button>
           
          </form>
        </div>

        <div style={styles.summary}>
          <h2>Summary</h2>
          <p>Time Period: {timePeriod}</p>
          <p>Total Amount: ${totalAmount}</p>
          
        </div>
      </div>
    </div>
  );
}

export default BookingForm;

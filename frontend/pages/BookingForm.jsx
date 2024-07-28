import React, { useState, useEffect, useRef } from 'react';
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
    agreement: false,
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
  const [showTerms, setShowTerms] = useState(false);
  const modalRef = useRef(null);

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
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#ADD8E6',
      color: 'black',
      position: 'relative',
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
    backButton: {
      position: '',
      height:'50px',
      width:'100px',
      top: '20px',
      left: '20px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1em',
      padding: '10px 15px',
      transition: 'background-color 0.3s ease',
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
      backgroundColor: '#f9f9f9',
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
      borderRadius: '4px',
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
      backgroundColor: '#f9f9f9',
      fontSize: '1.3em',
      marginBottom: '20%',
      marginRight: '30%',
      border: '2px solid #3498db',
    },
    termsContainer: {
      margin: '20px 0',
      textAlign: 'left',
      fontSize: '0.9em',
      borderTop: '1px solid #ddd',
      paddingTop: '10px',
    },
    termsButton: {
      color: '#3498db',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: '1000',
      transition: 'opacity 0.3s ease',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      width: '80%',
      maxWidth: '600px',
      position: 'relative',
      animation: 'fadeIn 0.5s ease-out',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      fontSize: '1.5em',
      cursor: 'pointer',
      color: '#3498db',
    },
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    personButton: {
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.5em',
      padding: '10px 20px',
      margin: '0 5px',
      transition: 'background-color 0.3s ease',
    },
    personCount: {
      fontSize: '1.5em',
      margin: '0 10px',
    },
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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

    if (!formData.agreement) {
      alert('Please agree to the terms before submitting.');
      return;
    }

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
      console.error('Error booking tour:', error);
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
    setFormData((prevData) => ({
      ...prevData,
      persons: prevData.persons + 1,
    }));
  };

  const decrementPersons = () => {
    setFormData((prevData) => ({
      ...prevData,
      persons: Math.max(1, prevData.persons - 1),
    }));
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [formData.selectedPackage, formData.persons]);

  useEffect(() => {
    calculateTimePeriod();
  }, [formData.fromDate, formData.toDate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowTerms(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        
        <div>
          <img
            src="/Photos/logo.gif"
            alt="Logo"
            style={styles.logoImg}
          />
          <div>
            <h1 style={styles.h1}>Booking Form</h1>
            <p style={styles.para}>Book your dream tour today!</p>
          </div>
        </div>
        <div style={styles.contactInfo}>
          <p></p>
        </div>
      </header>
      <button
          type="button"
          onClick={() => window.history.back()}
          style={styles.backButton}
        >
          &larr; Back
        </button>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button type="button" onClick={decrementPersons} style={styles.personButton}>-</button>
              <span style={styles.personCount}>{formData.persons}</span>
              <button type="button" onClick={incrementPersons} style={styles.personButton}>+</button>
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

            {/* Terms and Conditions Button */}
            <div style={styles.termsContainer}>
              <label>
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                />
                I agree to the{' '}
                <button
                  type="button"
                  onClick={() => setShowTerms(true)}
                  style={styles.termsButton}
                >
                  terms and conditions
                </button>
              </label>
            </div>

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

      {/* Modal for Terms and Conditions */}
      {showTerms && (
        <div style={styles.modal}>
          <div ref={modalRef} style={styles.modalContent}>
            <button
              type="button"
              onClick={() => setShowTerms(false)}
              style={styles.closeButton}
            >
              &times;
            </button>
            <h3>Terms and Conditions</h3>
            <p>Please read these terms and conditions carefully before using our service.</p>
            <p>1. Payment Terms: Full payment is required at the time of booking.</p>
            <p>2. Cancellation Policy: Cancellations made within 48 hours of booking are eligible for a full refund. Cancellations made after 48 hours are non-refundable.</p>
            <p>3. Changes to Bookings: Changes to bookings may be made up to 7 days before the start date of the tour.</p>
            <p>4. Liability: We are not liable for any loss or damage to personal property during the tour.</p>
            <p>5. Health and Safety: Ensure you are in good health and fit to travel. We reserve the right to refuse service if we believe it is unsafe.</p>
            <p>6. Governing Law: These terms are governed by the laws of the jurisdiction in which we operate.</p>
            <label>
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
              />
              I agree to these terms and conditions
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;

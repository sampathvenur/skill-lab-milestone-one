// src/components/MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div style={styles.content}>
      <div style={styles.header}>
        <h1>Welcome to Sampy's Portal</h1>
      </div>
      <div style={styles.imageContainer}>
        <img src="/images/land.png" alt="Your Image" style={styles.image} />
      </div>
      <div style={styles.buttonContainer}>
        <h2>Login as</h2>
        <div style={styles.buttonGroup}>
          <Link to="/login" className="nav-link"><button style={styles.button}>Admin</button></Link>
          <Link to="/login" className="nav-link"><button style={styles.button}>Student</button></Link>
          <Link to="/login" className="nav-link"><button style={styles.button}>Parent</button></Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1200px',
    margin: 'auto',
    marginTop: '20px',
  },
  header: {
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: '20px',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: 'linear-gradient(45deg, #ff6b6b, #f94d6a, #c56cd6, #5b86e5)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
};

export default MainPage;

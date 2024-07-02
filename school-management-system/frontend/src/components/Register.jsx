// src/components/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.login}>
      <img src="/images/login-bg.png" alt="login image" style={styles.loginImg} />
      <form className="register__form" style={styles.registerForm}>
        <h1 className="register__title" style={styles.registerTitle}>Register</h1>
        <div className="register__content" style={styles.registerContent}>
          <div className="register__box" style={styles.registerBox}>
            <i className="ri-user-3-line login__icon"></i>
            <div className="register__box-input" style={styles.registerBoxInput}>
              <input type="email" required className="register__input" id="register-email" placeholder=" " style={styles.registerInput} />
              <label htmlFor="register-email" className="login__label" style={styles.loginLabel}>Email</label>
            </div>
          </div>
          <div className="register__box" style={styles.registerBox}>
            <i className="ri-lock-2-line login__icon"></i>
            <div className="register__box-input" style={styles.registerBoxInput}>
              <input type={showPassword ? "text" : "password"} required className="register__input" id="register-pass" placeholder=" " style={styles.registerInput} />
              <label htmlFor="register-pass" className="login__label" style={styles.loginLabel}>Password</label>
              <i className={`ri-eye${showPassword ? "" : "-off"}-line login__eye`} onClick={togglePassword} style={styles.loginEye}></i>
            </div>
          </div>
        </div>
        <button type="submit" className="login__button" style={styles.loginButton}><Link to="/mainpage" style={styles.link}>Register</Link></button>
        <p className="login__register" style={styles.loginRegister}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  login: {
    position: 'relative',
    height: '100vh',
    display: 'grid',
    alignItems: 'center',
  },
  loginImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  registerForm: {
    position: 'relative',
    backgroundColor: 'hsla(0, 0%, 10%, 0.1)',
    border: '2px solid var(--white-color)',
    marginInline: '1.5rem',
    padding: '2.5rem 1.5rem',
    borderRadius: '1rem',
    backdropFilter: 'blur(8px)',
  },
  registerTitle: {
    textAlign: 'center',
    fontSize: 'var(--h1-font-size)',
    fontWeight: 'var(--font-medium)',
    marginBottom: '2rem',
  },
  registerContent: {
    display: 'grid',
    rowGap: '1.75rem',
    marginBottom: '1.5rem',
  },
  registerBox: {
    display: 'grid',
    gridTemplateColumns: 'max-content 1fr',
    alignItems: 'center',
    columnGap: '0.75rem',
    borderBottom: '2px solid var(--white-color)',
  },
  registerBoxInput: {
    position: 'relative',
  },
  registerInput: {
    width: '100%',
    paddingBlock: '0.8rem',
    background: 'none',
    color: 'var(--white-color)',
    position: 'relative',
    zIndex: '1',
  },
  loginLabel: {
    position: 'absolute',
    left: '0',
    top: '13px',
    fontWeight: 'var(--font-medium)',
    transition: 'top 0.3s, font-size 0.3s',
  },
  loginEye: {
    position: 'absolute',
    right: '0',
    top: '18px',
    zIndex: '10',
    cursor: 'pointer',
  },
  loginButton: {
    width: '100%',
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: 'var(--white-color)',
    fontWeight: 'var(--font-medium)',
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  loginRegister: {
    textAlign: 'center',
  },
  link: {
    color: 'var(--white-color)',
    fontWeight: 'var(--font-medium)',
  },
};

export default Register;

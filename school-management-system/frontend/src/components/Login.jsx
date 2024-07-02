import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login" style={{
      position: 'relative',
      height: '100vh',
      display: 'grid',
      alignItems: 'center'
    }}>
      <img src="/images/login-bg.png" alt="login image" className="login__img" style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
      }} />
      <form className="login__form" style={{
        position: 'relative',
        backgroundColor: 'hsla(0, 0%, 10%, 0.1)',
        border: '2px solid var(--white-color)',
        marginInline: '1.5rem',
        padding: '2.5rem 1.5rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(8px)'
      }}>
        <h1 className="login__title" style={{
          textAlign: 'center',
          fontSize: '1.75rem',
          fontWeight: '500',
          marginBottom: '2rem'
        }}>Login</h1>
        <div className="login__content" style={{
          display: 'grid',
          rowGap: '1.75rem',
          marginBottom: '1.5rem'
        }}>
          <div className="login__box" style={{
            display: 'grid',
            gridTemplateColumns: 'max-content 1fr',
            alignItems: 'center',
            columnGap: '0.75rem',
            borderBottom: '2px solid var(--white-color)'
          }}>
            <i className="ri-user-3-line login__icon" style={{
              fontSize: '1.25rem'
            }}></i>
            <div className="login__box-input" style={{
              position: 'relative'
            }}>
              <input type="email" required className="login__input" id="login-email" placeholder=" " style={{
                width: '100%',
                paddingBlock: '0.8rem',
                background: 'none',
                color: 'var(--white-color)',
                position: 'relative',
                zIndex: '1'
              }} />
              <label htmlFor="login-email" className="login__label" style={{
                position: 'absolute',
                left: '0',
                top: '13px',
                fontWeight: '500',
                transition: 'top 0.3s, font-size 0.3s'
              }}>Email</label>
            </div>
          </div>
          <div className="login__box" style={{
            display: 'grid',
            gridTemplateColumns: 'max-content 1fr',
            alignItems: 'center',
            columnGap: '0.75rem',
            borderBottom: '2px solid var(--white-color)'
          }}>
            <i className={`ri-lock-2-line login__icon`} style={{
              fontSize: '1.25rem'
            }}></i>
            <div className="login__box-input" style={{
              position: 'relative'
            }}>
              <input type={showPassword ? "text" : "password"} required className="login__input" id="login-pass" placeholder=" " style={{
                width: '100%',
                paddingBlock: '0.8rem',
                background: 'none',
                color: 'var(--white-color)',
                position: 'relative',
                zIndex: '1'
              }} />
              <label htmlFor="login-pass" className="login__label" style={{
                position: 'absolute',
                left: '0',
                top: '13px',
                fontWeight: '500',
                transition: 'top 0.3s, font-size 0.3s'
              }}>Password</label>
              <i className={`ri-eye${showPassword ? "" : "-off"}-line login__eye`} onClick={togglePassword} style={{
                position: 'absolute',
                right: '0',
                top: '18px',
                zIndex: '10',
                cursor: 'pointer'
              }}></i>
            </div>
          </div>
        </div>
        <div className="login__check" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem'
        }}>
          <div className="login__check-group" style={{
            display: 'flex',
            columnGap: '0.5rem'
          }}>
            <input type="checkbox" className="login__check-input" id="login-check" style={{
              width: '16px',
              height: '16px'
            }} />
            <label htmlFor="login-check" className="login__check-label" style={{
              fontSize: 'var(--small-font-size)'
            }}>Remember me</label>
          </div>
          <Link to="#" className="login__forgot" style={{
            color: 'var(--white-color)'
          }}>Forgot Password?</Link>
        </div>
        <button type="submit" className="login__button" style={{
          width: '100%',
          padding: '1rem',
          borderRadius: '0.5rem',
          backgroundColor: 'var(--white-color)',
          fontWeight: '500',
          cursor: 'pointer',
          marginBottom: '2rem'
        }}><Link to="/mainpage" style={{
          color: 'inherit',
          textDecoration: 'none'
        }}>Login</Link></button>
        <p className="login__register" style={{
          textAlign: 'center'
        }}>
          Don't have an account? <Link to="/register" style={{
            color: 'var(--white-color)',
            fontWeight: '500'
          }}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

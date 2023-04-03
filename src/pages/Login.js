import '../style/Login.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#F25C54';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    setTimeout(() => {
      setLoading(false);
      (user.email === email && user.password === password)
        ? window.location.href = `/books?username=${user.username}`
        : alert('Incorrect email or password');
    }, 1500);
  };

  return (
    <>
      <div className="register-container">
        <div className="box">
          <h1 className="logo">
            Book<span className="color-effect">Stacks</span>
          </h1>
          <h2 className="welcome-message">Welcome Again!</h2>
          <p className="paragraph-after-message">Sign in to Book Stacks</p>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <label>
              <input
                placeholder="Enter a password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <button className="Continue" type="submit">
              {loading ? (
                <div className="loader"></div>
              ) : (
                'Log In'
              )}
            </button>
          </form>
          <p>Forgot your password?</p>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="small-btn">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

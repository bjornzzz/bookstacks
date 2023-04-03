import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../userAction';
import { Link, useNavigate } from 'react-router-dom';

import '../style/Register.css';

function Register() {

  useEffect(() => {
    document.body.style.backgroundColor = '#F25C54';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, email, password };
    dispatch(setUser(user));
    localStorage.setItem('user', JSON.stringify(user));
    navigate(`/books?username=${username}`);
  };
  
  return (
    <div className="register-container">
      <div className="box">
        <h1 className="logo">Book<span className="color-effect">Stacks</span></h1>
        <h2 className="welcome-message">Welcome</h2>
        <p className="paragraph-after-message">Register to Book Stacks</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input placeholder="Enter your username" type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            <input placeholder="Enter your email" type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            <input placeholder="Create a password" type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button className="Continue" type="submit">Register</button>
        </form>
        <p>Already a member? <Link to="/login" className="small-btn">Log In</Link></p>
      </div>
    </div>
  )
}

export default Register;

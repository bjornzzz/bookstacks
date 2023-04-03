import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../style/Nav.css'

function Nav() {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  return (
    <nav className="nav-wrapper">
        <h1 className="logo">Book<span className="color-effect">Stacks</span></h1>
      <div className="search-container">
        <input type="text" placeholder="Search books..." className="search-input" />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
      <div className="nav-right">
        <button className="username">{username}</button>
        <FontAwesomeIcon className="shopping-cart" icon={faShoppingCart} />
      </div>
    </nav>
  )
}

export default Nav;

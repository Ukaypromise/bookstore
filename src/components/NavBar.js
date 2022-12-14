import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/NavBar.css';
import user from '../images/user.svg';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink className="logo" to="/">
          Ubani Bookstore
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/Categories"
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <NavLink
      className={({ isActive }) => (isActive ? 'active' : '')}
      to="/bookstore"
    >
      <figure>
        <img className="user-icon" alt="User settings" src={user} />
      </figure>
    </NavLink>
  </nav>
);

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Navbar({ token, user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🤖 AI Learning Labs
        </Link>
        
        <div className="navbar-menu">
          <Link to="/topics" className="nav-link">Topics</Link>
          <Link to="/neural-network-lab" className="nav-link">Neural Network Lab</Link>
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
          {token && user ? (
        <>
          <span className="nav-link">👤 {user.name}</span>
          <Link to="/profile" className="nav-link">Profile</Link>
          <button onClick={onLogout} className="nav-link logout-btn">Logout</button>
        </>
      ) : (
        <>
          <Link to="/" className="nav-link">Login</Link>
        </>
      )}
    </div>
  </div>
</nav>
);
}

export default Navbar;
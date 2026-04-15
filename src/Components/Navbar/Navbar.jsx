import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const logout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <div>
      <nav>
        <div className="nav__logo">
          <a href="/">
            StayHealthy<span>.</span>
          </a>
        </div>

        <div className="nav__icon" onClick={handleClick}>
          <i className={isActive ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <ul className={`nav__links ${isActive ? "active" : ""}`}>
          <li className="link"><a href="/">Home</a></li>
          <li className="link"><a href="/appointment">Appointments</a></li>
          <li className="link"><a href="/reviews">Reviews</a></li>
          {sessionStorage.getItem("auth-token") ? (
            <>
              <li className="link" style={{position: 'relative'}}>
                <a href="#">Welcome, {sessionStorage.getItem("name")} ▾</a>
                <div className="dropdown">
                  <a href="/profile">Your Profile</a>
                  <a href="/reports">Your Reports</a>
                </div>
              </li>
              <li className="link">
                <button className="btn1" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="link">
                <a href="/signup"><button className="btn1">Sign Up</button></a>
              </li>
              <li className="link">
                <a href="/login"><button className="btn1">Login</button></a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
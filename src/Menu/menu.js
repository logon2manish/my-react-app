import React from 'react';
import './menu.css'; // Import the CSS file

function menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item"><a href="#stock-management">STOCK MANAGEMENT</a></li>
        <li className="menu-item"><a href="#customers">CUSTOMERS</a></li>
        <li className="menu-item"><a href="#vendors">VENDORS</a></li>
        <li className="menu-item"><a href="#invoicing">INVOICING</a></li>
        <li className="menu-item"><a href="#finance">FINANCE</a></li>
        <li className="menu-item"><a href="#staff">STAFF</a></li>
        <li className="menu-item"><a href="#tracker">TRACKER</a></li>
        <li className="menu-item"><a href="#logout">LOGOUT</a></li>
      </ul>
    </nav>
  );
};

export default menu;

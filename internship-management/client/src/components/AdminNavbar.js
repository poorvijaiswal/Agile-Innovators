import React from 'react';
import './styles/Navbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul>
        <li><a href="#students">Manage Students</a></li>
        <li><a href="#reports">Manage Reports</a></li>
        <li><a href="#analytics">View Analytics</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;

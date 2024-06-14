// src/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 min-h-screen">
      <div className="text-2xl font-bold mb-6">swiftHire</div>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <span className="material-icons">home</span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <span className="material-icons">person</span>
            <span>My Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <span className="material-icons">logout</span>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 min-h-screen">
      <div className="text-2xl font-bold mb-6">swiftHire</div>
      <ul className="space-y-4">
        <li>
          <Link to="/Home" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <span className="material-icons">HOME</span>
            
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <span className="material-icons">MY PROFILE</span>
         
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <span className="material-icons">LOGOUT</span>
           
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

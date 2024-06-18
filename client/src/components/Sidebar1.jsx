import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 min-h-screen">
      <div className="text-2xl font-bold mb-6">swiftHire</div>
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <span className="material-icons">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <span className="material-icons">Jop posted</span>
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <span className="material-icons">View Applicants</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

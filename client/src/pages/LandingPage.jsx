import React from 'react';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-4 m-4 flex max-w-3xl">
          <div className="flex flex-col justify-center items-center bg-white p-4 border-r border-gray-300">
            <h2 className="text-l font-bold mb-2">You are a:</h2>
            <Link to="/student-login">
              <button className="w-40 py-2 mb-2 bg-purple-600 text-white rounded-full text-md hover:bg-purple-700">Student</button>
            </Link>
            <Link to="/recruiter-login">
              <button className="w-40 py-2 bg-black text-white rounded-full text-md hover:bg-gray-800">Recruiter</button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-900 text-white p-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">Welcome To swiftHire</h1>
            <p className="text-sm text-center">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

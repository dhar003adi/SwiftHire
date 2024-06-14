// src/ProfilePage.js
import React from 'react';
import Sidebar from './Sidebar';

const ProfilePage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen text-gray-800">
      <Sidebar />
      <div className="flex-grow p-6 space-y-6">
        {/* First Card */}
        <div className="card lg:card-side bg-white shadow-xl rounded-lg overflow-hidden">
          <figure className="p-6 bg-gray-100">
            <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full w-32 h-32 lg:w-48 lg:h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">John J.</h2>
            <p className="text-xl text-gray-600">BCA</p>
          </div>
        </div>

        {/* Second Card */}
        <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="card-body space-y-4 p-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email ID:</span>
              </label>
              <p>user@user.com</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Phone Number:</span>
              </label>
              <p>655535556</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Address:</span>
              </label>
              <p>gsdgssd</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Current Backlog:</span>
              </label>
              <p>2</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">CGPA:</span>
              </label>
              <p>8.5</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">About:</span>
              </label>
              <p>eysgsdggsd abhi</p>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

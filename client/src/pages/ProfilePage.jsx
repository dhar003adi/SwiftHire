import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileCard from './Component/ProfileCard';


const ProfilePage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen text-gray-800">
      <Sidebar/>
      <div className="flex-grow p-6 space-y-6">
        {/* First Card */}
       <ProfileCard/>

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

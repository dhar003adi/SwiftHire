import React from 'react';

const ProfileCard = ({name}) => {
  return (
    <div className="card lg:card-side bg-white shadow-xl rounded-lg overflow-hidden">
    <figure className="p-6 bg-gray-100">
      <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full w-32 h-32 lg:w-48 lg:h-48" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-3xl font-bold">{name}</h2>
      <p className="text-xl text-gray-600">BCA</p>
    </div>
  </div>
  );
}

export default ProfileCard;

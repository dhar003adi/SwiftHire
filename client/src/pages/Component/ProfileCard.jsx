import React from 'react';

const ProfileCard = ({name}) => {
  return (
    <div className="card lg:card-side bg-white shadow-xl rounded-lg overflow-hidden">
    <figure className="p-6 bg-gray-100">
      <img src="https://img.freepik.com/premium-photo/colorful-circle-with-man-circle-with-rainbow-colored-circle-around-his-neck_745528-17199.jpg?w=740" alt="Profile" className="rounded-full w-32 h-32 lg:w-48 lg:h-48" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-3xl font-bold">{name}</h2>
      <p className="text-xl text-gray-600">BE</p>
    </div>
  </div>
  );
}

export default ProfileCard;

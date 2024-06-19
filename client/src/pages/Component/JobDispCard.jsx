import React from "react";

const JobDispCard = ({ company, job }) => {
  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden m-4 w-full h-40 flex-shrink-0">
      <div className="card-body flex flex-col justify-center p-4">
        <h2 className="card-title text-2xl font-bold">{company}</h2>
        <p className="text-lg text-gray-600">{job}</p>
      </div>
    </div>
  );
};

export default JobDispCard;

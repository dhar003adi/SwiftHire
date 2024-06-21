import React from "react";

const JobDispCard = ({ company, job, skillReq, ctc, aboutcompany, branch }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full h-auto flex-shrink-0 transform transition-transform hover:scale-105">
      <div className="card-body flex flex-col justify-center p-6">
        <h2 className="card-title text-3xl font-bold text-gray-800 mb-2 font-sans">{company}</h2>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">Description:</span> {job}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">Skill Required:</span> {skillReq}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">Branches Allowed:</span> {branch}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">CTC Offering:</span> {ctc}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">About Company:</span> {aboutcompany}
        </p>
      </div>
    </div>
  );
};

export default JobDispCard;

import React from "react";
import Sidebar from "./Sidebar1";

const AddJob = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-800 text-white text-center">
            <h2 className="text-lg font-semibold">Enter Job Details</h2>
          </div>
          <div className="px-6 py-4">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="companyname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="companyname"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Company Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="aboutcompany"
                  className="block text-sm font-medium text-gray-700"
                >
                  About Company <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="aboutcompany"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Describe the company"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="jobdescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="jobdescription"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Describe the Job"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="branches"
                  className="block text-sm font-medium text-gray-700"
                >
                  Branches <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="branches"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Allowed Branches"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ctc"
                  className="block text-sm font-medium text-gray-700"
                >
                  CTC <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="ctc"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter CTC"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="skillreq"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skill Requirements <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="skillreq"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Requirements"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="noOfRounds"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number of Rounds <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="noOfRounds"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Number of Rounds"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;

import React from "react";
import Sidebar1 from "./Sidebar1";

const AddJob = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar1 />
      <div className="flex flex-1 justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-800 text-white text-center">
            <h2 className="text-lg font-semibold">Enter Job Details</h2>
          </div>
          <div className="px-6 py-4">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Job Title"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="jobOverview"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Overview <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="jobOverview"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Job Overview"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="responsibilities"
                  className="block text-sm font-medium text-gray-700"
                >
                  Responsibilities <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="responsibilities"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Responsibilities"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="requirements"
                  className="block text-sm font-medium text-gray-700"
                >
                  Requirements <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="requirements"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Requirements"
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

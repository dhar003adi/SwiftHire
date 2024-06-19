import React from "react";

const UserDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-800 text-white text-center">
          <h2 className="text-lg font-semibold">User Details</h2>
        </div>
        <div className="px-6 py-4">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="USN"
                className="block text-sm font-medium text-gray-700"
              >
                USN <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="USN"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="sem"
                className="block text-sm font-medium text-gray-700"
              >
                Semester <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="sem"
                step="1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cgpa"
                className="block text-sm font-medium text-gray-700"
              >
                CGPA <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="cgpa"
                step="0.01"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="backlogs"
                className="block text-sm font-medium text-gray-700"
              >
                Number of Active baclogs <span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="backlogs"
                step="1"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Resume <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                id="resume"
                accept=".pdf,.docx"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
  );
};

export default UserDetails;

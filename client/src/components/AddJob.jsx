import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar1";

const AddJob = () => {
  const [formData, setFormData] = useState({
    companyname: "",
    aboutCompany: "",
    jobdescription: "",
    branches: "",
    ctc: "",
    skillreq: "",
    companylink: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admintoken");
    if (!token) {
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/admin/adminPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming you store the token in local storage
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error adding job post:", error);
    }
  };

  console.log(formData);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-1 justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-gray-800 text-white text-center">
            <h2 className="text-lg font-semibold">Enter Job Details</h2>
          </div>
          <div className="px-6 py-4">
            <form onSubmit={handleSubmit}>
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
                  value={formData.companyname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Company Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="aboutCompany"
                  className="block text-sm font-medium text-gray-700"
                >
                  About Company <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="aboutCompany"
                  value={formData.aboutCompany}
                  onChange={handleChange}
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
                  value={formData.jobdescription}
                  onChange={handleChange}
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
                  value={formData.branches}
                  onChange={handleChange}
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
                  value={formData.ctc}
                  onChange={handleChange}
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
                  value={formData.skillreq}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Requirements"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="companylink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Registration Link <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="companylink"
                  value={formData.companylink}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Registration Link"
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

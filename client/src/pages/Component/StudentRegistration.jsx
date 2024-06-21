import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom

const StudentRegistration = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const onChange = async (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const jsonData = await response.json();
      console.log(jsonData);

      if (jsonData.success) {
        localStorage.setItem("token", jsonData.token);
        navigate("/");
      } else {
        if (jsonData.alrex) {
          alert("User already exists. Please login.");
          navigate("/student-login");
        } else {
          alert("Invalid credentials.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-purple-600 text-white text-center">
          <h2 className="text-2xl font-bold">Student Registration</h2>
        </div>
        <div className="px-6 py-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                name="email"
                value={credentials.email}
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                name="password"
                value={credentials.password}
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Already a user?{" "}
              <Link
                to="/student-login"
                className="text-purple-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;

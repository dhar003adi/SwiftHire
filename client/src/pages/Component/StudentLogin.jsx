import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
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

      if (jsonData.success) {
        localStorage.setItem("token", jsonData.token);
        navigate("/");
      } else {
        if (jsonData.dne) {
          alert("User does not exist hence register first");
          navigate("/student-register");
        } else {
          alert("Invalid credentails");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onchange = async (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-purple-600 text-white text-center">
          <h2 className="text-2xl font-bold">Student Login</h2>
        </div>
        <div className="px-6 py-4">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                name="email"
                value={credentials.email}
                type="email"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
                onChange={onchange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                value={credentials.password}
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                onChange={onchange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
            <p className="mt-2 text-sm text-gray-600 text-center">
              New user?{" "}
              <Link
                to="/student-register"
                className="text-purple-600 hover:underline"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

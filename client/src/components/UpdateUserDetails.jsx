import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    email: "",
    phone: "",
    sem: "",
    cgpa: "",
    backlogs: "",
  });
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/profile/getProfile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log(data.profile);
        setProfile(data.profile);
        
        // Populate formData with profile data
        setFormData({
          name: data.profile.name || "",
          usn: data.profile.usn || "",
          email: data.profile.email || "",
          phone: data.profile.phone || "",
          sem: data.profile.sem || "",
          cgpa: data.profile.cgpa || "",
          backlogs: data.profile.backlogs || "",
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    if (token) {
      fetchProfile();
    }
  }, [token]);


  console.log(profile)
  const handleChange = async (e) => {
    // const { id, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [id]: value,
    // }));

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8000/profile/editProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          usn: formData.usn,
          email: formData.email,
          phone: formData.phone,
          sem: formData.sem,
          cgpa: formData.cgpa,
          backlogs: formData.backlogs,
        }),
      });

      const result = await response.json();
      console.log(result);
      if (result) {
        alert("Profile updated successfully");
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };


  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-800 text-white text-center">
          <h2 className="text-lg font-semibold">User Details</h2>
        </div>
        <div className="px-6 py-4">
          <form >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                name="name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="usn"
                className="block text-sm font-medium text-gray-700"
              >
                USN <span className="text-red-600">*</span>
              </label>
              <input
                name="usn"
                type="text"
                id="usn"
                value={formData.usn}
                onChange={handleChange}
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
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
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
                name="phone"
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
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
                name="sem"
                type="number"
                id="sem"
                step="1"
                value={formData.sem}
                onChange={handleChange}
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
                name="cgpa"
                type="number"
                id="cgpa"
                step="0.01"
                value={formData.cgpa}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="backlogs"
                className="block text-sm font-medium text-gray-700"
              >
                Number of Active Backlogs{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                name="backlogs"
                type="number"
                id="backlogs"
                step="1"
                value={formData.backlogs}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="mt-6">
              
              <button
                type="submit"
                onClick={handleUpdate}
                className="w-full bg-gray-800 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Update
              </button>

              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

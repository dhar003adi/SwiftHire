import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ProfileCard from "./Component/ProfileCard";
import { Link } from "react-router-dom";
//import UserDetails from '../components/UserDetails'

const ProfilePage = () => {
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
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen text-gray-800">
      <Sidebar />
      <div className="flex-grow p-6 space-y-6">
        {/* First Card */}
        <ProfileCard name={profile.name} />

        {/* Second Card */}
        <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="card-body space-y-4 p-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">USN:</span>
              </label>
              <p>{profile.usn}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email ID:</span>
              </label>
              <p>{profile.email}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Phone Number:</span>
              </label>
              <p>{profile.phone}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Semester</span>
              </label>
              <p>{profile.sem}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Current Backlog:</span>
              </label>
              <p>{profile.backlogs}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">CGPA:</span>
              </label>
              <p>{profile.cgpa}</p>
            </div>

            <div className="card-actions justify-end mt-4">
              <Link to="/add-user">
                <button className="btn btn-primary">Edit Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

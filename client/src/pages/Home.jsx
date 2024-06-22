import React,{useState,useEffect } from 'react';
import ProfileCard from './Component/ProfileCard';
import JobsCard from './Component/JobsCard';
import Sidebar from '../components/Sidebar';


function Home() {
  const [profile, setProfile] = useState("");
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
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen text-gray-800">
        <Sidebar/>
      <div className="flex-grow p-6 space-y-6">
        <ProfileCard name={profile.name}/>
       
       
        <JobsCard />
      </div>
    </div>
  );
}

export default Home;

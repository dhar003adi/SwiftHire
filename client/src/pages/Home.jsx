import React from 'react';
import ProfileCard from './Component/ProfileCard';
import JobsCard from './Component/JobsCard';
import Sidebar from '../components/Sidebar';


function Home() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen text-gray-800">
        <Sidebar/>
      <div className="flex-grow p-6 space-y-6">
        <ProfileCard/>
       
       
        <JobsCard />
      </div>
    </div>
  );
}

export default Home;

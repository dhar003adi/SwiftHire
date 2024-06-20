import {useState,useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import ProfileCard from './Component/ProfileCard';


const ProfilePage = () => {
  const [profile,setProfile]=useState(null)
  const userId="1";

  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/profile/getProfile/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfile(data.profile);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile()
  },[userId])

  if(!profile){
    return <div>Loading....</div>
  }
  console.log(profile)
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen text-gray-800">
      <Sidebar/>
      <div className="flex-grow p-6 space-y-6">
        {/* First Card */}
       <ProfileCard name={profile.name}/>

        {/* Second Card */}
        <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="card-body space-y-4 p-6">
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
              <p>655535556</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Semester</span>
              </label>
              <p>6</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Current Backlog:</span>
              </label>
              <p>2</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">CGPA:</span>
              </label>
              <p>8.5</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">About:</span>
              </label>
              <p>eysgsdggsd abhi</p>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

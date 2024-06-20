import React,{useState,useEffect} from "react";
import JobDispCard from "./Component/JobDispCard";
import Sidebar from "../components/Sidebar1";


const ViewJob = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/admin/getPost", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming you store the token in local storage
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setJobs(result.posts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);
  console.log(jobs)
  if(loading) return <>loading...</>
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-col items-center p-6 w-full">
        {jobs.map((job, index) => (
          <JobDispCard key={index} company={job.companyname} job={job.jobdescription}  />
        ))}
      </div>
    </div>
  );
};

export default ViewJob;

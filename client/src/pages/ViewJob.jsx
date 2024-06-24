import React, { useState, useEffect } from "react";
import JobDispCard from "./Component/JobDispCard";
import Sidebar from "../components/Sidebar1";

const ViewJob = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/admin/getPost", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("admintoken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setJobs(result.posts);
        setFilteredJobs(result.posts); // Initialize filteredJobs with all jobs
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.companyname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobs]);

  const handleUpdate = (id, updatedData) => {
    const updatedJobs = jobs.map((job) =>
      job._id === id ? { ...job, ...updatedData } : job
    );
    setJobs(updatedJobs);
    setFilteredJobs(
      updatedJobs.filter((job) =>
        job.companyname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  if (loading) return <>loading...</>;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-col items-center p-6 w-full">
        <input
          type="text"
          placeholder="Search by company name"
          className="p-3 mb-4 rounded-lg w-full outline-none border-2 bg-slate-100 border-slate-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredJobs.map((job, index) => (
          <JobDispCard
            key={index}
            id={job._id}
            company={job.companyname}
            job={job.jobdescription}
            aboutcompany={job.aboutCompany}
            branch={job.branches}
            ctc={job.ctc}
            skillReq={job.skillreq}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewJob;

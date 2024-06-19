import React from "react";
import JobDispCard from "./Component/JobDispCard";
import Sidebar from "../components/Sidebar1";
const jobs = [
  { company: "Company A", job: "Software Engineer" },
  { company: "Company B", job: "Data Scientist" },
  { company: "Company C", job: "Product Manager" },
  // Add more jobs as needed
];

const ViewJob = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex flex-col items-center p-6 w-full">
        {jobs.map((job, index) => (
          <JobDispCard key={index} company={job.company} job={job.job} />
        ))}
      </div>
    </div>
  );
};

export default ViewJob;

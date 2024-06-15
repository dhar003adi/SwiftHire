import React, { useState } from 'react';

const JobsCard = () => {
  const [jobs, setJobs] = useState([
    { id: 1, studentName: 'Alex, John J.', jobTitle: 'Sam Hill', companyName: 'Pharetra Sed Hendrerit Foundation' },
  ]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Student Name</th>
            <th className="py-2">Job Title</th>
            <th className="py-2">Company Name</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td className="border px-4 py-2">{job.studentName}</td>
              <td className="border px-4 py-2">{job.jobTitle}</td>
              <td className="border px-4 py-2">{job.companyName}</td>
              <td className="border px-4 py-2"><button className="btn btn-primary">Apply Now</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobsCard;

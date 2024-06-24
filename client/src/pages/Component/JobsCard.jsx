import React, { useState, useEffect } from "react";

const JobsCard = () => {
  const [jobs, setJobs] = useState([]);
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobs.filter((job) =>
    job.companyname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <>loading...</>;

  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by Company Name"
          className="border rounded-lg px-4 py-2 outline-none bg-white text-black"
          style={{ maxWidth: "300px" }} // Example of inline styling
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Company Name</th>
            <th className="py-2">About Company</th>
            <th className="py-2">Job Description</th>
            <th className="py-2">Branches Allowed</th>
            <th className="py-2">CTC</th>
            <th className="py-2">Skilled Required</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job) => (
            <tr key={job.id}>
<<<<<<< Updated upstream
              <td className="border px-4 py-2 w-1">{job.companyname}</td>
              <td className="border px-4 py-2 w-1">{job.aboutCompany}</td>
              <td className="border px-4 py-2 w-1">{job.jobdescription}</td>
              <td className="border px-4 py-2 w-1">{job.branches}</td>
              <td className="border px-4 py-2 w-1">{job.ctc}</td>
              <td className="border px-4 py-2 w-1">{job.skillreq}</td>
              <td className="border px-4 py-2 w-1"><button className="btn btn-primary"><a href={job.companylink}>Apply Now</a></button></td>
=======
              <td className="border px-4 py-2">{job.companyname}</td>
              <td className="border px-4 py-2">{job.aboutCompany}</td>
              <td className="border px-4 py-2">{job.jobdescription}</td>
              <td className="border px-4 py-2">{job.branches}</td>
              <td className="border px-4 py-2">{job.ctc}</td>
              <td className="border px-4 py-2">{job.skillreq}</td>
              <td className="border px-4 py-2">
                <button className="btn btn-primary">
                  <a href={job.companylink}>Apply Now</a>
                </button>
              </td>
>>>>>>> Stashed changes
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsCard;

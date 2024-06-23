import React,{useState,useEffect} from "react";

const JobsCard = () => {
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
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Recommended Jobs</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Company Name</th>
            <th className="py-2">About Company</th>
            <th className="py-2">job description</th>
            <th className="py-2">Branches Allowed</th>
            <th className="py-2">CTC</th>
            <th className="py-2">Skilled required</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td className="border px-4 py-2 w-1">{job.companyname}</td>
              <td className="border px-4 py-2 w-1">{job.aboutCompany}</td>
              <td className="border px-4 py-2 w-1">{job.jobdescription}</td>
              <td className="border px-4 py-2 w-1">{job.branches}</td>
              <td className="border px-4 py-2 w-1">{job.ctc}</td>
              <td className="border px-4 py-2 w-1">{job.skillreq}</td>
              <td className="border px-4 py-2 w-1"><button className="btn btn-primary"><a href={job.companylink}>Apply Now</a></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JobsCard;

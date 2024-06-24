import React from "react";
import UpdateJobModal from "./UpdateModal";

const JobDispCard = ({
  id,
  company,
  job,
  skillReq,
  ctc,
  aboutcompany,
  branch,
}) => {
  const handleUpdate = async (updatedJob) => {
    try {
      const response = await fetch(
        `http://localhost:8000/admin/editPost/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedJob),
        }
      );

      const data = await response.json();
      console.log("Update successful", data);
    } catch (error) {
      console.error("There was an error updating the job!", error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log(id);
      const response = await fetch(
        `http://localhost:8000/admin/deletePost/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      alert("Post deleted");
      console.log("Delete successful", data);
    } catch (error) {
      console.error("There was an error deleting the job!", error);
    }
  };

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full h-auto flex-shrink-0 transform transition-transform hover:scale-105">
      <div className="card-body flex flex-col justify-center p-6">
        <h2 className="card-title text-3xl font-bold text-gray-800 mb-2 font-sans">
          {company}
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">Description:</span>{" "}
          {job}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">Skill Required:</span>{" "}
          {skillReq}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">Branches Allowed:</span>{" "}
          {branch}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">CTC Offering:</span>{" "}
          {ctc}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold text-gray-900">About Company:</span>{" "}
          {aboutcompany}
        </p>
      </div>
      <div className="p-4 flex justify-end space-x-4">
        <UpdateJobModal
          job={{
            id,
            companyname: company,
            jobdescription: job,
            skillreq: skillReq,
            ctc,
            aboutCompany: aboutcompany,
            branches: branch,
          }}
          onUpdate={handleUpdate}
        />
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobDispCard;

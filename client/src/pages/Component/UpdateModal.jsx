import React, { useState } from "react";

const UpdateJobModal = ({ job, onUpdate }) => {
  const [updatedJob, setUpdatedJob] = useState({ ...job });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(updatedJob);
    document.getElementById("update_modal").close();
  };

  return (
    <>
      <button
        className="btn mr-5 border-stone-700 font-bold tracking-wide bg-transparent shadow-md outline-none"
        onClick={() => document.getElementById("update_modal").showModal()}
      >
        Update
      </button>
      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <form
            method="dialog"
            className="flex flex-col tracking-wide"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-2xl font-semibold font-sans my-4">
              Update Job
            </p>
            <div className="label">
              <span className="label-text">Company Name</span>
            </div>
            <input
              type="text"
              name="companyname"
              value={updatedJob.companyname}
              onChange={handleChange}
              className="p-3 rounded-lg w-full outline-none border-2 bg-slate-100 border-slate-700"
            />
            <div className="label">
              <span className="label-text">Job Description</span>
            </div>
            <input
              type="text"
              name="jobdescription"
              value={updatedJob.jobdescription}
              onChange={handleChange}
              className="p-3 rounded-lg w-full outline-none border-2 bg-slate-100 border-slate-700"
            />
            <div className="label">
              <span className="label-text">CTC</span>
            </div>
            <input
              type="text"
              name="ctc"
              value={updatedJob.ctc}
              onChange={handleChange}
              className="p-3 rounded-lg w-full outline-none border-2 bg-slate-100 border-slate-700"
            />
            <div className="label">
              <span className="label-text">Branches</span>
            </div>
            <input
              type="text"
              name="branches"
              value={updatedJob.branches}
              onChange={handleChange}
              className="p-3 rounded-lg w-full outline-none border-2 bg-slate-100 border-slate-700"
            />
            <div className="label">
              <span className="label-text">Skill Required</span>
            </div>
            <input
              type="text"
              name="skillreq"
              value={updatedJob.skillreq}
              onChange={handleChange}
              className="p-3 rounded-lg w-full outline-none border-2 bg-slate-100 border-slate-700"
            />
            <div className="label">
              <span className="label-text">About Company</span>
            </div>
            <input
              type="text"
              name="aboutCompany"
              value={updatedJob.aboutCompany}
              onChange={handleChange}
              className="p-3 rounded-lg w-full outline-none border-2 bg-slate-100 border-slate-700"
            />
            <button
              type="submit"
              className="btn glass my-4 bg-red-700 text-body text-slate-100 hover:bg-red-600"
            >
              Update
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default UpdateJobModal;

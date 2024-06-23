import React from "react";
import hiringImage from "../assets/images/bargraph.png";

const CampusHiring = () => {
  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Campus Hiring</h2>
      <div className="flex flex-row space-x-4">
        <p className="p-10">
          Dayananda Sagar College of Engineering has been working with many
          Companies for more than three decades for Students Internships and
          Placements. More than 100+ Companies have been visiting us every year
          for Campus Placements. We have signed MOU with more than 30+ Companies
          for helping students with projects Internships Industrial visits /
          Research / Placements. We have been achieving record placements over
          the years. The Placement Cell coordinates with recruiting companies
          and handles the entire end to end placement process.
        </p>
        <img
          src={hiringImage}
          alt="Campus Hiring"
          className="rounded-lg shadow-lg w-auto h-80 p-5"
        />
      </div>
    </div>
  );
};

export default CampusHiring;

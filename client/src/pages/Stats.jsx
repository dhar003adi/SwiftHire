import React from "react";
import Sidebar from "../components/Sidebar";
import CampusHiring from "../components/CampusHiring";
import PlacementTestimonials from "../components/PlacementTestimonials";
import CompanyLogos from "../components/CompanyLogos";

function Stats() {
  return (
    <div className="App">
      <div className="flex ">
        <Sidebar />
        <div className="flex flex-col">
          <CampusHiring />
          <PlacementTestimonials />
          <CompanyLogos />
        </div>
      </div>
    </div>
  );
}

export default Stats;

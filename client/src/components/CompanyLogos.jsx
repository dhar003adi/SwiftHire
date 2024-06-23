import React from 'react';
import logosImage from '../assets/images/company.png';

const CompanyLogos = () => {
  return (
    <div className="container mx-auto my-8 p-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Companies</h2>
      <img src={logosImage} alt="Company Logos" className="rounded-lg shadow-lg w-full h-140" />
    </div>
  );
};

export default CompanyLogos;

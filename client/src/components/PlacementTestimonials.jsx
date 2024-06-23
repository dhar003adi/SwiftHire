import React from 'react';
import testimonialImage from '../assets/images/testimonial3.png';

const PlacementTestimonials = () => {
  return (
    <div className="container mx-auto my-8 p-10">
      <h2 className="text-2xl font-bold mb-4 flex w-full justify-center">Placement Testimonials</h2>
      <img src={testimonialImage} alt="Placement Testimonials" className="rounded-lg shadow-lg" />
    </div>
  );
};

export default PlacementTestimonials;

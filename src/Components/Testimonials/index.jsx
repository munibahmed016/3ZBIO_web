import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <h2 className="text-center text-teal-500 text-2xl font-semibold">
        TESTIMONIALS
      </h2>
      <p className="text-center text-gray-800 text-xl mt-2">
        Recommended By Professionals
      </p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {/* Testimonial 1 */}
        <div className="bg-lightblue-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <img src="/path-to-doctor1-image.png" alt="Doctor 1" className="rounded-full w-16 h-16" />
            <div className="ml-4">
              <h3 className="text-teal-500 text-lg font-semibold">Dr. Sitwat Azeem</h3>
              <p className="text-gray-600 text-sm">Director & Chief Consultant (Infertility), Noor Hospital, Khi</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            I am so happy with the product that I purchased from 3ZBio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!
          </p>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-lightblue-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <img src="/path-to-doctor2-image.png" alt="Doctor 2" className="rounded-full w-16 h-16" />
            <div className="ml-4">
              <h3 className="text-teal-500 text-lg font-semibold">Dr. Zara Mahmood</h3>
              <p className="text-gray-600 text-sm">Pharmacist</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            I am so happy with the product that I purchased from 3ZBio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!
          </p>
        </div>
        
        {/* Testimonial 3 */}
        <div className="bg-lightblue-50 p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <img src="/path-to-doctor3-image.png" alt="Doctor 3" className="rounded-full w-16 h-16" />
            <div className="ml-4">
              <h3 className="text-teal-500 text-lg font-semibold">Dr. Noor Muhammad Shujrah</h3>
              <p className="text-gray-600 text-sm">Clinical Therapeutic Nutritionist, Mendocino College, California U.S.A</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            I am so happy with the product that I purchased from 3ZBio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

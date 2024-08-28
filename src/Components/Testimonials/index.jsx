import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Zara from "../../assets/dr-zara.jpg";
import Shujra from "../../assets/dr_shujra.jpg";
import Sitwat from "../../assets/dr_sitwat.jpg";

const TestimonialComponent = () => {
  const [testimonialActive, setTestimonialActive] = useState(2);

  return (
    <div className="antialiased sans-serif bg-gray-200 text-gray-600">
      <div className="my-10 md:my-24 container mx-auto flex flex-col md:flex-row shadow-sm overflow-hidden">
        <div className="relative w-full py-2 md:py-24 bg-indigo-700 md:w-1/2 flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 z-10 grid-indigo w-16 h-16 md:w-40 md:h-40 md:ml-20 md:mt-24"></div>
          
          <div className="relative text-2xl md:text-5xl py-2 px-6 md:py-6 md:px-1 md:w-64 md:mx-auto text-indigo-100 font-semibold leading-tight tracking-tight mb-0 z-20">
            <span className="md:block">What Our</span>
            <span className="md-block">Customers</span>
            <span className="block">Are Saying!</span>
          </div>

          <div className="absolute right-0 bottom-0 mr-4 mb-4 hidden md:block">
            <button 
              className="rounded-l-full border-r bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={() => setTestimonialActive(testimonialActive === 1 ? 3 : testimonialActive - 1)}
            >
              &#8592;
            </button>
            <button 
              className="rounded-r-full bg-gray-100 text-gray-500 focus:outline-none hover:text-indigo-500 font-bold w-12 h-10"
              onClick={() => setTestimonialActive(testimonialActive >= 3 ? 1 : testimonialActive + 1)}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="bg-gray-100 md:w-1/2">
          <div className="flex flex-col h-full relative">
            <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-200 fill-current w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24">
                <path d="M6.5 10c-.223 0-.437.034-.65.065..."/>
              </svg>
            </div>

            <div className="h-full relative z-10">
              {testimonialActive === 1 && (
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                I am so happy with the product that I purchased from 3ZBio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!                </p>
              )}
              {testimonialActive === 2 && (
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                I am so happy with the product that I purchased from 3ZBio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!                </p>
              )}
              {testimonialActive === 3 && (
                <p className="text-gray-600 serif font-normal italic px-6 py-6 md:px-16 md:py-10 text-xl md:text-2xl">
                I am so happy with the product that I purchased from 3ZBio for diabetes, weight loss, and cholesterol. I highly recommend their products and their support team is wonderful!                </p>
              )}
            </div>

            <div className="flex my-4 justify-center items-center">
              <button 
                onClick={() => setTestimonialActive(1)} 
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive !== 1 ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600' : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'}`}
              >
                <img src={Zara} />
              </button>
              <button 
                onClick={() => setTestimonialActive(2)} 
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-16 w-16 inline-block bg-indigo-600 rounded-full mx-2 ${testimonialActive !== 2 ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600' : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'}`}
              >
                <img src={Sitwat} />
              </button>
              <button 
                onClick={() => setTestimonialActive(3)} 
                className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline h-12 w-12 inline-block bg-indigo-600 rounded-full mx-2 ${testimonialActive !== 3 ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600' : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'}`}
              >
                <img src={Shujra} />
              </button>
            </div>

            <div className="flex justify-center px-6 pt-2 pb-6 md:py-6">
              {testimonialActive === 1 && (
                <div className="text-center">
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">DR. Zara Mahmood</h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate">Pharmacist</small>
                </div>
              )}
              {testimonialActive === 2 && (
                <div className="text-center">
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">DR. Sitwat Azeem</h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate"></small>
                </div>
              )}
              {testimonialActive === 3 && (
                <div className="text-center">
                  <h2 className="text-sm md:text-base font-bold text-gray-700 leading-tight">DR. Noor Muhammad Shujrah</h2>
                  <small className="text-gray-500 text-xs md:text-sm truncate">Product Manager, Fake Corp.</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;

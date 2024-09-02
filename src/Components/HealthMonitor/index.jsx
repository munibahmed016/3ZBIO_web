import React from "react";
import BPChecker from "../../assets/multiflex_6in1.png";
import Acuteck from "../../assets/multigx_6in1-2.png";
import Red from "../../assets/ghe-2in1.jpg";
import Orange from "../../assets/guc-3in1.jpg";
import Blue from "../../assets/gke-2in1.jpg";
import Grey from "../../assets/gue-2in1.jpg";
import White from "../../assets/meters-2.png";
import Cholesterol from "../../assets/meters-1.png";

const HealthMonitor = () => {
  return (
    <div className="p-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Track your Health with Ease</h1>
        <p className="text-lg mb-4">Rapid, Reliable, Accurate, and Economical Monitors</p>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition-colors duration-300">Learn More</button>
      </div>

      {/* Chronic Disease Series Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-6">Chronic Disease Series</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Product Cards */}
          {[
            {
              image: Acuteck,
              alt: "Multi 6 in 1 Multi-Monitoring System"
            },
            {
              image: BPChecker,
              alt: "MultiFlex 6 in 1 with BP & Pulse Test"
            }
          ].map((product, index) => (
            <div
              key={index}
              className="group w-full sm:w-1/2 lg:w-1/3 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="overflow-hidden rounded-lg shadow-">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-auto object-contain"
                />
                <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-32 mt-4">Shop now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="flex flex-wrap justify-center gap-2 mt-12">
      {[
        {
          image: Red,
          alt: "3 in 1 - Blood Glucose, Uric Acid, and Total Cholesterol Monitor",
          description: "3 in 1 - Blood Glucose, Uric Acid, and Total Cholesterol Monitor",
        },
        {
          image: Orange,
          alt: "2 in 1 - Blood Glucose and Hemoglobin Monitor",
          description: "2 in 1 - Blood Glucose and Hemoglobin Monitor",
        },
        {
          image: Blue,
          alt: "2 in 1 - Blood Glucose and β-Ketone Monitor",
          description: "2 in 1 - Blood Glucose and β-Ketone Monitor",
        },
        {
          image: Grey,
          alt: "2 in 1 - Blood Glucose and Uric Acid Monitor",
          description: "2 in 1 - Blood Glucose and Uric Acid Monitor",
        },
        {
          image: White,
          alt: "Portable Glycosylated Hemoglobin Analyzer HbA1C Monitor",
          description: "Portable Glycosylated Hemoglobin Analyzer HbA1C Monitor",
        },
        {
          image: Cholesterol,
          alt: "Cholesterol Monitoring System",
          description: "Cholesterol Monitoring System",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="group w-full sm:w-1/2 lg:w-[14.76%] transform hover:-translate-y-2 transition-transform duration-300"
        >
          <div className="overflow-hidden rounded-lg shadow-lg flex flex-col justify-between h-full p-4">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-72 object-contain"
            />
            <p className="mt-4 font-semibold h-16 flex items-center justify-center">
              {product.description}
            </p>
            <div className="flex justify-center mt-4">
              <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 flex items-center gap-2">
                <span>Shop now</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    

    </div>
  );
};

export default HealthMonitor;

import React from "react";
import ChickenGuniya from "../../assets/strep-a.jpg";
import Dengue from "../../assets/hep-b-combo1.jpg";
import Typoid from "../../assets/hep-b-surface-antigen1.jpg";
import Malaria from "../../assets/mycoplasma-pneu.jpg";
import Fertility from "../../assets/Testing-kits_03.png";
import Infactious from "../../assets/Testing-kits_03-02.png";
import Allergen from "../../assets/Testing-kits_03-03.png";
import DrugAbuse from "../../assets/Testing-kits_03-04.png";

const TestingKits = () => {
  return (
    <div className="p-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Convenient Testing Kits</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Fertility Tests */}
          <div className="max-w-xs p-4 bg-white rounded-lg shadow-lg text-center">
            <img src={Fertility} alt="Fertility Tests" className="w-full h-48 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Fertility Tests</h4>
            <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">Shop now</button>
          </div>

          {/* Infectious Disease Tests */}
          <div className="max-w-xs p-4 bg-white rounded-lg shadow-lg text-center">
            <img src={Infactious} alt="Infectious Disease Tests" className="w-full h-48 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Infectious Disease Tests</h4>
            <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">Shop now</button>
          </div>

          {/* Allergen Tests */}
          <div className="max-w-xs p-4 bg-white rounded-lg shadow-lg text-center">
            <img src={Allergen} alt="Allergen Tests" className="w-full h-48 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Allergen Tests</h4>
            <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">Shop now</button>
          </div>

          {/* Drug of Abuse Tests */}
          <div className="max-w-xs p-4 bg-white rounded-lg shadow-lg text-center">
            <img src={DrugAbuse} alt="Drug of Abuse Tests" className="w-full h-48 object-cover mb-4" />
            <h4 className="font-semibold mb-2">Drug of Abuse Tests</h4>
            <button className="bg-white border-2 border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300 w-full mt-2">Shop now</button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-2">Featured Products</h3>
        <p className="text-lg mb-8">Our Best-Selling Testing Kits</p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Product Cards */}
          {[{ image: ChickenGuniya, title: "Chikungunya IgG And IgM Rapid Test" },
            { image: Dengue, title: "Dengue IgG and IgM and NS1 Combo Test" },
            { image: Malaria, title: "Malaria Pf and Pan Rapid Test" },
            { image: Typoid, title: "Typhoid Rapid Test" }].map((product, index) => (
            <div key={index} className="group max-w-xs p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
              <p className="font-semibold mb-2">{product.title}</p>
              <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <button className="bg-teal-500 text-white py-2 px-4 rounded-full m-1">Shop Now</button>
                  <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full m-1">View</button>
                  <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full m-1">View Description</button>
                  <div className="mt-2 text-yellow-500">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestingKits;

import React from "react";
import progestrol from "../../assets/mystery_product_proG_2.png";
import injection from "../../assets/mystery_product_glass_pros.png";
import Golden from "../../assets/mystery_product_glass_pcyj.png";

const FeaturedProducts = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-[#C4A968] text-3xl font-bold">
        World's 1<sup>st</sup> Peptide-Based Diabetes Product
      </h2>
      <p className="text-[#C4A968] text-lg mt-2">
        Revolutionizing Healthcare Now With Innovative Solutions
      </p>
      <p className="text-[#30BBF9] text-lg mt-1">Now Available in Pakistan</p>

      <p className="text-[#30BBF9] text-[12px] mt-1">FEATURED PEPTIDE PRODUCTS</p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="p-4">
          <img src={injection } alt="Product 1" className="mx-auto" />
          <h3 className="text-[#30BBF9] text-xl font-semibold mt-4">Coming Soon</h3>
          <p className="text-gray-600 mt-2">Treat pain, Improve Joint Mobility</p>
        </div>
        
        {/* Product 2 */}
        <div className="p-4">
          <img src={progestrol} alt="Product 2" className="mx-auto" />
          <h3 className="text-[#30BBF9] text-xl font-semibold mt-4">Coming Soon</h3>
          <p className="text-gray-600 mt-2">Reverse Insulin Resistance</p>
        </div>
        
        {/* Product 3 */}
        <div className="p-4">
          <img src={Golden} alt="Product 3" className="mx-auto" />
          <h3 className="text-[#30BBF9] text-xl font-semibold mt-4">Coming Soon</h3>
          <p className="text-gray-600 mt-2">Instantly Repair Damaged Hair</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

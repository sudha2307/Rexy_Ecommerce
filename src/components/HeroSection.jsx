import React from 'react';

const HeroSection = () => {
  return (
 <section className="w-full min-h-[70vh] bg-gradient-to-r from-sky-300 via-indigo-200 to-violet-400 flex items-center justify-center px-4 relative overflow-visible">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 py-10 ">
    
    {/* Text Content */}
    <div className="flex-1 text-center md:text-left space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800">
        Find The Best Product<br />from Our Shop
      </h1>
      <p className="text-gray-600 text-base md:text-lg">
        Designers who are interested in creating state-of-the-art fashion.
      </p>
      <button className="mt-4 px-6 py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-green-600 transition">
        Shop Now
      </button>
    </div>

    {/* Image with head outside */}
    <div className="flex-1 relative">
    <img
  src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png"
  alt="Standing Man"
  className="
    w-full max-w-md max-h-[600px] object-contain mx-auto 
    relative 
    top-[41px] md:top-[40px] 
    md:-mt-[120px]
  "
/>


    </div>
  </div>
</section>


  );
};

export default HeroSection;

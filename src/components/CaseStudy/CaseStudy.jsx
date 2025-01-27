import React from "react";
import CustomSwiper from "../CustomSwiper/CustomSwiper";

const CaseStudy = () => {
  const slides = [
    // Slide 1
    <div key={1} className="w-full h-full flex flex-col md:flex-row items-center justify-center p-4">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] object-cover rounded-lg -mt-8 -ml-8" src="/funnyface.png" alt="" />
        </div>
      </div>
      {/* Description Section */}
      <div className="md:w-1/2 p-4">
        <p className="text-white text-lg mb-4">
          Real Estate transformed our digital presence! Their SEO and ads strategy boosted our traffic and conversions. Highly recommend!
        </p>
        <h1 className="text-2xl font-bold text-white">Helena</h1>
        <p className="text-gray-400">Business Owner</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 mt-6">
          <div>
            <h1 className="text-3xl font-bold text-white">300%</h1>
            <p className="text-gray-400">Organic growth to the blog</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">100+</h1>
            <p className="text-gray-400">Featured Snippets Earned</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">250,000</h1>
            <p className="text-gray-400">New Organic Blog Visitors</p>
          </div>
        </div>
        <div className="mt-6 ml-80">
          <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300">
            View Case Study
          </button>
        </div>
      </div>
    </div>,

    // Slide 2
    <div key={2} className="w-full h-full flex flex-col md:flex-row items-center justify-center p-4">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] object-cover rounded-lg -mt-8 -ml-8" src="/funnyface.png" alt="" />
        </div>
      </div>
      {/* Description Section */}
      <div className="md:w-1/2 p-4">
        <p className="text-white text-lg mb-4">
          The Real Estate team rebranded our business beautifully. We've received so many compliments on our new look. Fantastic work!
        </p>
        <h1 className="text-2xl font-bold text-white">Sarah</h1>
        <p className="text-gray-400">Developer</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 mt-6">
          <div>
            <h1 className="text-3xl font-bold text-white">300%</h1>
            <p className="text-gray-400">Organic growth to the blog</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">100+</h1>
            <p className="text-gray-400">Featured Snippets Earned</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">250,000</h1>
            <p className="text-gray-400">New Organic Blog Visitors</p>
          </div>
        </div>
        <div className="mt-6 ml-80">
          <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300">
            View Case Study
          </button>
        </div>
      </div>
    </div>,

    // Slide 3
    <div key={3} className="w-full h-full flex flex-col md:flex-row items-center justify-center p-4">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2">
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded-lg" src="/cs1.jpg" alt="" />
          <img className="w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] object-cover rounded-lg -mt-8 -ml-8" src="/funnyface.png" alt="" />
        </div>
      </div>
      {/* Description Section */}
      <div className="md:w-1/2 p-4">
        <p className="text-white text-lg mb-4">
          The website Real Estate built is stunning and user-friendly. It's already driving more engagement and sales. Great job!
        </p>
        <h1 className="text-2xl font-bold text-white">Chris P</h1>
        <p className="text-gray-400">Product Manager</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 mt-6">
          <div>
            <h1 className="text-3xl font-bold text-white">300%</h1>
            <p className="text-gray-400">Organic growth to the blog</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">100+</h1>
            <p className="text-gray-400">Featured Snippets Earned</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">250,000</h1>
            <p className="text-gray-400">New Organic Blog Visitors</p>
          </div>
        </div>
        <div className="mt-6 ml-80">
          <button className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition duration-300">
            View Case Study
          </button>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="mt-10 w-full">
      <CustomSwiper slides={slides} />
    </div>
  );
};

export default CaseStudy;

"use client"
import useAnimation from "@/hooks/useAnimation";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from "react-fast-marquee";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <NavBar />

      <div className="bg-base-100 ">
        <section>
          <div
            className="hero min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url(/sectionbgimage.png)" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">Our Services</h1>
                <p className="mb-5">Transforming Ideas into Impactful Solutions</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-base-200 rounded-sm">
          <div className="bg-base-200 w-ful h-2">

          </div>

          <section className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Website Development", "Paid Advertisement", "SEO", "Social Media Post", "Mobile App Development", "Classified Ad Post"].map((service, index) => {
                // Create separate refs for each service
                const upRef = useAnimation("up", 1, 0.25);
                const downRef = useAnimation("down", 1, 0.25);

                return (
                  <div key={index} className='flex flex-col gap-8 items-center text-center'>
                    <h1 ref={downRef} className="text-6xl sm:text-8xl font-bold uppercase text-white drop-shadow-lg shadow-black">
                      {`0${index + 1}.`}
                    </h1>
                    <div ref={upRef} className="-mt-[90px] space-y-8">
                      <p className='font-bold text-lg sm:text-xl drop-shadow-lg'>{service}</p>
                      <p className='text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia aliquam illum culpa!</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="flex items-center justify-center mt-20">
            <img className="h-[75%] rounded-3xl drop-shadow-lg w-[75%]" src="/servicefeaturepng.png" alt="" />
          </section>

          <section className="mt-20">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center ">
                  <p className="font-bold w-[50%]">
                    Real Estate transformed our digital presence! Their SEO and ads strategy boosted our traffic and conversions. Highly recommend!
                  </p>
                  <h5 className="text-xl font-bold mt-4 ">Helena</h5>
                  <p>Business Owner</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center ">
                  <p className="font-bold w-[50%]">
                    Real Estate transformed our digital presence! Their SEO and ads strategy boosted our traffic and conversions. Highly recommend!
                  </p>
                  <h5 className="text-xl font-bold mt-4 ">Helena</h5>
                  <p>Business Owner</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center ">
                  <p className="font-bold w-[50%]">
                    Real Estate transformed our digital presence! Their SEO and ads strategy boosted our traffic and conversions. Highly recommend!
                  </p>
                  <h5 className="text-xl font-bold mt-4 ">Helena</h5>
                  <p>Business Owner</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center ">
                  <p className="font-bold w-[50%]">
                    Real Estate transformed our digital presence! Their SEO and ads strategy boosted our traffic and conversions. Highly recommend!
                  </p>
                  <h5 className="text-xl font-bold mt-4 ">Helena</h5>
                  <p>Business Owner</p>
                </div>
              </SwiperSlide>

            </Swiper>
          </section>

          <section className="mt-10 ">
            <div className="flex items-center justify-center">
              <Swiper className="mySwiper w-[50%] h-[25%]   ">
                <SwiperSlide  >
                  <div className="card lg:card-side flex items-center justify-center   bg-white rounded-2xl drop-shadow-lg   ">

                    <div className="card-body mt-8 space-y-4">
                      <h2 className="card-title">web development </h2>
                      <p className="font-bold">Lorem ipsum dolor sit amet consectetur. Tempus eget ipsum nibh enim convallis nisi quam ultr...</p>


                    </div>
                    <figure>
                      <img src="/servicecardimage.png" alt="Album" />
                    </figure>
                  </div>
                </SwiperSlide>

                <SwiperSlide  >
                  <div className="card lg:card-side flex items-center justify-center   bg-white rounded-2xl drop-shadow-lg   ">

                    <div className="card-body mt-8 space-y-4">
                      <h2 className="card-title">Dev Ops </h2>
                      <p className="font-bold">Lorem ipsum dolor sit amet consectetur. Tempus eget ipsum nibh enim convallis nisi quam ultr...</p>


                    </div>
                    <figure>
                      <img src="/servicecardimage.png" alt="Album" />
                    </figure>
                  </div>
                </SwiperSlide>

                <SwiperSlide  >
                  <div className="card lg:card-side flex items-center justify-center   bg-white rounded-2xl drop-shadow-lg   ">

                    <div className="card-body mt-8 space-y-4">
                      <h2 className="card-title">SEO </h2>
                      <p className="font-bold">Lorem ipsum dolor sit amet consectetur. Tempus eget ipsum nibh enim convallis nisi quam ultr...</p>


                    </div>
                    <figure>
                      <img src="/servicecardimage.png" alt="Album" />
                    </figure>
                  </div>
                </SwiperSlide>

                <SwiperSlide  >
                  <div className="card lg:card-side flex items-center justify-center   bg-white rounded-2xl drop-shadow-lg   ">

                    <div className="card-body mt-8 space-y-4">
                      <h2 className="card-title">Paid Ad </h2>
                      <p className="font-bold">Lorem ipsum dolor sit amet consectetur. Tempus eget ipsum nibh enim convallis nisi quam ultr...</p>


                    </div>
                    <figure>
                      <img src="/servicecardimage.png" alt="Album" />
                    </figure>
                  </div>
                </SwiperSlide>

                <SwiperSlide  >
                  <div className="card lg:card-side flex items-center justify-center   bg-white rounded-2xl drop-shadow-lg   ">

                    <div className="card-body mt-8 space-y-4">
                      <h2 className="card-title">App development </h2>
                      <p className="font-bold">Lorem ipsum dolor sit amet consectetur. Tempus eget ipsum nibh enim convallis nisi quam ultr...</p>


                    </div>
                    <figure>
                      <img src="/servicecardimage.png" alt="Album" />
                    </figure>
                  </div>
                </SwiperSlide>
                <div className="bg-base-200 w-ful h-20">

                </div>


              </Swiper>

            </div>

          </section>
        </div>
      </div>

      <section>

        <div className="mt-20 ml-20 space-y-10">
          <h1 className="text-5xl text-white font-unbounded font-bold drop-shadow-lg shadow-black outline-solid">
            Frequently
          </h1>
          <p className="text-5xl font-unbounded font-bold">Asked Question
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mt-10 px-4 ">
          {/* Accordion Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Accordion 1 */}
            <div className="collapse collapse-plus bg-base-200">
              <input type="checkbox" id="accordion-1" className="peer" />
              <label htmlFor="accordion-1" className="collapse-title text-xl font-medium peer-checked:bg-gray-300">
                How Long Does is take to make a webDevlopment Project
              </label>
              <div className="collapse-content">
                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis porta lacus eget pretium. Integer non ipsum enim. Praesent dapibus sapien dolor, eget pharetra nibh vulputate consectetur. Proin consectetur consectetur nisl, ac lacinia erat porttitor a. </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="checkbox" id="accordion-1" className="peer" />
              <label htmlFor="accordion-1" className="collapse-title text-xl font-medium peer-checked:bg-gray-300">
                How Long Does is take to make a webDevlopment Project
              </label>
              <div className="collapse-content">
                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis porta lacus eget pretium. Integer non ipsum enim. Praesent dapibus sapien dolor, eget pharetra nibh vulputate consectetur. Proin consectetur consectetur nisl, ac lacinia erat porttitor a. </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="checkbox" id="accordion-1" className="peer" />
              <label htmlFor="accordion-1" className="collapse-title text-xl font-medium peer-checked:bg-gray-300">
                How Long Does is take to make a webDevlopment Project
              </label>
              <div className="collapse-content">
                <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis porta lacus eget pretium. Integer non ipsum enim. Praesent dapibus sapien dolor, eget pharetra nibh vulputate consectetur. Proin consectetur consectetur nisl, ac lacinia erat porttitor a. </p>
              </div>
            </div>


          </div>

          {/* Login Section */}
          <div className="w-full lg:w-1/2">
            <div className="hero min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div>


                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                  <form className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Question</span>
                      </label>
                      <textarea
                        placeholder="Enter Your Question"
                        className="textarea textarea-primary textarea-lg w-full max-w-xs"></textarea>
                    </div>

                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Send Your Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>






      </section>

      <section className="mt-20">
        <div className="flex items-center justify-center">
          <Marquee className="flex  gap-4">
            <h1 className="text-5xl uppercase font-unbounded font-bold  drop-shadow-lg outline-double text-white shadow-lg">
              *let's Start*
            </h1>
            <h1 className="text-5xl uppercase drop-shadow-lg font-unbounded font-bold text-black double-outline">
              *Let's Start*
            </h1>
            <h1 className="text-5xl uppercase font-unbounded font-bold  drop-shadow-lg outline-double text-white shadow-lg">
              *let's Start*
            </h1>
            <h1 className="text-5xl uppercase drop-shadow-lg font-unbounded font-bold text-black double-outline">
              *Let's Start*
            </h1>
            <h1 className="text-5xl uppercase font-unbounded font-bold  drop-shadow-lg outline-double text-white shadow-lg">
              *let's Start*
            </h1>
            <h1 className="text-5xl uppercase drop-shadow-lg font-unbounded font-bold text-black double-outline">
              *Let's Start*
            </h1>
            <h1 className="text-5xl uppercase font-unbounded font-bold  drop-shadow-lg outline-double text-white shadow-lg">
              *let's Start*
            </h1>
            <h1 className="text-5xl uppercase drop-shadow-lg font-unbounded font-bold text-black double-outline">
              *Let's Start*
            </h1>
           
          </Marquee>

        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Page;
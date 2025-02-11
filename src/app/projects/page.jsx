
"use client"
import React from 'react';
import NavBar from "@/components/NavBar/NavBar";
import useAnimation from '@/hooks/useAnimation';
import ProjectRepSection from '../../components/RepeatProjectsSection/ProjectRepSection';
import Footer from "@/components/Footer/Footer";

const page = () => {

    const LeftRef = useAnimation("left", 1, 0.5);
    const rightRef = useAnimation("right", 1, 0.5);
    return (
        <div className="max-w-6xl mx-auto ">
            <NavBar />
            <section>
                <div
                    className="hero min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url(/projectsbg.png)" }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">Our Latest Work</h1>
                            <p className="mb-5">Transforming Ideas into Impactful Solutions</p>
                        </div>
                    </div>
                </div>


            </section>

            <section >
                <div ref={LeftRef} className="mt-10 ml-6 ">
                    <h1 className='text-5xl font-unbounded text-white font-bold drop-shadow-lg shadow-black uppercase '>
                        web
                    </h1>
                    <h1 className='text-5xl font-unbounded  font-bold  uppercase '>
                        devlopment
                    </h1>
                </div>

                <div ref={rightRef} className="mt-10 flex justify-end">
                    <p className="w-[50%]">
                        Data is your most valuable asset.But only if you make the most of it.
                        AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.

                    </p>

                </div>


            </section>

            <ProjectRepSection></ProjectRepSection>
            <section >
                <div ref={rightRef} className="mt-10  flex flex-col   items-end">
                    <h1 className='text-5xl font-unbounded text-white font-bold drop-shadow-lg shadow-black uppercase '>
                        Paid
                    </h1>

                    <h1 className='text-5xl font-unbounded  font-bold  uppercase '>
                        Advertisement
                    </h1>
                </div>

                <div ref={LeftRef} className="mt-10 ">
                    <p className="w-[50%]">
                        Data is your most valuable asset.But only if you make the most of it.
                        AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.

                    </p>

                </div>


            </section>

            <ProjectRepSection></ProjectRepSection>
            <section >
                <div ref={LeftRef} className="mt-10 ml-6 ">
                    <h1 className='text-5xl font-unbounded text-white font-bold drop-shadow-lg shadow-black uppercase '>
                        Search Engine
                    </h1>
                    <h1 className='text-5xl font-unbounded  font-bold  uppercase '>
                        optimization
                    </h1>
                </div>

                <div ref={rightRef} className="mt-10 flex justify-end">
                    <p className="w-[50%]">
                        Data is your most valuable asset.But only if you make the most of it.
                        AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.

                    </p>

                </div>


            </section>

            <ProjectRepSection></ProjectRepSection>
            <section >
                <div ref={rightRef} className="mt-10  flex flex-col   items-end">
                    <h1 className='text-5xl font-unbounded text-white font-bold drop-shadow-lg shadow-black uppercase '>
                      social
                    </h1>

                    <h1 className='text-5xl font-unbounded  font-bold  uppercase '>
                        media post
                    </h1>
                </div>

                <div ref={LeftRef} className="mt-10 ">
                    <p className="w-[50%]">
                        Data is your most valuable asset.But only if you make the most of it.
                        AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.

                    </p>

                </div>


            </section>

            <ProjectRepSection></ProjectRepSection>
            <section >
                <div ref={LeftRef} className="mt-10 ml-6 ">
                    <h1 className='text-5xl font-unbounded text-white font-bold drop-shadow-lg shadow-black uppercase '>
                        Mobile app 
                    </h1>
                    <h1 className='text-5xl font-unbounded  font-bold  uppercase '>
                        devlopment
                    </h1>
                </div>

                <div ref={rightRef} className="mt-10 flex justify-end">
                    <p className="w-[50%]">
                        Data is your most valuable asset.But only if you make the most of it.
                        AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.

                    </p>

                </div>


            </section>

            <ProjectRepSection></ProjectRepSection>
            <section >
                <div ref={rightRef} className="mt-10  flex flex-col   items-end">
                    <h1 className='text-5xl font-unbounded text-white font-bold drop-shadow-lg shadow-black uppercase '>
                      Classified
                    </h1>

                    <h1 className='text-5xl font-unbounded  font-bold  uppercase '>
                         post
                    </h1>
                </div>

                <div ref={LeftRef} className="mt-10 ">
                    <p className="w-[50%]">
                        Data is your most valuable asset.But only if you make the most of it.
                        AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.

                    </p>

                </div>


            </section>

            <ProjectRepSection></ProjectRepSection>

            <Footer />


        </div>
    );
};

export default page;
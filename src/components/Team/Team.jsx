"use client";

import useAnimation from "@/hooks/useAnimation";
import { useState } from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Team = () => {
    const leftRef = useAnimation("left", 1, 0.25);
    const rightRef = useAnimation("right", 1, 0.25);
    const upRef = useAnimation("up", 1, 0.25);
    
    // Modify state to hold the id of the clicked section
    const [clicked, setClicked] = useState(null);

    const handleClick = (id) => {
        // Toggle the clicked state based on the section id
        setClicked(clicked === id ? null : id);
    };

    return (
        <div className="mt-20">
            <section className="space-y-10">
                <div ref={rightRef} className="flex justify-end">
                    <div className="flex flex-col space-y-4">
                        <h1 className="flex font-bold text-5xl uppercase justify-end">team of</h1>
                        <div className="flex flex-row gap-1 items-center">
                            <p className="text-4xl">Meet the Crew</p>
                            <h1
                                style={{
                                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                                }}
                                className="font-bold text-5xl uppercase text-white">expertise</h1>
                        </div>
                    </div>
                </div>

                <div ref={leftRef} className="w-full md:w-[50%]">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus
                        lectus, faucibus vitae nulla vitae, pharetra volutpat metus.
                        Pellentesque in risus interdum, pellentesque tortor eu, tincidunt
                        elit. Maecenas ac diam ipsum. Sed at dolor ut lectus vestibulum
                        semper. Proin facilisis eleifend leo lobortis feugiat. Duis mattis
                        volutpat tellus a pulvinar. Suspendisse potenti.
                    </p>
                </div>
            </section>

            <section ref={upRef}  className="mt-20 rounded-2xl  flex flex-col space-y-1 items-center justify-center">
                {['David Cooper / Product Manager', 'John Doe / Developer', 'Jane Smith / Designer', 'Alice Lee / Marketing'].map((name, index) => {
                    const sectionId = `section-${index}`;

                    return (
                        <div key={sectionId}>
                            <h1
                                onClick={() => handleClick(sectionId)}
                                className={`cursor-pointer ${clicked === sectionId ? 'bg-black w-[800px] rounded-2xl h-[50px] text-white mt-8 flex items-center justify-center' : 'w-[800px] flex items-center justify-center mt- rounded-2xl h-[50px] text-black bg-gray-200 text-2xl font-bold'}`}
                            >
                                {name}
                            </h1>
                            {clicked === sectionId && (
                                <div className="flex items-center -mt-20 ml-[600px] ">
                                    {/* Avatar and icons container */}
                                    <div className="avatar mr-4">
                                        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                            <img src="/circle.jpg" alt="Avatar" />
                                        </div>
                                    </div>
                                    {/* Social icons next to avatar */}
                                    <div className="flex gap-4 text-white text-2xl mt-2">
                                        <FaFacebook className="text-xl cursor-pointer" />
                                        <FaInstagram className="text-xl cursor-pointer" />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default Team;

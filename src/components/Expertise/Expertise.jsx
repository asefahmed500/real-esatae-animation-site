"use client";

import React from "react";
import useAnimation from "@/hooks/useAnimation";

const Expertise = () => {
    const leftRef = useAnimation("left", 1, 0.25);
    const uptRef = useAnimation("up", 1, 0.25);

    return (
        <div className="bg-black mt-20 w-full h-[850px] rounded-xl space-y-10">
            <section className="p-10">
                <div ref={leftRef} className="ml-10">
                    <div className="flex flex-col space-y-4 mt-10">
                        <h1 className="font-bold text-3xl md:text-5xl uppercase text-white">
                            Our Expertise
                        </h1>
                        <div className="flex flex-col md:flex-row md:gap-1 items-center">
                            <h1
                                style={{
                                    textShadow:
                                        "-1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF",
                                }}
                                className="font-bold text-3xl md:text-5xl uppercase text-black"
                            >
                                In Action
                            </h1>
                            <p className="text-xl md:text-4xl text-white">
                                Featured Products
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={uptRef} className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10">
                    {/* Card 1 */}
                    <div >
                        <div className="card bg-black shadow-xl">
                            <figure className="px-6 pt-6">
                                <img
                                    src="/cardone.png"
                                    alt="Product"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center bg-black text-white  -mt-4 -ml-10 rounded-4xl">
                                <h4 className="card-title text-sm md:text-base font-bold uppercase">
                                    Classified Add Post!
                                </h4>
                                <p className="text-xs md:text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                    ac accumsan ipsum, nec hendrerit eros.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="-mt-6">
                        <div className="card bg-black shadow-xl">
                            <figure className="px-6 pt-6">
                                <img
                                    src="/cardone.png"
                                    alt="Product"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center bg-black text-white  -mt-4 -ml-12 rounded-2xl">
                                <h4 className="card-title text-sm md:text-base font-bold uppercase">
                                    Classified Add Post!
                                </h4>
                                <p className="text-xs md:text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                    ac accumsan ipsum, nec hendrerit eros.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="-mt-12">
                        <div className="card bg-black shadow-xl">
                            <figure className="px-6 pt-6">
                                <img
                                    src="/cardone.png"
                                    alt="Product"
                                    className="rounded-xl w-full h-40 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center bg-black text-white -mt-4 -ml-10 rounded-4xl">
                                <h4 className="card-title text-sm md:text-base font-bold uppercase">
                                    Classified Add Post!
                                </h4>
                                <p className="text-xs md:text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                    ac accumsan ipsum, nec hendrerit eros.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Expertise;

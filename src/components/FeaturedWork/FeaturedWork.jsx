"use client";

import React, { useEffect, useRef, useState } from 'react';

const FeaturedWork = () => {
    const [isFirstSectionVisible, setIsFirstSectionVisible] = useState(false);
    const [isThirdSectionVisible, setIsThirdSectionVisible] = useState(false);
    const firstSectionRef = useRef(null);
    const thirdSectionRef = useRef(null);
    const [activeImage, setActiveImage] = useState(null);

    const handleImageClick = (index) => {
        setActiveImage(index);
    };

    useEffect(() => {
        // Observer for the first section
        const firstSectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsFirstSectionVisible(true);
                    } else {
                        setIsFirstSectionVisible(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        // Observer for the third section
        const thirdSectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsThirdSectionVisible(true);
                    } else {
                        setIsThirdSectionVisible(false);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (firstSectionRef.current) {
            firstSectionObserver.observe(firstSectionRef.current);
        }

        if (thirdSectionRef.current) {
            thirdSectionObserver.observe(thirdSectionRef.current);
        }

        return () => {
            if (firstSectionRef.current) {
                firstSectionObserver.unobserve(firstSectionRef.current);
            }
            if (thirdSectionRef.current) {
                thirdSectionObserver.unobserve(thirdSectionRef.current);
            }
        };
    }, []);

    return (
        <div>
            {/* First Section */}
            <div className='mt-10' ref={firstSectionRef}>
                <style>
                    {`
                    @keyframes slideInFromLeft {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    @keyframes slideInFromBottom {
                        0% {
                            transform: translateY(100%);
                        }
                        100% {
                            transform: translateY(0);
                        }
                    }
                    `}
                </style>

                {/* Animated Text */}
                <div className='space-y-4'>
                    {/* "we build" */}
                    <h3
                        className='text-4xl uppercase font-extrabold'
                        style={{
                            animation: isFirstSectionVisible ? 'slideInFromLeft 1s ease-in-out forwards' : 'none',
                        }}
                    >
                        we build ,
                    </h3>

                    {/* "WE PROMOTE" and "you grow" */}
                    <div className='flex flex-col sm:flex-row gap-2'>
                        <h1
                            className="text-4xl sm:text-6xl font-bold uppercase text-white"
                            style={{
                                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                                animation: isFirstSectionVisible ? 'slideInFromLeft 1s ease-in-out forwards' : 'none',
                            }}
                        >
                            WE PROMOTE
                        </h1>
                        <h2
                            className='text-xl sm:text-2xl uppercase mt-4 sm:mt-0 font-semibold'
                            style={{
                                animation: isFirstSectionVisible ? 'slideInFromLeft 1s ease-in-out forwards' : 'none',
                            }}
                        >
                            you grow
                        </h2>
                    </div>
                </div>
            </div>

            {/* Second Section (Image Gallery) */}
            <div className='mt-10 ml-20'>
                <div className='flex items-center justify-center'>
                    <img src='frame.png' alt='frame work' className='max-w-full h-auto' />
                </div>
                <div className='flex items-center justify-center gap-4 mt-4 sm:ml-20'>
                    {/* Image 1 */}
                    <img
                        className={`rounded-3xl transition-all duration-300 cursor-pointer ${activeImage === 0 ? 'w-[300px]' : 'w-[100px]'
                            } h-[250px] sm:h-[400px] hover:opacity-80`}
                        src="/imgone.jpg"
                        alt="Image 1"
                        onClick={() => handleImageClick(0)}
                    />

                    {/* Image 2 */}
                    <img
                        className={`rounded-3xl transition-all duration-300 cursor-pointer ${activeImage === 1 ? 'w-[300px]' : 'w-[100px]'
                            } h-[250px] sm:h-[400px] hover:opacity-80`}
                        src="/imgtwo.jpg"
                        alt="Image 2"
                        onClick={() => handleImageClick(1)}
                    />

                    {/* Image 3 */}
                    <img
                        className={`rounded-3xl transition-all duration-300 cursor-pointer ${activeImage === 2 ? 'w-[300px]' : 'w-[100px]'
                            } h-[250px] sm:h-[400px] hover:opacity-80`}
                        src="/imgthree.jpg"
                        alt="Image 3"
                        onClick={() => handleImageClick(2)}
                    />
                </div>
            </div>

            {/* Third Section (Numbered List) */}
            <div className='mt-10' ref={thirdSectionRef}>
                <div
                    className='flex flex-col sm:flex-row gap-8 p-4'
                    style={{
                        animation: isThirdSectionVisible ? 'slideInFromBottom 1s ease-in-out forwards' : 'none',
                        transform: isThirdSectionVisible ? 'translateY(0)' : 'translateY(100%)',
                        opacity: isThirdSectionVisible ? 1 : 0,
                    }}
                >
                    {/* one */}
                    <div className='flex flex-col gap-8'>
                        <div className='flex'>
                            <h1
                                className="text-4xl sm:text-6xl font-bold uppercase text-white"
                                style={{
                                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                                }}
                            >
                                01.
                            </h1>
                            <p className='font-bold mt-4 sm:mt-9'>Website Development</p>
                        </div>
                        <p className='text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste modi labore nemo unde vel odio laborum et voluptatem cumque, dolores tempore minus nihil mollitia? Minima officia aliquam illum culpa!
                        </p>
                    </div>
                    {/* two */}
                    <div className='flex flex-col gap-8'>
                        <div className='flex'>
                            <h1
                                className="text-4xl sm:text-6xl font-bold uppercase text-white"
                                style={{
                                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                                }}
                            >
                                02.
                            </h1>
                            <p className='font-bold mt-4 sm:mt-9'>Paid Advertisement</p>
                        </div>
                        <p className='text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste modi labore nemo unde vel odio laborum et voluptatem cumque, dolores tempore minus nihil mollitia? Minima officia aliquam illum culpa!
                        </p>
                    </div>
                    {/* three */}
                    <div className='flex flex-col gap-8'>
                        <div className='flex'>
                            <h1
                                className="text-4xl sm:text-6xl font-bold uppercase text-white"
                                style={{
                                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                                }}
                            >
                                03.
                            </h1>
                            <p className='font-bold mt-4 sm:mt-9'>Classified Ad Post</p>
                        </div>
                        <p className='text-sm sm:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste modi labore nemo unde vel odio laborum et voluptatem cumque, dolores tempore minus nihil mollitia? Minima officia aliquam illum culpa!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedWork;

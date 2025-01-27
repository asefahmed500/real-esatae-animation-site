import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(/bgimage.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md md:max-w-lg lg:max-w-xl">
                        <p className="mb-5 text-3xl sm:text-4xl md:text-5xl  uppercase font-bold space-y-4 sm:space-y-6">
                            Where <br />
                            <span className='whitespace-nowrap'>digital Strategy</span>  <br />
                            <span className='whitespace-nowrap'>meets Creativity</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
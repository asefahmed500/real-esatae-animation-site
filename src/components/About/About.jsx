import React from 'react';

const About = () => {
    return (
        <div className="  h-auto w-full flex flex-col space-y-10 items-center justify-center mt-10">
            <div className='flex space-x-6 ' >
                <h1
                    style={{
                        textShadow: '-1px -1px 0 #ffff, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                    }}
                    className="font-bold text-5xl uppercase text-white">About <br /> Our</h1>
                <h1 className="font-bold text-3xl md:text-5xl uppercase text-black">
                    agency
                </h1>

            </div>
            <div className='mt-10'>
                <img className="w-full h-full rounded-2xl" src="about.png " alt="" />



            </div>
        </div>
    );
};

export default About;
"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { LuAlignJustify } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCard = () => {
        setIsCardVisible(!isCardVisible);
    };

    const navOptions = (
        <>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/">Home</Link>
            </li>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/">Services</Link>
            </li>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/">Projects</Link>
            </li>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/">Blog</Link>
            </li>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/">Contact</Link>
            </li>
        </>
    );

    return (
        <div className='fixed top-0 left-0 w-full text-white z-50'>
            {/* Container with max-width of 6xl and black background */}
            <div className="max-w-6xl mx-auto bg-black px-4 sm:px-6 lg:px-8">
                <div className="navbar py-2">
                    {/* Navbar Start */}
                    <div className="navbar-start">
                        <Link href="/" className="text-xl font-bold btn btn-ghost">
                            <img className="w-14 h-8 rounded" src="/logo.jpg" alt="Logo" />
                        </Link>
                    </div>

                    {/* Navbar Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-4 gap-4">{navOptions}</ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end flex items-center gap-4">
                        {/* Hamburger Menu for Mobile */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="btn btn-ghost">
                                <LuAlignJustify className="text-2xl text-white" />
                            </button>
                            {isMenuOpen && (
                                <div className="fixed inset-0 bg-black bg-opacity-75 z-50" onClick={toggleMenu}>
                                    <div className="absolute top-0 right-0 w-64 h-full bg-black text-white p-4">
                                        <button onClick={toggleMenu} className="absolute top-4 right-4">
                                            <AiOutlineClose className="text-2xl cursor-pointer text-gray-300 hover:text-white" />
                                        </button>
                                        <ul className="menu mt-12 space-y-4">
                                            {navOptions}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Settings Icon and Card */}
                        <div className="relative">
                            <button onClick={toggleCard}>
                                <IoSettingsOutline className="text-2xl cursor-pointer" />
                            </button>

                            {isCardVisible && (
                                <div className="absolute right-0 top-12 w-full sm:w-96 bg-gray-800 text-white rounded-lg shadow-lg z-50">
                                    <div className="flex justify-between items-center p-4 border-b border-gray-600">
                                        <img className="w-16 h-8" src="/cardimglogo.png" alt="Logo" />
                                        <button onClick={toggleCard}>
                                            <AiOutlineClose className="text-2xl cursor-pointer text-gray-300 hover:text-white" />
                                        </button>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        <p className="text-sm text-gray-300">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, incidunt?
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <img className="w-full h-24 rounded object-cover" src="/cardimgone.png" alt="imgone" />
                                            <img className="w-full h-24 rounded object-cover" src="/cardimgtwo.png" alt="imgtwo" />
                                            <img className="w-full h-24 rounded object-cover" src="/cardimgthree.png" alt="imgthree" />
                                            <img className="w-full h-24 rounded object-cover" src="/cardimgfour.png" alt="imgfour" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                                        <p className="text-sm text-gray-300">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam reprehenderit!
                                        </p>
                                        <div className="flex gap-4 text-white">
                                            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
                                            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
                                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
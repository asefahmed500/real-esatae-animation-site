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
                <Link className="uppercase text-sm hover:text-gray-400" href="/services">Services</Link>
            </li>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/projects">Projects</Link>
            </li>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/blogs">Blog</Link>
            </li>
            <li>
                <Link className="uppercase text-sm hover:text-gray-400" href="/">Contact</Link>
            </li>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full text-white z-50  ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
                <div className="flex justify-between items-center py-4">
                    
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        <img className="w-14 h-8 rounded" src="/logo.jpg" alt="Logo" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-6">
                        <ul className="flex gap-6">{navOptions}</ul>
                    </div>

                    {/* Icons for both Mobile & Desktop */}
                    <div className="flex items-center gap-4">
                        {/* Settings Icon (visible on all screens) */}
                        <button onClick={toggleCard} className="text-2xl ">
                            <IoSettingsOutline />
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-2xl">
                                <LuAlignJustify />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Drawer */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                            isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } lg:hidden z-50`}
                    >
                        <button onClick={toggleMenu} className="absolute top-4 right-4">
                            <AiOutlineClose className="text-2xl text-gray-300 hover:text-white" />
                        </button>
                        <ul className="flex flex-col mt-12 space-y-6 p-6">{navOptions}</ul>
                    </div>

                    {/* Settings Card */}
                    {isCardVisible && (
                       <div className="">
                         <div className="absolute top-16 w-80 bg-gray-800 text-white rounded-lg shadow-lg z-50 -ml-[300px]">
                            <div className="flex justify-between items-center p-4 border-b border-gray-600">
                                <img className="w-16 h-8" src="/cardimglogo.png" alt="Logo" />
                                <button onClick={toggleCard}>
                                    <AiOutlineClose className="text-2xl cursor-pointer text-gray-300 hover:text-white" />
                                </button>
                            </div>
                            <div className="p-4 space-y-4">
                                <p className="text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    <img className="w-full h-24 rounded object-cover" src="/cardimgone.png" alt="imgone" />
                                    <img className="w-full h-24 rounded object-cover" src="/cardimgtwo.png" alt="imgtwo" />
                                    <img className="w-full h-24 rounded object-cover" src="/cardimgthree.png" alt="imgthree" />
                                    <img className="w-full h-24 rounded object-cover" src="/cardimgfour.png" alt="imgfour" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                                <p className="text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                                <div className="flex gap-4 text-white">
                                    <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
                                    <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
                                    <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
                                </div>
                            </div>
                        </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;

"use client";

import Image from "next/image";
import { memo, useState } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { BiSolidGrid } from "react-icons/bi";
import { FiDownload, FiMenu } from "react-icons/fi";
import MobileDrawer from "../MobileDrawer";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-white dark:bg-[#1a213d] text-[#171717] dark:text-white shadow-sm px-6 md:px-12 py-3">
                <div className="flex items-center justify-between w-full">
                    {/* Left: Logo + Nav */}
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <Image src="/KoinbxLogo.svg" alt="KoinBX" width={120} height={40} priority />

                        {/* Grid Icon */}
                        <BiSolidGrid size={22} className="text-black dark:text-gray-300 hidden md:block" />

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex gap-8 text-sm font-medium">
                            <a href="#" className="hover:text-black dark:hover:text-sky-400">Markets</a>
                            <a href="#" className="hover:text-black dark:hover:text-sky-400">Fees</a>
                            <a href="#" className="hover:text-black dark:hover:text-sky-400">Trade</a>
                            <a href="#" className="hover:text-black dark:hover:text-sky-400">List Your Crypto</a>
                            <a href="#" className="hover:text-black dark:hover:text-sky-400">Earnings</a>
                        </nav>
                    </div>

                    {/* Right: Desktop */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
                        {/* <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400">Login</a>

                        <button className="bg-[#47E1FF] text-black px-5 py-1.5 rounded-full font-semibold hover:bg-[#31d9f7] transition">
                            Register
                        </button> */}
                        <HiOutlineSpeakerphone size={22} color="green" />
                        <div className="flex items-center   relative">
                            <h1 className="text-[12px] text-gray-800 dark:text-white">
                                Trade Contest
                            </h1>

                            <div className="absolute top-[-15] right-[-5]">
                                <span className="bg-red-600 text-white text-[6px] font-normal px-2 py-1 rounded-md flex items-center justify-center">
                                    LIVE
                                    <span className="ml-1 w-1 h-1 bg-white rounded-full animate-pulse"></span>
                                </span>
                            </div>
                        </div>
                        <button className="bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold transition">
                            Deposit
                        </button>
                        <IoPersonCircle size={22} color="gray" />
                        <DarkModeToggle iconSize={22} />

                        <button className="hover:text-sky-500 dark:hover:text-sky-400">
                            <FiDownload size={22} />
                        </button>
                    </div>

                    {/* Mobile: Right Section */}
                    <div className="flex md:hidden items-center gap-4">
                        {/* <button className="bg-[#47E1FF] text-black px-4 py-1.5 rounded-full font-medium hover:bg-[#31d9f7] transition">
                            Register
                        </button> */}
                        <button onClick={() => setMobileMenuOpen(true)}>
                            <FiMenu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <MobileDrawer open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
}

export default memo(Navbar);

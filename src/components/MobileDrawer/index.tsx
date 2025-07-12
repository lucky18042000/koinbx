'use client';

import { FiX, FiChevronRight } from 'react-icons/fi';
import DarkModeToggle from '../DarkModeToggle';
import { memo } from 'react';

interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
}

function MobileDrawer({ open, onClose }: MobileDrawerProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div className="absolute inset-0  bg-opacity-50" onClick={onClose} />

            {/* Drawer */}
            <div className="relative z-10 w-72 sm:w-80 h-full overflow-scroll backdrop-blur-xl bg-white/70 dark:bg-[#1a213d]/70 text-black dark:text-white shadow-lg p-6 animate-slide-in">
                {/* Close Button */}
                <div className="absolute top-4 right-4">
                    <button
                        className="bg-black dark:bg-white text-white dark:text-black rounded-full p-1.5"
                        onClick={onClose}
                    >
                        <FiX size={16} />
                    </button>
                </div>

                {/* Auth */}
                {/* <div className="mt-8 mb-6 flex flex-col items-center gap-2">
                    <p className="font-semibold">Login</p>
                    <button className="w-full bg-[#47E1FF] text-black py-2 rounded-full font-medium hover:bg-[#31d9f7]">
                        Register
                    </button>
                </div> */}

                {/* Links */}
                <nav className="flex flex-col gap-4 text-sm font-medium">
                    {[
                        'Market',
                        'Fees',
                        'Trade',
                        'List Your Crypto',
                        'Earn',
                        'Trade Contest',
                    ].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="flex justify-between py-6 items-center hover:text-sky-400"
                        >
                            {item} <FiChevronRight size={16} />
                        </a>
                    ))}
                </nav>

                {/* Theme Toggle */}
                <div className="mt-8 border-t pt-4 px-1 text-sm flex items-center justify-between">
                    <span>Theme</span>
                    <DarkModeToggle iconSize={22} />
                </div>
            </div>
        </div>
    );
}

export default memo(MobileDrawer)

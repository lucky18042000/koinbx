'use client';

import { useTheme } from 'next-themes';
import { memo, useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function DarkModeToggle({ iconSize = 18 }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <FaMoon size={iconSize} /> : <MdSunny size={iconSize} />}
        </button>
    );
}

export default memo(DarkModeToggle)
